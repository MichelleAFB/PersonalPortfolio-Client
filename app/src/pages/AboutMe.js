import React from 'react'
import profilepic from '../assets/profilepicproffesional.jpg'
import { Link } from 'react-router-dom'
import styles from '../style'
import Hero from '../components/Hero'
function AboutMe() {
  return (
    <div class="bg-primary w-full h-screen overflow-hidden">
    <div class="w-full flex p-5">
    <Link to="/" class="m-2"><p class="text-white">Entry</p></Link>
    
      <Link to="/home" class="m-2"><p class="text-white">Home</p></Link>
    </div>
    <div class=" flex flex-col p-5">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
    <div className={`${styles.boxWidth}`}>
      <Hero/>
    </div>
  </div>
  <p class="text-white">I graduated in August 2022 from the University of Texas at Dallas with a Bachelors in Computer Science.</p>
  <p class="text-white">I first started coding in July 2017 after reading stumbliong on what would become my favorite book, Algorithms for to Live By:The Computer Science of Human Decisions By Brian Christian and Tom Griffiths. </p>
  <a class="text-white hover:text-cyan-400"  href="https://www.amazon.com/Algorithms-Live-Computer-Science-Decisions/dp/1250118360/ref=asc_df_1250118360/?tag=hyprod-20&linkCode=df0&hvadid=312118059795&hvpos=&hvnetw=g&hvrand=6419683626178326982&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9026832&hvtargid=pla-300850505981&psc=1">Buy it here</a>
  <p class="text-white text-start mt-3"> I learned computer science exist in the world around us whether its deciding to take a parking spot or continue to look in a packed parking lot or building a budget. Computer Science felt attainable and I took my first coding class that summer.</p>
  <p class="text-white text-start">Outside of software development, I enjoy sewing,weight-lifing, and Wendigoon videos!</p>

  </div>
  </div>
   
  )
}

export default AboutMe