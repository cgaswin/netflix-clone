import React, { useEffect, useState } from 'react'
import requests from "../Requests"
import  axios  from 'axios'

const Main = () => {

    const [movies,setMovies] = useState([])

    const movie = movies[Math.floor(Math.random() * movies.length)]
   

    useEffect(()=>{
       axios.get(requests.requestPopular).then((response) => {
         setMovies(response.data.results);
       });
    },[])

    console.log(movie)

  return (
    <div className='w-full h-[550px] text-white'>
        <div className='w-full h-full'>
            
        </div>

    </div>
  )
}

export default Main;