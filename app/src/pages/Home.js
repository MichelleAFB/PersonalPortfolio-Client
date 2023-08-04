import React from 'react'
import Carousel from '../components/Carousel'
import Hero from '../components/Hero'
import SideBar from '../components/SideBar'
import {useDispatch} from'react-redux'
import {changePages} from '../redux/page-navigation/page-navigation-actions'
import AACSuite from '../components/AACSuite'
import styles from '../styles'
import {Hero2,Business,Billing,Clients,CardDeal} from '../components'
import Navbar from '../components/Navbar'
import GhanHomeStayCard from '../components/GhanHomeStayCard'
import LeetcodeTracker from '../components/LeetcodeTracker'
import profilepic from '../assets/profilepicproffesional.jpg'
import { Link } from 'react-router-dom'
function Home() {

  const dispatch =useDispatch()
  return (
    <div class="bg-primary w-full overflow-hidden">
      <div class="w-full flex p-5">
      <Link to="/" class="m-2"><p class="text-white">Entry</p></Link>
        <Link class="m-2" to="/about-me"><p class="text-white">About Me</p></Link>
      </div>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero/>
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div class="flexjustify-center">
        
       
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
     
        <Business />
        <div class="flex flex-col bg-inherit">
          <GhanHomeStayCard/>
          <LeetcodeTracker/>
          <AACSuite/>

        </div>
        
        
        
      </div>
    </div>

    </div>
  )
}

export default Home