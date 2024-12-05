import { inView, motion } from 'framer-motion'
import React from 'react'
import { BiLogoJavascript, BiLogoRedux, BiLogoTailwindCss, BiLogoTypescript } from 'react-icons/bi'
import { RiJavaLine, RiJavascriptLine, RiNextjsLine, RiReactjsLine, RiTailwindCssLine } from 'react-icons/ri'


const iconVariants = (duration) => ({
    initial : {y: -10},
    animate: {
        y: [10,-10],
        transition : {
            duration: duration,
            ease : "linear",
            repeat: Infinity,
            repeatType : "reverse",


        },
    }
})




const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <motion.h1 
        whileInView = {{y: 0, opacity:1 }}
        initial= {{ y: -100 , opacity:0 }}
        transition = {{duration :1.5}}
        className='my-20 text-center text-4xl'>Technologies</motion.h1>
        <motion.div
         whileInView = {{x: 0, opacity:1 }}
         initial= {{ x: -100 , opacity:0 }}
         transition = {{duration :1.5}}
        className='flex flex-wrap items-center justify-center gap-4'>
            <motion.div
            variants={iconVariants(2.5)}
            initial = "initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiReactjsLine className='text-7xl text-cyan-400'/>
            </motion.div>
            <motion.div 
             variants={iconVariants(3)}
             initial = "initial"
             animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiNextjsLine className='text-7xl '/>
            </motion.div>

            <motion.div
             variants={iconVariants(5)}
             initial = "initial"
             animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <BiLogoJavascript className='text-7xl text-yellow-600'/>
            </motion.div>

            <motion.div
             variants={iconVariants(2)}
             initial = "initial"
             animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <BiLogoTailwindCss className='text-7xl text-[#06B6D4]'/>
            </motion.div>

            <motion.div
             variants={iconVariants(6)}
             initial = "initial"
             animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <BiLogoTypescript className='text-7xl text-[#007acc]'/>
            </motion.div>

            <motion.div
             variants={iconVariants(4)}
             initial = "initial"
             animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <BiLogoRedux className='text-7xl text-[#764abc]'/>
            </motion.div>
           
        </motion.div>
    </div>
  )
}

export default Technologies