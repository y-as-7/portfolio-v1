import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import UseThemeSwitcher from "./hooks/UseThemeSwitcher";
import {
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  PinterestIcon,
  SunIcon,
  TwitterIcon,
} from "./Icon";
import { motion } from "framer-motion";

const CustoMobileLink = ({ href, title, className = "",toggle }) => {
  const router = useRouter();
  const handleClick=()=>{
    toggle();
    router.push(href)
  }
  return (
    <button href={href} className={`${className} relative group text-light dark:text-dark my-2`}
    onClick={handleClick}>
      {title}
      <span
        className={`h-[1px] inline-block  bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        } dark:bg-dark `}
      >
        &nbsp;
      </span>
    </button>
  );
};
const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  console.log(router);
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block  bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        } dark:bg-light`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const NavBar = () => {
  const [mode, setMode] = UseThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    

  };
  return (
    <header className="w-full relative px-32 py-8 font-medium flex items-center justify-between dark:text-light z-10 lg:px-16 md:px-12 sm:px-8">
      <button
        onClick={handleClick}
        className="flex flex-col justify-center items-center hidden lg:flex"
      >
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${
            isOpen ? " rotate-45 translate-y-1 " : " -translate-y-0.5 "
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? " opacity-0 " : " opacity-100 "
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${
            isOpen ? " -rotate-45 -translate-y-1 " : " translate-y-0.5 "
          }`}
        ></span>
      </button>

      <div className="w-full flex justify-between items-center lg:hidden">
        <nav className="">
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/about" title="About" className="mr-4" />
          <CustomLink href="/projects" title="Projects" className="mr-4" />
          {/* <CustomLink href="/articles" title="Articles" className="mr-4" /> */}
        </nav>

        <nav className="flex items-center justify-center flex-wrap">
          <motion.a
            whileHover={{
              y: -2,
            }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
            href="https://twitter.com/y_as_17"
            target={"_blank"}
          >
            <TwitterIcon />
          </motion.a>

          <motion.a
            href="https://github.com/y-as-7"
            target={"_blank"}
            className="w-6 mx-3"
            whileHover={{
              y: -2,
            }}
            whileTap={{ scale: 0.9 }}
          >
            <GithubIcon />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/youssef-askar-023a02251/"
            target={"_blank"}
            className="w-6 mx-3"
            whileHover={{
              y: -2,
            }}
            whileTap={{ scale: 0.9 }}
          >
            <LinkedInIcon />
          </motion.a>

          

          <motion.a
            href="https://www.instagram.com/y.as.7/"
            target={"_blank"}
            className="w-6 ml-3"
            whileHover={{
              y: -2,
            }}
            whileTap={{ scale: 0.9 }}
          >
            <DribbbleIcon />
          </motion.a>
          <button
            className={` ml-3 flex items-center justify-center rounded-full p-1 ${
              mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
            }`}
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
          >
            {mode === "dark" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>
        </nav>
      </div>

      {
        isOpen?
<motion.div
initial={{scale:0,opacity:0, x:"-50%",y:"-50%"}}
animate={{scale:1 , opacity:1}}
transition={{duration:.4}}

 className=" min-w-[70vw]  flex flex-col justify-between items-center z-30 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
      bg-dark/90 dark:bg-light/75 rounded-lg backdrop:blur-md py-32">
        <nav className="flex items-center flex-col justify-center ">
          <CustoMobileLink href="/" title="Home" className="" toggle={handleClick}/>
          <CustoMobileLink href="/about" title="About" className="" toggle={handleClick}/>
          <CustoMobileLink href="/projects" title="Projects" className="" toggle={handleClick}/>
          {/* <CustoMobileLink href="/articles" title="Articles" className="" toggle={handleClick}/> */}
        </nav>

        <nav className="flex items-center justify-center flex-wrap mt-2">
          <motion.a
            whileHover={{
              y: -2,
            }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3 sm:mx-1"
            href="https://twitter.com/y_as_17"
            target={"_blank"}
          >
            <TwitterIcon />
          </motion.a>

          <motion.a
            href="https://github.com/y-as-7"
            target={"_blank"}
            className="w-6 mx-3 sm:mx-1 bg-light rounded-full dark:bg-dark"
            whileHover={{
              y: -2,
            }}
            whileTap={{ scale: 0.9 }}
          >
            <GithubIcon 
             />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/youssef-askar-023a02251/"
            target={"_blank"}
            className="w-6 mx-3 sm:mx-1"
            whileHover={{
              y: -2,
            }}
            whileTap={{ scale: 0.9 }}
          >
            <LinkedInIcon />
          </motion.a>

          
          <motion.a
            href="https://www.instagram.com/y.as.7/"
            target={"_blank"}
            className="w-6 ml-3 sm:mx-1"
            whileHover={{
              y: -2,
            }}
            whileTap={{ scale: 0.9 }}
          >
            <DribbbleIcon />
          </motion.a>
          <button
            className={` ml-3 flex items-center justify-center rounded-full p-1 ${
              mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
            }`}
            onClick={() => {
              setMode(mode === "light" ? "dark" : "light")
              setIsOpen()
            } }
          >
            {mode === "dark" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>
        </nav>
      </motion.div>
        :null
      }

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
