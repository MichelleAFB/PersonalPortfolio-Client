import React from 'react'

function LeetcodeTracker() {
  return (   <div class="brounded-md block-inline mt-5">
    <div class=" block bg-gray-500 h-600 p-10  w-full mb-0 rounded-md">
   <p class=" text-cyan-500  text-2xl">
        Leetcode Tracker
       </p>
     <p class="mt-3 text-gray-300 text-lg"> Track and continusly practice your Leetcode Question</p>
   
   
    
     <ul class="text-white">
      <li class="text-white">See how many times you've practiced a question</li>
      <li>See when you last practiced a questiong</li>
      <li>Get reminded to practice questions not practiced in a while</li>
     </ul>
      <a class="text-white" href="https://leetcodetrackerclient.onrender.com">See here: <span class="text-cyan-500">https://leetcodetrackerclient.onrender.com</span> </a>

   </div>
 </div>
  )
}

export default LeetcodeTracker