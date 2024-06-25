import React from 'react'
import SkillsItem from './SkillsItem'
import SkillsLanguage from './SkillsLanguage'

// const Skills = () => {
//   return (
//     <div className="bg-[#121212] pt-[4rem] md:pt-[8rem] pb-[5rem] bg[#09101a]">
//         <h1 className="heading">
//           Education and <span className='text-yellow-400'>Skills</span>
//         </h1>
//         <div className='w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center'>
//           <div>
//             <SkillsItem title="Software Engineer Intern" year="2024 - Current" description={`● Incoming member of Avanade’s security and risk team focused on enhancing safeguards and mitigating sensitive data leaks`} />
//             <SkillsItem title="Machine Learning Intern" year="2021 - 2023" description={`● Leveraged Convolutional Neural Networks and deep learning to analyze 10k+ topologies (node layouts) of databases, optimizing a corrective algorithm that rates the strength of databases and infrastructures; Used by secure military facilities
//              ● Spearheaded a research project that utilized the OPTICS Algorithm and MATLAB to collect, quantify, and process data of temperature differentials between 500+ FLIR images using pixels for New York’s Hospital for Special Surgery
//              ● Produced an efficient way of assessing post-surgery recovery by identifying issues in advance, saving 300+ documented lives`} />
//             <SkillsLanguage skill1="html" skill2="css" skill3="JavaScript" level1="w-[91%]" level2="w-[88%]" level3="w-[80%]" />
//           </div>
//           <div>
//             <SkillsItem title="Software Engineer Intern" year="2024 - 2024" description={`● Saved over $300k annually by migrating containerized data repositories from Docker to Node.js Lambda functions and AWS S3 using API Gateway, increasing scalability and reducing infrastructure management by 60% for faster development
//             ● Used Jira and Agile methodologies to reduce delivery times by 15%, increasing consumer satisfaction and team productivity
//             ● Employed full-stack development through the ASP.NET MVC framework written in C# and HTML to engineer the G-Force Business Process Network, a dynamic management tool for 30+ businesses and customers; Beta version saw $10k+ profit`} />
//             <SkillsItem title="Quantitative Developer" year="2023 - Current" description={`● Led a project team that developed a Principal Component Analysis (PCA) based pairs trading algorithm to trade a 50-stock ETF using 5 years of data. Ran K-means algorithm and ADFuller cointegration tests to create pairs; Used z-scores to trade
// ● Tested our algorithm on $25k — 13k+ profit while maximizing our Sharpe ratio by minimizing the volatility of profits
// ● Currently working on an NLP-based sentiment-analysis project to understand the effects of investor opinions on market prices`} />
//             <SkillsLanguage skill1="ReactJS" skill2="Next JS" skill3="TypeScript" level1="w-[81%]" level2="w-[78%]" level3="w-[60%]" />
//           </div>
//         </div>
//     </div>
//   )
// }

const Skills = () => {
  return (
    <div id="experience" className="bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[5rem] bg[#09101a]">
        <h1 className="heading">
          Experience and <span className='text-purple-500'>Skills</span>
        </h1>
        <div className='w-[80%] mx-auto pt-[4rem] md:pt-[8rem] flex flex-wrap gap-[2rem] items-start'>
          <div className='flex-1'>
            <SkillsItem title="Software Engineer Intern @ Accenture" year="05/2024 - Current" description={`● Incoming member of Avanade’s security and risk team focused on enhancing safeguards and mitigating sensitive data leaks
            
            
            
            
            
            
            
            
            
            `} />
            <SkillsItem title="Machine Learning Intern @ ASU's Cascade Lab" year="03/2021 - 09/2023" description={`● Leveraged Convolutional Neural Networks and deep learning to analyze 10k+ topologies (node layouts) of databases, optimizing a corrective algorithm that rates the strength of databases and infrastructures; Used by secure military facilities
             ● Spearheaded a research project that utilized the OPTICS Algorithm and MATLAB to collect, quantify, and process data of temperature differentials between 500+ FLIR images using pixels for New York’s Hospital for Special Surgery
             ● Produced an efficient way of assessing post-surgery recovery by identifying issues in advance, saving 300+ documented lives`} />
            <SkillsLanguage skill1="Python" skill2="Java" skill3="JavaScript" level1="w-[91%]" level2="w-[88%]" level3="w-[80%]" />
          </div>
          <div className='flex-1'>
            <SkillsItem title="Software Engineer Intern @ GreenLancer" year="01/2024 - 05/2024" description={`● Saved over $300k annually by migrating containerized data repositories from Docker to Node.js Lambda functions and AWS S3 using API Gateway, increasing scalability and reducing infrastructure management by 60% for faster development
            ● Used Jira and Agile methodologies to reduce delivery times by 15%, increasing consumer satisfaction and team productivity
            ● Employed full-stack development through the ASP.NET MVC framework written in C# and HTML to engineer the G-Force Business Process Network, a dynamic management tool for 30+ businesses and customers; Beta version saw $10k+ profit`} />
            <SkillsItem title="Quantitative Developer @ Michigan Investment Group" year="09/2023 - Current" description={`● Led a project team that developed a Principal Component Analysis (PCA) based pairs trading algorithm to trade a 50-stock ETF using 5 years of data. Ran K-means algorithm and ADFuller cointegration tests to create pairs; Used z-scores to trade
● Tested our algorithm on $25k — 13k+ profit while maximizing our Sharpe ratio by minimizing the volatility of profits
● Currently working on an NLP-based sentiment-analysis project to understand the effects of investor opinions on market prices


`} />
            <SkillsLanguage skill1="C++" skill2="AWS" skill3="TypeScript" level1="w-[81%]" level2="w-[78%]" level3="w-[60%]" />
          </div>
        </div>
    </div>
  )
}

export default Skills