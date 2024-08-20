"use client";

import {Sheet, SheetContent, SheetTrigger} from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import Link from "next/link";
import { CiMenuFries } from 'react-icons/ci';

const Links = [
    {
        name: "home",
        path: "/",
    },
    {
        name: "services",
        path: "/services",
    },
    {
        name: "resume",
        path: "/resume",
    },
    {
        name: "works",
        path: "/works",
    },
    {
        name: "contact",
        path: "/contact",
    },
];



const MobileNav = () => {
  const pathname = usePathname();
  return <Sheet>
    <SheetTrigger className='flex items-center justify-center'>
        <CiMenuFries className="text-[32px] text-accent-hover" />
    </SheetTrigger>
    <SheetContent className="flex flex-col">
        {/* logo */}
        <div className='mb-40 text-2xl text-center at-32'>
            <Link href="/">
              <h1 className="text-4xl font-semibold">
                Quzeem <span className="text-accent-hover">.</span>
              </h1>
            </Link>
        </div>
        {/* nav */}
        <nav className='flex flex-col items-center justify-center gap-8'>
            {Links.map((link, index) => {
                return (
                    <Link 
                        href={link.path} 
                        key={index} 
                        className={`${
                            link.path === pathname && 
                            "text-accent-hover border-b-2 border-accent-hover"
                        } text-xl capitalize hover:text-accent-hover transition-all`}
                    >
                        {link.name}
                    </Link>
                );
            })}
        </nav>
    </SheetContent>
  </Sheet>;
};

export default MobileNav