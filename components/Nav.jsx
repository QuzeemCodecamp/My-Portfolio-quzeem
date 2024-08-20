"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import path from "path";


const links = [
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
]

const Nav = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav className="flex gap-8" >
        {links.map((link, index) => {
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
  );
};

export default Nav