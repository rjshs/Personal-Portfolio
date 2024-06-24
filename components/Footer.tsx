import { EnvelopeIcon, DocumentTextIcon } from '@heroicons/react/20/solid';
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div id="contact" className="bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[0rem]">
      <p className="heading">
        Let&apos;s <span className="text-purple-500">Connect</span>
      </p>
      <div className="pt-[8rem] pb-[4rem] bg-[#02050a] text-center text-white">
        <div className="flex flex-col items-center space-y-6 w-[80%] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 border-b-[1px] pb-[3rem] border-gray-400 w-full">
            <div className="flex flex-col items-center space-y-2 group">
              <a href="mailto:rysjain@umich.edu" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center space-y-2 group">
                <div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5] transition-transform transform group-hover:scale-110">
                  <EnvelopeIcon className="md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black transition-transform transform group-hover:scale-110" />
                </div>
                <h1 className="text-[17px] opacity-60 transition-transform transform group-hover:scale-110">
                  Email
                </h1>
              </a>
            </div>
            <div className="flex flex-col items-center space-y-2 group">
              <a href="https://www.linkedin.com/in/ryanjain/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center space-y-2 group">
                <div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5] transition-transform transform group-hover:scale-110">
                  <FaLinkedin className="md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black transition-transform transform group-hover:scale-110" />
                </div>
                <h1 className="text-[17px] opacity-60 transition-transform transform group-hover:scale-110">
                  LinkedIn
                </h1>
              </a>
            </div>
            <div className="flex flex-col items-center space-y-2 group">
              <a href="https://github.com/rjshs" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center space-y-2 group">
                <div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5] transition-transform transform group-hover:scale-110">
                  <FaGithub className="md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black transition-transform transform group-hover:scale-110" />
                </div>
                <h1 className="text-[17px] opacity-60 transition-transform transform group-hover:scale-110">
                  GitHub
                </h1>
              </a>
            </div>
            <div className="flex flex-col items-center space-y-2 group">
              <a href="https://drive.google.com/drive/folders/1lFUEtvOYon3lTRQTg5rMYAExnY4YC0Cs?usp=drive_link" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center space-y-2 group">
                <div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5] transition-transform transform group-hover:scale-110">
                  <DocumentTextIcon className="md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black transition-transform transform group-hover:scale-110" />
                </div>
                <h1 className="text-[17px] opacity-60 transition-transform transform group-hover:scale-110">
                  Resume
                </h1>
              </a>
            </div>
          </div>

          <div className="mt-8 text-lg text-gray-400">
            <br />
            <br />
            <br />
            <br />Thanks for stopping by!
          </div>

          <div className="mt-4 mb-0 text-sm text-gray-500">
            Created by me, Ryan Jain. Built using React, Next.js, and TailwindCSS.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;