import React from "react";
import Particle from "./Particle";
import TextEffect from "./TextEffect";
import Image from "next/image";
import { ArrowDownTrayIcon, PlayCircleIcon } from "@heroicons/react/20/solid";
import { EnvelopeIcon } from '@heroicons/react/20/solid'
import { LinkIcon } from '@heroicons/react/20/solid'
import { MapIcon } from '@heroicons/react/20/solid'
import { DocumentTextIcon } from '@heroicons/react/20/solid'
import { FaGithub, FaLinkedin } from 'react-icons/fa';


const Hero = () => {
    return (
        <div id="home" className="h-[88vh] bg-[url('/images/banner.jpg')] mt-[10vh] bg-cover bg-center ">
            <Particle />
            <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
                <div>
                    <h1 className="text-[35px] md:text-[50px] text-white font-bold ">
                        HI, I'M <span className="text-purple-500">RYAN</span>
                    </h1>
                    <TextEffect />
                    <p className="mt-[1.5rem] text-[18px] text-[#ffffff92] ">
                        Welcome to my website! I'm currently a rising junior at the University of Michigan double-majoring in Computer Science and Pure Mathematics 
                        with a vision of transforming the world through technology.
                    </p>
                    <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6">
                        <a href="https://drive.google.com/drive/folders/1lFUEtvOYon3lTRQTg5rMYAExnY4YC0Cs?usp=drive_link" target="_blank" rel="noopener noreferrer" className="inline-block">
                            <button className="px-[1rem] hover:bg-purple-500 transi tion-all duration-200 py-[1rem] text-[15px] font-bold rounded-full uppercase bg-[#55e6a5] text-black flex items-center space-x-2">
                                <DocumentTextIcon className="w-[1.6rem] h-[1.7rem] text-black" />
                                <p>Resume</p>
                            </button>
                        </a>
                        <a href="mailto:rysjain@umich.edu" target="_blank" rel="noopener noreferrer" className="inline-block">
                            <button className="px-[1rem] hover:bg-purple-500 transition-all duration-200 py-[1rem] text-[15px] font-bold rounded-full uppercase bg-[#55e6a5] text-black flex items-center space-x-2">
                                <EnvelopeIcon className="w-[1.6rem] h-[1.7rem] text-black" />
                                <p>Email</p>
                            </button>
                        </a>
                        <a href="https://www.linkedin.com/in/ryanjain/" target="_blank" rel="noopener noreferrer" className="inline-block">
                            <button className="px-[1rem] hover:bg-purple-500 transition-all duration-200 py-[1rem] text-[15px] font-bold rounded-full uppercase bg-[#55e6a5] text-black flex items-center space-x-2">
                                <FaLinkedin className="w-[1.6rem] h-[1.7rem] text-black" />
                                <p>Linkedin</p>
                            </button>
                        </a>
                        <a href="https://github.com/rjshs" target="_blank" rel="noopener noreferrer" className="inline-block">
                            <button className="px-[1rem] hover:bg-purple-500 transition-all duration-200 py-[1rem] text-[15px] font-bold rounded-full uppercase bg-[#55e6a5] text-black flex items-center space-x-2">
                                <FaGithub className="w-[1.6rem] h-[1.7rem] text-black" />
                                <p>GitHub</p>
                            </button>
                        </a>
                    </div>
                </div>
                <div className="w-[500px] hidden bg-[#55e6a5] relative lg:flex items-center rounded-full h-[500px]">
                    <Image src="/images/Jain_Ryan_Headshot.jpg" alt="user" layout="fill" className="object-cover rounded-full"/>
                </div>
            </div>
        </div>
    );
};

export default Hero;

