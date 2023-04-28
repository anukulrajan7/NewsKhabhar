import React, { useContext } from 'react'
import  { NewsapiContext } from '../../context/NewsContext'
function Pagination() {
    const {page,totalPages ,previous,next} = useContext(NewsapiContext)
  return (
    <div className='w-full flex  justify-between  md:justify-evenly'>
        {page!==totalPages?<button
        onClick={()=>previous(page+1)}
        className='bg-purple-700 text-white rounded-md  px-4 py-2 shadow-lg shadow-purple-400
       r hover:bg-purple-500 font-mono text-[20px]
        '>Next</button>:''}
        {page!==1? <button
        onClick={()=>{next(page-1
        )}}
        className='bg-purple-700 text-white rounded-md  px-4 py-2 shadow-lg shadow-purple-400
        r hover:bg-purple-500 font-mono text-[20px]'>Previous</button>:''}
    </div>
  )
}

export default Pagination