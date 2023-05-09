import React, { useState } from 'react'
import { BsDiscord } from 'react-icons/bs'
import { CiMenuBurger } from 'react-icons/ci'
function Navbar() {
    const [burgerMenuActive, setBurgerMenuActive] = useState(false);

    return (
        <>

            <div className={burgerMenuActive ? "justify-center hidden mt-6 text-center md:flex" : "justify-center hidden mt-6 text-center md:flex"}>

                <div className='flex flex-row font-bold text-gray-400 gap-x-16'>
                    <a href="#" className='duration-200 hover:scale-110'>HOME</a>
                    <a href="#" className='duration-200 hover:scale-110'>API</a>
                    <a href="#" className='duration-200 hover:scale-110'>DISCORD BOT</a>
                    <a href="#" className='duration-200 hover:scale-110'>CONTACT</a>
                    <a href="#" className='flex flex-row items-center duration-200 gap-x-2 hover:scale-110'> <BsDiscord className='mt-1' /> DISCORD</a>
                </div>
            </div>
            <div className='flex mt-6 md:hidden text-start ms-4'>
                <CiMenuBurger onClick={() => { setBurgerMenuActive(!burgerMenuActive) }} className='w-6 h-6 cursor-pointer' />
            </div>
         
            <div className={burgerMenuActive ? 'fixed left-0 w-full bg-gray-950 md:hidden  duration-300 py-6 ' : 'fixed left-[-100%] w-0  duration-300 py-4 '}>
                <div className='flex flex-col justify-center py-6 font-bold text-center text-gray-400 gap-y-5 md:hidden '>
                    <a href="#" className='duration-200 hover:text-lg'>HOME</a>
                    <a href="#" className='duration-200 hover:text-lg'>API</a>
                    <a href="#" className='duration-200 hover:text-lg'>DISCORD BOT</a>
                    <a href="#" className='duration-200 hover:text-lg'>CONTACTfff</a>
                    <div className='flex flex-row items-center justify-center text-center cursor-pointer gap-x-2 '><img src={require("../resources/icons8-discord-100.png")} className='w-5 h-5 mt-1' alt="" /> DISCORD</div>

                </div>
            </div>
        

        </>
    )
}

export default Navbar
