import React from 'react'
import { SocialIcon } from 'react-social-icons';
import {useNavigate} from 'react-router-dom'

function Entry() {

    const navigate=useNavigate()

  


  return (
    <div className="min-h-screen #4d7c0f grid place-items-center">
      <div className="flex ">
        <div className="flex-cols-3 gap-x-5 ">
         
         <a href="www.linkedin.com/in/michelle-badu-54a03a134">
            <SocialIcon className="m-5 h-50 w-50 shadow-xl" url="https://LinkedIn.com/in/michelle-badu-54a03a134" bgColor="white"  />
         </a>
          <a href="https://www.instagram.com/_mirchoe_/" >
            <SocialIcon  className="m-5  h-50 w-50 fill-white" url="https://instagram.com/_mirchoe_" bgColor="white" />
          </a>  
          <a href="https://github.com/MichelleAFB">
            <SocialIcon  className="m-5  h-50 w-50 fill-white" url="https://github.com/MichelleAFB" bgColor="white" />
          </a>
        </div>
       
      </div>
      <button onClick={() => {
          navigate('/home')
      }}>
        <h1 className="text-xl text-white">
          Continue to site..   
        </h1>
      </button>
    </div>
  )
}

export default Entry