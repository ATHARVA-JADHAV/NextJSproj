"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';


export default function HeroSection (){
  return (
 <section className="lg:py-16">
    <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
            <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold"><span className="text-transparent bg-clip-text  bg-gradient-to-br from-blue-500 via-purple-500 to-gray-600">Hello, Im {" "}</span><br/>
            <TypeAnimation
      sequence={[
        'Atharva.',
        1000, 
        'Web Developer.',
        1000,
        'UI/UX Designer.',
        1000,
        
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    /></h1>
            <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit! ehpwlepl ajnod </p>
            <button className="px-6 py-3 rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-gray-600 hover:bg-slate-300 w-full sm:w-fit text-white "> Hire Me</button>
            <button className="px-1 py-1 rounded-full bg-transparent bg-gradient-to-br from-blue-500 via-purple-500 to-gray-600 hover:bg-slate-800 w-full sm:w-fit text-white mt-3"> <span className=" block bg-[#121212] hover:bg-slate-800 px-5 py-2 rounded-full">Download CV </span></button>

            </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
            <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image src="/images/hero.png" 
            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" 
            width={300} height={300}
             alt="Hero Image" />
            </div>
        </div>
            </div>
 </section>
    );
}