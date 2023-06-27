import React from 'react'
import { layout } from '../style'
import styles from '../style'

function Hero() {
  return (
  
    <section id="features" className={layout.section}>
    <div class="flex w-full flex-col jusitfy-center">
      <h2 className={styles.heading2}></h2>
    <main class="max-w-screen-xl px-4 bg-green-00 lg:px-16 absoloute">
        
          <h2 class="text-4xl tracking-tight leading-10 font-extrabold text-cyan-400 sm:text-5xl sm:leading-none md:text-6xl">
            Michelle Badu
            
            
          </h2>
          <h3><span class="text-indigo-300">Software Developer ~</span></h3>
          <p class="mt-3 text-base text-white hover:text-purple-200 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
         
          </p>
         
        
      </main>
  </div>
 
  </section>



  )
}

export default Hero