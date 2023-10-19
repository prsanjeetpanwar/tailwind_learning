import React, { useEffect, useRef, useState } from 'react'
import Global from '../services/Global'
import {IoChevronBackOutline, IoChevronForwardOutline} from 'react-icons/io5'
import HrMovieCard from './HrMovieCard'
import MovieCard from './MovieCard'















const MovieList = ({genreId,index_}) => {
    const [movieList ,setmovieList]=useState([])

    const reff=useRef(null)

    useEffect(()=>{
getMovieId()
    },[])
    const getMovieId=()=>{
        Global.getMovieGenerId(genreId).then(resp=>{
          setmovieList(resp.data.results)
        })
    }
    const slideRight=(element)=>{
        element.scrollLeft+=500;
    }
    const slideLeft=(element)=>{
        element.scrollLeft-=500;
    }
  return (
    <div className='relative'>
        <IoChevronBackOutline 
        
      onClick={()=>slideLeft(reff.current)} 
        className={
         `text-[50px] text-white 
         p-2 z-10 cursor-pointer
         hidden md:block absolute
         ${index_%3===0?'mt-[80px]':'mt-[150px]'}
         `
          
        }/>


<div className='flex overflow-x-auto gap-8
scrollbar-none  scroll-smooth pt-4 px-3 pb-4
' ref={reff}>

{movieList.map((item, index) => (
  <React.Fragment key={index}>
    {index % 3 === 0 ? <HrMovieCard movie={item} /> : <MovieCard movie={item} />}
  </React.Fragment>
))}
</div>
<IoChevronForwardOutline
onClick={()=>slideRight(reff.current)}
className={`text-[50px] text-white 
hidden md:block first-letter:p-2 cursor-pointer z-10 top-0
absolute right-0
${index_%3===0?'mt-[80px]':'mt-[150px]'}

`}/>
       
    </div>
  )
}

export default MovieList
