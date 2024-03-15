import type { Metadata } from "next";

import "./globals.css";
import { josefinSans } from "./fonts";
import { mergeOpenGraph } from "@/lib/mergeOpenGraph";
import { Providers } from "@/providers";

// setup default seo
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'),
  applicationName:'robots ai',
  keywords:["nextjs", 'sass','tailwindcss'],
  authors: [{ name: 'sylvaincodes', url: 'https://sylvaincodes.vercel.app' }],
  publisher:'vercel',

  alternates:{
    canonical:'/',
    languages:{
      'fr': '/fr'
    }
  },


  robots:{
    index: false,
    follow:true,
    nocache: true,
    googleBot:{
      index:true,
      noimageindex:false,
    }
  },

  manifest: ` ${process.env.NEXT_PUBLIC_SERVER_URL}/manifest.json`,

  icons:{
    icon: '/favicon.ico',
    shortcut:'/favicon.ico',
    apple:'favicon.ico'
  },

  twitter:{
    card: 'summary_large_image',
    title: 'Sass website',
    description: 'Product sass landing page',
    siteId: '',
    creator: 'sylvaincodes',
    images:[`${process.env.NEXT_PUBLIC_SERVER_URL}/og.png`]
  },

  openGraph:mergeOpenGraph()
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={josefinSans.className}>
        <Providers>
        {children}
        </Providers>
      </body>
    </html>
  );
}
