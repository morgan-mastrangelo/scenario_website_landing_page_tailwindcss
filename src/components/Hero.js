import React from 'react'
import { data } from '../resources/data'
import Navbar from './Navbar'

function Hero() {
  return (
    <>
      <div className='py-2 hero-bg-image'>
        {/* navbar div */}
        <Navbar />
        {/* hero div content */}
        <div className=''>

          <h1 className='text-6xl font-bold text-center text-white mt-14 fadeInFromBottomAnimation'>AI-generated <br /> game assets</h1>
          <h5 className='px-4 mt-6 text-center md:px-1 fadeInFromBottomAnimation'>Create high-quality, style-consistent, proprietary assets for your <br /> games</h5>
          <div className='text-center fadeInFromBottomAnimation'>

            <button className='px-10 py-2 mt-5 text-center text-white duration-200 ease-in bg-red-500 rounded-lg hover:bg-red-400 hover:font-bold hover:text-gray-500 '>Start Creating Today</button>
          </div>

          {/* button section  */}
          <div className='flex items-center justify-center h-full mt-10'>
            <div className='flex flex-col items-center md:flex-row gap-y-3'>
              <button className=''><img src={require("../resources/app_store.png")} alt=""  className='w-36' /></button>
              <button className=''><img src={require("../resources/google_play.png")} alt=""  className='w-36' /></button>
              <button className=''><img src={require("../resources/desktop_download.png")} alt=""  className='w-36' /></button>
            </div>

          </div>


        </div>
      </div>
    </>
  )
}

export default Hero
