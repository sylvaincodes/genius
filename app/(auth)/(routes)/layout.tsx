import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return <div className="grid grid-cols-1 md:grid-cols-2  min-h-screen">
        
        <div className="hidden md:flex" style={{ backgroundImage: `url('/login_image.jpg')`,
                height: '100vh',
                backgroundSize: 'cover',    
        }}>

        <div className="flex flex-col items-center p-32 mt-auto">
              
              <div className="flex flex-col gap-4">
                 <h1 className="text-4xl text-white font-bold leading-loose">   AI <strong className="text-primary-800">GENIUS</strong> </h1>
                 <p className="text-white text-normal text-xl leading-loose "> AI Genius: Streamline processes with a custom Software as a Service solution. AI Website: Transform your site into an interactive hub with ChatGPT integration </p>
              </div>

              <Link href="/" className="flex w-full mt-8 gap-x-4">
                 
                <ChevronLeft className="text-white font-bold" size={18} />
                <span className="capitalize text-white text-md hover:text-primary-800">
                  go back to home
                </span> 
              </Link>

        </div>

      </div>

      <div className="flex items-center justify-center md:p-x-10" >
        {children}
      </div>

  </div>
};

export default AuthLayout;
