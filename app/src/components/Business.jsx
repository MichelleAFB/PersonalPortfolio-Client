import { features } from "../constant";
import styles, { layout } from "../style";


import React from 'react'
import { useState,useEffect } from "react";

const FeatureCard = ({  title, content, index }) => (

  
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>

    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        Projects
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
      <p class="56px text-white">
        HIIIIIIIIHHHHHHHHHHHHHHHHHHHHHHHHHH
      </p>
    </div>
  </div>
);




function Business() {

  const[seeMore,setSeeMore]=useState(false)


  return (
    <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        About Me
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      I graduated with a Bachelors in Computer Science in August 2022 from UT Dallas. Since then I development web applications to make interacting with the world a simpler!
     
      </p>
      <p class="text-white text-center text-large">ReactJs, NodeJs, SpringBoot,MongoDb,Sql</p>
      
    
      <div className={`${styles.flexStart} flex-row`} onClick={() => {
        setSeeMore(!seeMore)
      }}>
  
     

      </div>
          {
        seeMore ? <p class="font-poppins font-medium text-white pt-4">I make full stack apps using ReactJS, Angular, and NodeJS</p>:<p></p>
      }
      
      {/*<p className="font-poppins font-medium text-[18px] leading-[23.4px]">
        <span className="text-gradient">Started</span>
</p>*/}

    </div>
 

    

    <div className={`${layout.sectionImg} flex-col`}>
  
      {/*features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))*/}
    </div>
  </section>
  )
}

export default Business


