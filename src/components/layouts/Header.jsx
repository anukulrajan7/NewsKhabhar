import React, { useContext } from 'react'
import {GiNewspaper} from 'react-icons/gi'

import {FcSearch} from 'react-icons/fc'
import { NewsapiContext } from '../../context/NewsContext'
function Header() {
  const {handleSearch,setQuery ,query} = useContext(NewsapiContext )
 
 
  return (
    <React.Fragment>
      <header className='bg-white shadow-white shadow-md gap-3 md md:items-center py-2 w-full flex flex-col md:flex-row z-40  px-1  justify-evenly   text-red-500'>
        <div className='flex w-full md:w-[70%] mt-3 justify-between px-6'>
        <h2 className='text-3xl font-semibold'>NewsKhabar</h2>
         <div className='text-3xl text-gray-600'>
             <GiNewspaper/>
         </div>
        </div>
          <div className=' bg-purple-700 md:py-1 rounded-lg p-1 px-3  py-3 mt-3  md:w-fit shadow-md shadow-purple-700 text-white text-xl border-teal-400 backdrop-filter backdrop-blur-lg border-none  md:flex'>
              <input type="text" 
              onChange={(e)=>{setQuery(e.target.value)}}
              placeholder='search here' className=' px-3 py-2 border-none
              placeholder:text-white outline-none bg-purple-700  w-[80%]' />
              <button
              onClick={()=>{handleSearch(query)}}
              className='bg-white px-3 py-3 rounded-lg '><FcSearch className='text-2xl'/></button>
          </div>
     
      </header>
    </React.Fragment>
  )
}

export default Header