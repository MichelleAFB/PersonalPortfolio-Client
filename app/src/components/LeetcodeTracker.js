import React from 'react'

function LeetcodeTracker() {
  return (   <div class="bg-yellow-400 block-inline mt-5">
    <div class=" block bg-gray-500 h-600 p-10  w-full mb-0">
   <p class=" text-base text-white hover:text-purple-800 text-xl">
        leetcode Tracker
       </p>
     <p class="mt-3 text-gray-300"> Track and continusly practice your Leetcode Question</p>
   
   
    
     <ul>
      <li class="text-white">See how many times you've practiced a question</li>
      <li>See when you last practiced a questiong</li>
      <li>Get reminded to practice questions not practiced in a while</li>
     </ul>
      <a class="text-white" href="https://leetcodetrackerclient.onrender.com">See here: <span class="text-cyan-500">hhttps://leetcodetrackerclient.onrender.com</span> </a>

   </div>
 </div>
  )
}

export default LeetcodeTracker