import React from 'react'

function Card({data}) {
  return (
    <div className='bg-purple-700 px-4 flex flex-col items-start py-4 md:px-4 gap-4  text-center backdrop-filter backdrop-blur-lg shadow-lg rounded-lg'>
      <h1 className='bg-white px-2 py-2 font-bold   shadow-md shadow-gray-300 capitalize text-[20px] m-2 '>{data.title}</h1>
      <img src={data.image} alt="" className='w-full' />
      <p className='text-white mt-3 text-start '>{data.description}</p>
      <p className='text-white text-start hidden md:block '>{data.content}</p>

      <a target=" "
      href={data.url} 
      className='bg-white my-3 mx-auto text-purple-700 rounded-md  px-4 py-2 shadow-lg shadow-purple-400
        r hover:bg-purple-500 font-mono text-[20px]'>Read More</a>
    </div>
  )
}

export default Card