import React from 'react';
import Generlist from '../constant/Generlist';
import MovieList from './MovieList';
const genere = Generlist.genere;


const GenerMovieList = () => {
  return (
    <div>
      {genere.slice(0, 5).map((item, index) => (
        <div className='p-8 px-8 md:px-16' key={index}>
          <h2 className='text-[20px] text-white font-bold'>{item.name}</h2>
          <MovieList generId={item.id} index_={index}/>
        </div>
      ))}
    </div>
  );
};

export default GenerMovieList;
