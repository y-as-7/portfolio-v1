import React from 'react'
import { motion } from 'framer-motion'

function TransitionEffect() {
  return (
    <>
      <motion.div
      initial={{x:"100%",width:"100%"}}
      animate={{x:"0%",width:"0%"}}
      exit={{x:["0","100%"],width:["0","100%"]}}
      transition={{duration:0.8,ease:"easeInOut"}}
      className='fixed top-0 bottom-0 right-full w-screen z-30 bg-primary'/>
      <motion.div
      initial={{x:"100%",width:"100%"}}
      animate={{x:"0%",width:"0%"}}
      transition={{delay:0.2,duration:0.8,ease:"easeInOut"}}
      className='fixed top-0 bottom-0 right-full w-screen z-20 bg-light'/>
      <motion.div
      initial={{x:"100%",width:"100%"}}
      animate={{x:"0%",width:"0%"}}
      transition={{delay:0.4,duration:0.8,ease:"easeInOut"}}
      className='fixed top-0 bottom-0 right-full w-screen z-10 bg-dark'/>
    </>
  )
}

export default TransitionEffect