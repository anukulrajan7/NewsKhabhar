import { createContext, useState } from "react";

import { Data } from "../data";


export const  NewsapiContext = createContext({})

export default function NewsContextProvider({children}){

  const [state,setState] = useState([]);
  const [Loading ,setLoading ]  = useState(false);
  const[page,setPage] = useState(1)
  const[totalResults,setTotalResults] = useState(null);
  const[query ,setQuery ] = useState('examples');

  const fetchNewsData = async ()=>{
   setLoading(true);
    const key = 'f1484db313c180019c856925dc2fa632';
    const url = ` https://gnews.io/api/v4/search?q=${query}&lang=en&country=in&max=10&apikey=${key}`

   const response = await fetch(url);
   const data = await response.json();
   console.log(data)
   setState(data.articles);
   setTotalResults(
    Data.totalResults);
   setLoading(false);
  }
  const handleSearch = (q)=>{
        
        fetchNewsData();
  }
 const next = (page)=>{
    setPage(page);
    fetchNewsData(page)
 
 }
 const previous = (page)=>{
    setPage(page);
    fetchNewsData(page)
 }
 let value = {
    state,
    fetchNewsData,
    handleSearch,
    setQuery,
    next,
    previous,
    Loading,
    setPage,
    totalResults,
    page,
 }

    return <NewsapiContext.Provider value={value}> {children}</NewsapiContext.Provider>
}