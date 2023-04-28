import React from 'react'
import Pagination from './Pagination'

function Footer() {
  return (
    <React.Fragment>
      <div className='w-full bg-white flex flex-col  justify-center px-10 shadow-2xl rounded-lg shadow-white gap-2 fixed bottom-0  p-4 text-center'>
         <Pagination></Pagination>
           <p className='text-red-400 text-xl '>@copyrightReserve <b>Anukul2004@</b></p>
      </div>
    </React.Fragment>
  )
}

export default Footer