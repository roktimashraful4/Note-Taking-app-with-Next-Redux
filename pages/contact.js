import Image from 'next/image'
import React from 'react'
import NabBar from '../components/NabBar'
import Img from '../public/roktimashraful.png'
import { BsFacebook, BsGithub, BsInstagram, BsLink45Deg, BsLinkedin, BsTwitter, } from "react-icons/bs";
const contact = () => {
  return (
    <div className='w-full min-h-screen bg-slate-800 text-white'>
        <NabBar/> 
        <div className='container w-1/2 mx-auto my-8 text-center flex flex-col justify-center items-center'>
              <div>
                 <Image src={Img} width={200} height={200} alt="roktim" /> 
              </div>
                <h2 className='text-4xl font-bold'>Roktim Ashraful </h2>
                <div className='flex text-2xl my-4 gap-4 '> 
                <a href="http://www.facebook.com/roktimashraful4" target="_blank" rel="noopener noreferrer"><BsFacebook/> </a>
                <a href="http://www.linkedin.com/in/roktim-ashraful" target="_blank" rel="noopener noreferrer"><BsInstagram/></a>
                <a href="http://www.twitter.com/RoktimAshraful" target="_blank" rel="noopener noreferrer"><BsTwitter/></a>
                <a href="http://github.com/roktimashraful4" target="_blank" rel="noopener noreferrer"><BsGithub/> </a>
                <a href="http://www.linkedin.com/in/roktim-ashraful/" target="_blank" rel="noopener noreferrer"><BsLinkedin/> </a>
                <a href="http://www.roktimashraful.com" target="_blank" rel="noopener noreferrer"><BsLink45Deg/> </a>
                </div>
                <p> Gmail : <a href="mailto:roktimashraful4@gmail.com"> roktimashraful4@gmail.com </a> </p>
               <p> Phone: <a href="tel:+8801404990110">  01404990110 </a> </p>
        </div>
        
    </div>
  )
}

export default contact