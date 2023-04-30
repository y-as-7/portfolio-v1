import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center absolute  rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer dark:bg-light dark:text-dark"
      whileHover={{ scale: 1.05 }}
      initial={{
        x:0,y:0,
      }}
      whileInView={{
        x:x,
        y:y,
        transition:{duration:1.5}
      }}
      
    >
      {name}
    </motion.div>
    
  );
};
function Skills() {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center ">Skills</h2>
      <div className="w-full flex h-screen relative items-center justify-center rounded-full bg-circularLight dark:bg-circularDark ">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name='HTML' x='-25vw' y='-2vw'/>
        <Skill name='CSS' x='-5vw' y='-10vw'/>
        <Skill name='JavaScript' x='20vw' y='6vw'/>
        <Skill name='ReactJS' x='0vw' y='12vw'/>
        <Skill name='NextJS' x='-20vw' y='-15vw'/>
        <Skill name='TailwindCSS' x='15vw' y='-12vw'/>
        <Skill name='MongoBD' x='32vw' y='-5vw'/>
        <Skill name='Sql Server' x='0vw' y='-20vw'/>
        <Skill name='NodeJS' x='-5vw' y='-10vw'/>
        <Skill name='git' x='18vw' y='18vw'/>
        <Skill name='FireBase' x='-25vw' y='18vw'/>
        
      </div>
    </>
  );
}

export default Skills;
