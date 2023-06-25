import React from 'react'
import Carousel from '../components/Carousel'
import Hero from '../components/Hero'
import SideBar from '../components/SideBar'
import {useDispatch} from'react-redux'
import {changePages} from '../redux/page-navigation/page-navigation-actions'
import Main from '../components/Main'
import styles from '../styles'
import {Hero2,Business,Billing,Clients,CardDeal} from '../components'
import Navbar from '../components/Navbar'
import GhanHomeStayCard from '../components/GhanHomeStayCard'
function Home() {

  const dispatch =useDispatch()
  return (
    <div class="bg-green-700 w-full flex flex-col">

      <div class="w-full top-0  sticky">
        <Hero/>
      </div>
    
     
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
    
      
        
        <div classname="flex flex-col w-full">
         <div className={`${styles.boxWidth}`}>
              
              <Business/>
          </div>
          <div className={`${styles.boxWidth}`}>
              
              
          </div>
          <div className={`${styles.boxWidth}`}>
              <p class="text-xl text-start text-white">
                Projects
              </p>
              <Main/>
              <GhanHomeStayCard/>
             
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home