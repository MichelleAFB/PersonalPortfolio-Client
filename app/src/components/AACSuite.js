import React from 'react'
import {useDispatch} from'react-redux'
import {changePages} from '../redux/page-navigation/page-navigation-actions'

function AACSuite() {
  const dispatch=useDispatch()
  return (
    <div class="rounded-md   mt-4 lock-inline">
       <div class=" block bg-gray-500 h-600 p-10  w-full mb-0">
      <p class=" text-cyan-500  text-white hover:text-purple-800 text-2xl">
            American Airline Private Suite Management App
          </p>
        <p class="mt-3 text-gray-300 text-xl"> manage reservations and requests for a private flagship suite at the American Airlines Center in Dallas.</p>
       
        <ul class="align-text-left mt-10 text-white">
          <li> created admin console to approve,deny, or update reservations and requests.</li>
          <li >created front facing employee and public customer console</li>
          <li> continuously re-scrape AAC website for new events</li>
        </ul>
       
 
         <a href="https://d1o2b8b1k31add.cloudfront.net"></a>

      </div>
    </div>
  )
}

export default AACSuite