import React, { useContext } from 'react'
import Card from './Card.js'
import { NewsapiContext } from '../../context/NewsContext.js'

function Cards() {
     const {state } = useContext(NewsapiContext) 
  return (
    <div className='grid grid-cols-1   md:grid-cols-1 w-[100%] md:w-[80%]  px-3  bg-white relative my-32 py-10 lg:grid-cols-2  md:px-9  gap-7 m-auto'>
   {
    state.map((item)=>{
      return <Card  data={item} key={item.publishedAt}/>
    })
 
   }
    
        
    
    </div>
  )
}

export default Cards