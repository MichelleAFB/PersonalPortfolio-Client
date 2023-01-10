import React from 'react'
import Carousel from '../components/Carousel'
import Hero from '../components/Hero'
import SideBar from '../components/SideBar'
import {useDispatch} from'react-redux'
import {changePages} from '../redux/page-navigation/page-navigation-actions'
import {Main} from '../components/Main'
function Home() {

  const dispatch =useDispatch()
  return (
    <div class="w-full h-screen bg-gray-200">
      <Hero/>
      <SideBar/>
      <Main/>
     
    </div>
  )
}

export default Home