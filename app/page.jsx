import { Button } from "@/components/ui/button";
import { FiDownload } from 'react-icons/fi';
import Link from "next/link"



import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return <section className="h-full">
    <div className="container h-full mx-auto">
      <div className="flex flex-col items-center justify-between xl:flex-row xl:pt-8 xl:pb-24">
        {/* text */}
        <div className="order-2 text-center xl:text-left xl:order-none">
          <span className="text-xl">Software Developer</span>
          <h1 className="h1">
            Hello I'm <br /> <span className="text-accent-hover">Quzeem Odusanwo</span> 
          </h1>
          <p className="max-w-[500px] mb-9 text-white/80">
          I excel at crafting elegant digital experiences and I am proficient
          in various programming languages and technologies.
          </p>
          {/* btn and  */}
          <div className="flex flex-col items-center gap-8 xl:flex-row">
          <Button 
            variant="outline" 
            size="lg" 
            className="flex items-center gap-2 uppercase"
          >
            <Link href="https://drive.google.com/file/d/1rkgi3jaVqkVfqvCqADhhGQDjOS5Q3pj0/view">
              <span> Download CV</span>
            </Link>
            <FiDownload className="text-xl" />
          </Button>
          <div className="mb-8 xl:mb-0">
            <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent-hover rounded-full 
             flex justify-center items-center text-accent-hover text-base hover:bg-accent-hover
             hover:text-primary hover:transition-all duration-500" 
            />
          </div>
          </div>
        </div>
        {/* photo */}
        <div className="order-1 mb-8 xl:order-none xl:mb-8 ">
          <Photo />
        </div>
      </div>
    </div>
    <Stats />
  </section>;
};

export default Home;