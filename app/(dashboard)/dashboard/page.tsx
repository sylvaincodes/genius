"use client"
import { Avatar, Box, Card, Flex, IconButton, Text } from "@radix-ui/themes";
import {
  ChevronRight,
  Code,
  ImageIcon,
  MessageSquare,
  Music,
  VideoIcon,
} from "lucide-react";
import { useRouter } from "next/navigation";

const tools = [
  {
    label: "Conversation",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
  {
    label: "Music Generation",
    icon: Music,
    href: "/music",
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    color: "text-pink-700",
    bgColor: "bg-pink-700/10",
    href: "/image",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    color: "text-orange-700",
    bgColor: "bg-orange-700/10",
    href: "/video",
  },
  {
    label: "Code Generation",
    icon: Code,
    color: "text-green-700",
    bgColor: "bg-green-700/10",
    href: "/code",
  },
];

export default function Home() {
  const router =  useRouter();
  return (

    <main className="flex min-h-screen flex-col items-center gap-12 p-12">
      
      <Flex gap="3" direction="column" align="center">
        <Text size="8" className="font-bold">
          Explore the power of AI.
        </Text>
        <Text size="5">Chat with the smartest AI Experience </Text>
      </Flex>


        <div className="grid grid-cols-3 auto-cols-fr gap-8 ">

      {
        tools.map((item, idx)=>{
           return <Card key={idx} style={{ width: 340 }} 
           className="cursor-pointer place-self-center" onClick={ ()=> router.push(item.href) } >
            
            <Flex gap="6" justify="start" align="center">
              
              <IconButton variant="soft">
                <item.icon className="{cn('w-8 h-8', item.bgColor) }"/>
              </IconButton>
    
              <Box>
                <Text as="div" size="2" weight="bold">
                 {item.label}
                </Text>
              </Box>
    
              <ChevronRight className="ms-auto" />
    
            </Flex>
    
          </Card>
        })
      }
      </div>
    </main>
  );
}
