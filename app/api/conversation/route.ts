import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

import { checkSubscription } from "@/lib/subscription";
import { incrementApiLimit, checkApiLimit } from "@/lib/api-limit";
import type { NextApiRequest, NextApiResponse } from 'next'
import OpenAI from "openai";

const configuration = {
  apiKey: process.env.OPENAI_API_KEY,
};

const openai = new OpenAI({ apiKey: configuration.apiKey });


export async function POST(
  req: Request,
  res: NextApiResponse
) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { messages  } = body;
    
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!configuration.apiKey) {
      return new NextResponse("OpenAI API Key not configured.", { status: 500 });
    }

    if (!messages) {
      return new NextResponse("Messages are required", { status: 400 });
    }

    const freeTrial = await checkApiLimit();
    const isPro = await checkSubscription();

    if (!freeTrial && !isPro) {
      return new NextResponse("Free trial has expired. Please upgrade to pro.", { status: 403 });
    }

    const params: OpenAI.Chat.ChatCompletionCreateParams = {
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: 'Say this is a test' }],
    };
    
    const response: OpenAI.Chat.ChatCompletion = await openai.chat.completions.create(params);

    if (!isPro) {
      await incrementApiLimit();
    }

    return NextResponse.json(response.choices[0].message);
  } catch (error: any) {
    console.log('[CONVERSATION_ERROR]', error.message);
    
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};