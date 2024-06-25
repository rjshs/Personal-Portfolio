import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";
import React from "react";
import Image from "next/image";

const About = () => {
    return (
        <div id="about" className="bg-[#02050a] pb-[3rem] pt-[4rem] md:pt-[8rem]">
            <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
                <div>
                    <h1 className="text-[20px] font-bold uppercase text-[#55e6a5] mb-[1rem]">
                        ABOUT ME
                    </h1>
                    <h2 className="text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-white">
                        Transforming <span className="text-purple-500">Lives</span>
                    </h2>
                    <div className="mb-[3rem] flex items-center md:space-x-10">
                        <span className="w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm"></span>
                        <p className="text-[19px] text-slate-300 w-[80%]">
                            With past work experiences at Accenture, GreenLancer, Arizona State University, and more, I&apos;ve worked in a variety of software
                            development fields like full-stack development, machine learning, cloud computing (AWS, Azure)/infrastructure management, cybersecurity, quantitative finance, and operating systems.
                            I&apos;m interested in exploring the intersection between software and other fields like finance and healthcare to improve people&apos;s lives.
                        </p>
                    </div>
                    <div className="mb-[3rem] flex items-center md:space-x-10">
                        <span className="w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm"></span>
                        <p className="text-[19px] text-slate-300 w-[80%]">
                            Outside of academics, I love degenerately gambling my money away in poker, working out, boxing, and cooking. Thank you for
                            visiting my website, it&apos;s been a pleasure telling you a bit about myself. Feel free to poke around some more, and don&apos;t forget to reach out! :)
                        </p>
                    </div>
                </div>
                <div className="lg:w-[380px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative">
                    <Image src="/images/hariryan.JPG" alt="user" layout="fill" objectFit="contain" className="relative z-[11] w-[100%] h-[100%] object-contain" />
                    <div className="absolute w-[100%] h-[100%] bg-[#55e6a5] top-[-2rem] right-[-2rem]"></div>
                </div>
            </div>
        </div>
    );
};

export default About;