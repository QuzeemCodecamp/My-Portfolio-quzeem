"use client";

import * as React from 'react';

import {
  FaHtml5, 
  FaCss3, 
  FaJs, 
  FaReact, 
  FaFigma, 
  FaNodeJs,
} from 'react-icons/fa';

import { SiTailwindcss, SiNextdotjs } from 'react-icons/si';

// about date
const about = {
  title: "About me",
  description: "Dedicated and detail-oriented Web-developer with 2 years of experience. And I’m a graphic designer that has 3 years experience. I have a basic knowledge of Web development precisely frontend web development and also Graphics design.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Quzeem Odusanwo",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+234) 905 834 1240",
    },
    {
      fieldName: "Experience",
      fieldValue: "3+ Years",
    },
    {
      fieldName: "Skype",
      fieldValue: "Quzeem.01",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Nigerian",
    },
    {
      fieldName: "Email",
      fieldValue: "quzeemoddusanwo@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English",
    },
  ]
};


// experience data
const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My experience',
  description: 'These are my experiences',
  items: [
    {
      company: "NIIS (Nigerian Institute for Industrial Security)",
      position: "IT(Information Technology) Intern",
      duration: "2022 - Present",
    },
    {
      company: "Web Design Studio",
      position: "Front-End Developer Intern",
      duration: "Summer 2021",
    },
    {
      company: "E-commerce Startup",
      position: "Freelance Web Developer",
      duration: "2021 - 2022",
    },
    {
      company: "Tech Academy",
      position: "Teaching Assistant",
      duration: "2021 - 2022",
    },
    {
      company: "Digital Agency",
      position: "UI/UX Designer",
      duration: "2021 - 2022",
    },
    {
      company: "Software Development Firm",
      position: "Junior Developer",
      duration: "2021 - 2022",
    },
  ],
};


// education data
const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My education',
  description: 'These institutions help my career development.',
  items: [
    {
      institution: "Online Course Platform.",
      degree: "Full Stack Web Development Bootcamp",
      duration: "2024",
    },
    {
      institution: "Simplilearn",
      degree: "Full Stack Development for Beginners",
      duration: "2022",
    },
    {
      institution: "Online Course",
      degree: "Programming Course",
      duration: "2022 - 2023",
    },
    {
      institution: "Lets Upgrade",
      degree: "JS Programming Essential Bootcamp",
      duration: "2023",
    },
    {
      institution: "Design School",
      degree: "Diploma in Graphic Design",
      duration: "2021 - 2022",
    },
    {
      institution: "The Gateway (ICT) Polytechnic Saapade",
      degree: "ND Degree in Computer Science",
      duration: "2021 - 2023",
    },
  ],
};

// skills data
const skills = {
  title: "My Skills",
  description: "I can work with these listed technologies.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs/>,
      name: "node.js",
    },
    {
      icon: <FaFigma/>,
      name: "figma",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from 'framer-motion'

const Resume = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{
        opacity: 1, 
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs 
          defaultValue="experience" 
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">

            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index)=> {
                      return( 
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent-hover">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                          <div className="flex items-center gap-3">
                            {/* */}
                            <span className='w-[6px] h-[6px] rounded-full bg-accent-hover'></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index)=> {
                      return( 
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent-hover">{item.duration}</span>
                          <h3 className="text-xl max-w-[280px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                          <div className="flex items-center gap-3">
                            {/* */}
                            <span className='w-[6px] h-[6px] rounded-full bg-accent-hover'></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <div className="flex flex-col gap-[30px]">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index)=> {
                    return(
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl transition-all duration-300 group-hover:text-accent-hover">{skill.icon}</div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index)=> {
                    return( 
                      <li key={index} className="flex items-center justify-center gap-4 xl:justify-start">
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

 
export default Resume;