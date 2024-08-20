"use client";

import { BsArrowDownRight} from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: '01',
    title: 'Web Development',
    description: 'I offer comprehensive web development services, creating responsive, user-friendly websites tailored to your business needs. I specializes in modern web technologies, ensuring fast, secure, and scalable solutions that drive online success.',
    href: ""
  },
  {
    num: '02',
    title: 'UI/UX Design',
    description: "Elevate your digital presence with my expert UI/UX design services. i create intuitive, user-friendly interfaces that not only look stunning but also enhance user satisfaction and engagement. Whether you're launching a new product or revamping an existing one, I ensures seamless interaction and a delightful user experience across all platforms.",
    href: ""
  },
  {
    num: '03',
    title: 'Logo Design',
    description: "Transform your brand with my professional logo design services. I create unique, memorable logos that capture your brand’s essence and resonate with your target audience. Whether you're starting from scratch or looking to refresh an existing design, I ensures your logo stands out with creativity and precision.",
    href: ""
  },
  {
    num: '04',
    title: 'SEO',
    description: 'Boost your online visibility and drive organic traffic with my expert SEO services. I specialize in optimizing your website for search engines through keyword research, on-page and off-page strategies, technical SEO, and content optimization. My tailored approach ensures improved rankings, more leads, and a higher ROI for your business.',
    href: ""
  }
]

import { motion } from "framer-motion"; 

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div 
          initial={{opacity: 0}} 
          animate={{
            opacity: 1, 
            transition: {delay: 1.2, duration: 0.2, ease: "easeIn"},
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
          >
            {services.map((service, index) => {
              return (
                <div key={index} 
                     className="flex flex-col justify-center flex-1 gap-6 group"
                >
                  {/* top */}
                  <div className="flex items-center justify-between w-full">
                    <div className="text-5xl font-extrabold text-transparent transition-all duration-500 text-outline group-hover:text-outline-hover">
                      {service.num}
                    </div>
                    <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent-hover transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                      <BsArrowDownRight className="text-3xl text-primary" />
                    </Link>
                  </div>
                  {/* title */}
                  <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent-hover transition-all duration-500">{service.title}</h2>
                  {/* Description*/}
                  <p className="text-white/60">{service.description}</p>
                  { /* border */}
                  <div className="w-full border-b border-white/20"></div>
                </div>
              )
            })}
        </motion.div>
      </div>
    </section>
  );
}

export default Services;