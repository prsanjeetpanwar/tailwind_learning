import React, { useEffect, useRef, useState } from 'react';
import Global from '../services/Global';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original';

const Slider = () => {
    const [movieList, setMovieList] = useState([]);
    const userRef = useRef(null);
    const screenwidth=window.innerWidth

    useEffect(() => {
        getTrendingMovies();
    }, []);

    const getTrendingMovies = async () => {
        try {
            const resp = await Global.getTrandingVideos();
            setMovieList(resp.data.results);
        } catch (error) {
            console.error("Error fetching trending movies:", error);
        }
    };

    const sliderRight = () => {
        if (userRef.current) {
            userRef.current.scrollLeft += screenwidth-110;
        }
    };

    const sliderLeft = () => {
        if (userRef.current) {
            userRef.current.scrollLeft -= screenwidth-110;
        }
    };

    return (
        <div>
            <HiChevronLeft className='hidden md:block text-white text-[31px] cursor-pointer absolute mx-8 mt-[150px]' onClick={sliderLeft} />
            <HiChevronRight className='hidden md:block text-white text-[31px] cursor-pointer absolute mx-8 mt-[150px] right-0' onClick={sliderRight} />
            <div className='flex overflow-x-auto w-full px-16 py-4 scrollbar-none scroll-smooth' ref={userRef}>
                {movieList.map((movie, index) => (
                    <img src={`${IMAGE_BASE_URL}/${movie.backdrop_path}`} alt=""
                        className='min-w-full md:h-[310px] object-cover object-left-top mr-5 rounded-md hover:border-[4px] ease-in border-gray-400 transition-all duration-100'
                    />
                ))}
            </div>
        </div>
    );
};

export default Slider;
