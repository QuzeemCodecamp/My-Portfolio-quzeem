"use client";

import CountUp from "react-countup";

const stats = [
    {
      num: 3,
      text: "Years of experience",
    },
    {
      num: 20,
      text: "Projects completed",
    },
    {
      num: 8,
      text: "Technologies mastered",
    },
    {
      num: 300,
      text: "Code commits",
    },
];

const Stats = () => {
  return ( 
    <section className="pt-4 pb-12 xl:pb-0 xl:pt-0">
        <div className="container mx-auto">
            <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
                {stats.map((item, index) => {
                  return (
                    <div 
                        className="flex items-center justify-center flex-1 gap-4 xl:justify-start" 
                        key={index}
                    >
                       <CountUp 
                         end={item.num} 
                         duration={5} 
                         delay={2} 
                         className="text-4xl font-extrabold xl:text-6xl" 
                        />
                        <p 
                         className={
                          '${item.text.length < 15 ? "max-w-[200px]" : "max-w-[150px]" } leading-snug text-white/80'
                         }
                        >
                          {item.text}
                        </p>
                    </div>
                  );
            })}
        </div>
    </div>
    </section>
  );
};

export default Stats;
