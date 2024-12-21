import React from 'react'

import {easeIn, motion} from "framer-motion"

const Section = ({
    h3,text,hasBtn=true,btnTxt,imgSrc,imgSize="70%",backgroundColor,headingColor,textColor,btnBgColor,btnColor}) => {
    
      const hedingOptions={
        initial:{
          y:"100%",
          opacity:0,
        },
        whileInView:{
          y:0,
          opacity:1
        }
      }
      const textoption={
        ...hedingOptions,
        transition:{
          delay:0.3,
        }
      }
      const buttonoption={
        ...hedingOptions,
        transition:{
          delay:0.3,
          ease:"easeIn"
        }
      }
      const imgoption = {
        initial: {
          scale: 0.1,
          opacity: 0,
        },
        whileInView: {
          scale: 1,
          opacity: 1,
          transition: { // Move transition here
            delay: 0.3,
          },
        },
      };
      
  return (
    <section className='section'
    style={{
        backgroundColor:backgroundColor
    }}>
        <div>
            <motion.h3
             style={{
               color:headingColor 
            }}
            {...hedingOptions}
           
            >{h3}</motion.h3>
            <motion.p
            style={{
                color:textColor
             }}
             {...textoption}
             >{text}</motion.p>
        {hasBtn && <motion.button
        style={{
            color:btnColor,
            backgroundColor:btnBgColor
         }}
         {...buttonoption}
         >
            {btnTxt}
            </motion.button>}
        <motion.div {...imgoption}>
          <img src={imgSrc} alt="imgSrc" 
          style={{
            width:imgSize
          }}/>
        </motion.div>

        </div>
    </section>
  )
}

export default Section
