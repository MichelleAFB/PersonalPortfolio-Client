import React from 'react'
import Carousel from '../components/Carousel'
import Hero from '../components/Hero'
import SideBar from '../components/SideBar'
import {useDispatch} from'react-redux'
import {changePages} from '../redux/page-navigation/page-navigation-actions'
import Main from '../components/Main'
import styles from '../styles'
import {Navbar2,Hero2,Business,Billing,Clients} from './components'
function Home() {

  const dispatch =useDispatch()
  return (
    <div class="bg-green-700 w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
        </div>
         < NavBar/>
        <div classnae={`bg-red-300 ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
              <Hero/>
          </div>
        </div>
        <div classnae={`bg-red-300${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
              
              <Business/>
              <Billing/>
              <Business/>
              <Card/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home