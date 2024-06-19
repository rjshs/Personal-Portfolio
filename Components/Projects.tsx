import React from 'react'
import Image from 'next/image';

const projects = [
  { src: "/images/dao.png", alt: "DAO Project", description: "Developed a Web3-based Decentralized Autonomous Organization — a decentralized, autonomous democratic business. Implemented Remix IDE and Solidity to create smart contracts that respond to shareholder actions on the Ethereum blockchain with secure crypto tokens for privacy — can be used by decentralized company shareholders to vote on policy.", link: "https://github.com/rjshs/Ryan-Jain-AutoStart-DAO" },
  { src: "/images/autific.png", alt: "Autific Project", description: "Deployed a Swift-based iOS therapeutic assistant app with 2k+ global downloads leveraging the OpenCV library backed by a Single Shot MultiBox Detector (SSD) machine learning algorithm to recreate modern therapy experiences such as PRT, math games, grammar games, social behavior tutorials, and a creativity-based drawing board for autistic children virtually. Integrated URLSession for API calls and Core Animation/AVFoundation framework for animations and voice capabilities", link: "https://github.com/rjshs" },
  { src: "/images/hackathon.png", alt: "Hackathon Project", description: "Created a mobile app using React Native, Firebase, and Gemini API to optimize meal planning based on location, dietary preferences, and nutritional goals; integrated with Google Calendar, Google Maps, and Michigan Dining APIs. Developed a responsive chatbot with the Gemini API for real-time, personalized dining suggestions, dynamically adjusting to users’ schedule changes and dietary updates using API pings; ensured secure data synch via Firebase. Top 20 at the Google AI Hackathon", link: "https://devpost.com/software/eatinerary-e5jhx3" },
  { src: "/images/vrresearch.png", alt: "VR Research Project", description: "Built two virtual environments in Unity using C# to research the decisions behind human violence in fake and real-life settings. Conducted a 150+ person user study to gather data, analyzing participant feedback using Pandas and Matplotlib/Seaborn to discern patterns in user affinity towards violence, successfully correlating environmental realism with behavioral changes. First authored academic research paper accepted to IEEE VR conference; Presented to the UCSB CS Board of Directors", link: "https://drive.google.com/drive/folders/1DjfBArY4kx6gC9KUFOQV7hbykFWyUz4Q?usp=drive_link" },
  { src: "/images/mig.png", alt: "MIG Project", description: "Led a project team that developed a Principal Component Analysis (PCA) based pairs trading algorithm to trade a 50-stock ETF using 5 years of data. Ran K-means algorithm and ADFuller cointegration tests to create pairs; Used z-scores to trade. Tested our algorithm on $25k — 13k+ profit while maximizing our Sharpe ratio by minimizing the volatility of profits. Currently working on an NLP-based sentiment-analysis project to understand the effects of investor opinions on market prices", link: "https://github.com/MIG-Project-Challenge/team-1" },
  { src: "/images/phygtl.png", alt: "Phygtl Project", description: "Selected in a curated group of 25 university students to research findings on Founder and Professor Tommaso Di Bartolo’s. Web3 and AR startup Phygtl at UC Berkeley; Analyzed results of 80+ subjects and employed JavaScript to build AR interface. Interviewed 30+ industry executives and translated findings into a published research paper", link: "https://github.com/rjshs/Phygtl" },
];

const Projects = () => {
    return (
      <div id="projects" className='bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem]'>
        <h1 className="heading">
          Pro<span className='text-purple-500'>Jects</span>
        </h1>
        <div className='w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]'>
          {projects.map((project, index) => (
            <div key={index}>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <div className='relative w-[100%] h-[200px] md:h-[300px] transform cursor-pointer hover:-translate-y-6 transition-all duration-200'>
                  <div className='relative w-full h-full'>
                    <Image src={project.src} alt={project.alt} layout="fill" className="object-contain project-image"/>
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 hover:opacity-100 transition-opacity duration-200 project-description">
                      <p className='text-center'>{project.description}</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Projects;
  
  <style jsx>{`
    .project-image {
      transition: filter 0.3s ease;
    }
    .project-description {
      transition: opacity 0.3s ease;
    }
    .project-image:hover {
      filter: blur(5px);
    }
  `}</style>