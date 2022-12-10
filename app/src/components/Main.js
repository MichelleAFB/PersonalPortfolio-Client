import React from 'react'
import {useDispatch} from'react-redux'
import {changePages} from '../redux/page-navigation/page-navigation-actions'

function Main() {
  const dispatch=useDispatch()
  return (
    <div class="bg-yellow-400 block-inline">
       <div class=" block bg-gray-500 h-600 p-10  w-full mb-0">
      <p class=" text-base text-white hover:text-purple-800 text-xl">
            American Airline Private Suite Management App
          </p>
        <p class="mt-3 text-gray-300"> A close friend does handles reservations of a flagship suite at AAC Dallas for his companies owner. Some events are marked private if the owner wants to personally attend them, marked company if the company chooses to hosts its employees, and public which would allow anyone the book the full suite or specific suites.</p>
        <p class="text-gray-300 text-4xl mt-4 "><span class="text-green-300">Objective:</span></p>
        <ul class="align-text-left mb-10">
          <li>create UI for the suite administrator to handle requests</li>
          <li > create UI for public to request reservations</li>
          <li class="text-ray-200"> upcoming: allow authenticated employees of company to request tickets for company reservations</li>
        </ul>
       
        <p class="mt-3"> All of this was previously handles manually with phone call,texts, and emails.It is now handled by this app</p>
         <a href="https://d1o2b8b1k31add.cloudfront.net">See here:</a>
    <button class="h-15 w-200 pr-10 pl-10 bg-red-100 rounded-md" onClick={() => {
        dispatch(changePages("NEW PAGE"))
    }}>click</button>
    <p class="text-6xl">HELLOOOOOO</p>
      </div>
    </div>
  )
}

export default Main