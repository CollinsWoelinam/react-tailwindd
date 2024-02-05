import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import img1 from './img/12_New1.jpg'
import { FaHome } from "react-icons/fa";
import { FaQuestionCircle } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";


function App() {
  
    const [showMenu, setShowMenu] = useState(false)  // show menu or not when clicked on hamburger icon

    const toggleMenu = () => {
      setShowMenu(!showMenu)
    }

  return (
    <>
    <div className='grid md:grid-cols-3'>
      <div className='md:col-span-1 justify-end md:flex'>
      <div className='list-none text-right'>
        <div className='flex px-4 justify-between items-center'>
          <div className="text-gray-500 text-xl p-4 hover:text-gray-600">Movie Ninja</div>
      <div className='cursor-pointer md:hidden' onClick={toggleMenu}>
      <FaBars />
      </div>
        </div>
        {showMenu && (
          <div>
            <ul>
              <li>
                <a href="#" className='font-semibold text-sm flex justify-end py-1 px-2 border-r-2 border-red-400'>
                  <FaHome className='mt-1 mr-2'/> Home
                </a>
              </li>
              <li>
                <a href="#" className='text-sm flex justify-end py-1 px-2 border-r-2 border-white'>
                  <FaQuestionCircle className='mt-1 mr-2'/> About
                </a>
              </li>
              <li>
                <a href="#" className='text-sm flex justify-end py-1 px-2 border-r-2 border-white'>
                  <FaMessage className='mt-1 mr-2'/> Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      
    </div>
      </div>
     

   

    <div className='px-10 py-10 col-span-2'>

    <nav className='text-red-500 flex justify-center md:justify-end'>
      <a href="#" className='ml-2 md:border-2 border-red-400 rounded-full md:px-3 py-1 text-xs tracking-wider cursor-pointer font-bold md:hover:text-white md:hover:bg-red-400 transition ease-in-out duration-500'>Login</a>
      <a href="#" className='ml-2 md:border-2 border-red-400 rounded-full md:px-3 py-1 text-xs tracking-wider cursor-pointer font-bold md:hover:text-white md:hover:bg-red-400 transition ease-in-out duration-500'>Sign up</a>
    </nav>

    <div className='text-5xl text-gray-800'>
      TV Series
    </div>
    <div>
      For Weebs
    </div>

    <div className='font-semibold mt-6 pb-2 border-b border-gray-300'>
      Trending Movies
    </div>

    <div className='grid md:grid-cols-3 gap-5'>
      <div className='w-80 h-40 md:mt-4  rounded-xl flex items-end overflow-hidden sm:w-64 sm:h-36 md:w-48 md:h-52 object-cover shadow hover:shadow-lg' style={{
      backgroundImage: `url(${img1})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }}>
     
     <div className='w-full h-10 bg-gray-200 justify-center items-center py-5 flex flex-col'>The Beekeeper <span className='text-xs pb-1'>Movie by Jason Statham</span></div>

      </div>
      <div className='w-80 h-40 mt-4 rounded-xl flex items-end overflow-hidden sm:w-64 sm:h-36 md:w-48 md:h-52 object-cover shadow hover:shadow-lg' style={{
      backgroundImage: `url(${img1})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }}>
     
     <div className='w-full h-10 bg-gray-200 justify-center items-center py-5 flex flex-col'>The Beekeeper <span className='text-xs pb-1'>Movie by Jason Statham</span></div>

      </div>
      <div className='w-80 h-40 mt-4 rounded-xl flex items-end overflow-hidden sm:w-64 sm:h-36 md:w-48 md:h-52 object-cover shadow hover:shadow-lg' style={{
      backgroundImage: `url(${img1})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }}>
     
     <div className='w-full h-10 bg-gray-200 justify-center items-center py-5 flex flex-col'>The Beekeeper <span className='text-xs pb-1'>Movie by Jason Statham</span></div>

      </div>
      
    </div>
    

   

    <div className='font-semibold mt-6 pb-2'>
      Most Popular
    </div>

    <button className='flex ml-[40%] justify-center border-2 border-amber-400 py-1 px-3 rounded-full text-xs text-gray-600 cursor-pointer transform hover:scale-125 hover:shadow ease-in-out duration-500'>Load More</button>

    </div>
    </div>
    </>
  )
}

export default App
