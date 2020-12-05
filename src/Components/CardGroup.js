import React, { useState, useEffect } from 'react';

import axios from 'axios';
import MovieCard from './MovieCard';


function CardGroup() {

    const APP_KEY = '9da9c0dae2a10b1212393b3a9c87ae7b';

    const [cards, setCards] = useState([]);
    const [itemsFilter, setItemsFilter] = useState('');
    const [radioPos, setRadioPos] = useState(0);

    const getMovies = sortBy => {

        const url = `https://api.themoviedb.org/3/discover/movie?api_key=${APP_KEY}&language=en-US&sort_by=${sortBy}&include_adult=false&include_video=false&page=1&vote_count.gte=1`;

        // `https://api.themoviedb.org/3/discover/movie?api_key=${APP_KEY}&language=en-US&year=${year}&sort_by=${sortBy}&include_adult=false&include_video=false&page=1`;

        return axios.get(url)
            .then(response => response.data.results);

        // sortBy options:
        // popularity.desc  
        // primary_release_date.desc
    }


    const showMovies = async (sortedBy) => {
        const cardsFromYear = await getMovies(sortedBy);
        setCards(cardsFromYear);
        console.log(cardsFromYear);
    }

    useEffect(async () => {
        showMovies('popularity.desc')
    }, []);


    let search = '';

    const onSearch = ({ target: { value: text } }) => {

        setItemsFilter(text);
    };


    function movieFilter(item) {

        const lower = itemsFilter.toLowerCase();
        const lowerCardTitle = item.title.toLowerCase();
        if (lowerCardTitle.includes(lower))
            return true;
        return false;

    }


    return (

        <>

            <h1 className='text-center my-3 text-light' style={{ textShadow: '0 2px 8px rgb(63, 58, 71)' }}>Welcome to Movie Finder. Have Fun</h1>

            <div className="row mt-3">

                <div className="col-md-5 text-center">
                    <h4 className="text-light">Sort Movies By:</h4>
                </div>

                <div className="col-md-5 text-center">

                    <div className="form-group mt-2">

                        <div className="form-check form-check-inline">
                            <input onClick={() => { setRadioPos(0); showMovies('popularity.desc') }} type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked={radioPos == 0} />
                            <label className="form-check-label ml-2 text-light" htmlFor="exampleRadios1">Most Popular</label>
                        </div>
                        <div className="form-check form-check-inline ml-2">
                            <input onClick={() => { setRadioPos(1); showMovies('primary_release_date.desc') }} type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked={radioPos == 1} />
                            <label className="form-check-label ml-2 text-light" htmlFor="exampleRadios1">Newest</label>
                        </div>
                    </div>
                </div>
            </div>


            <div className="form-group mt-2">

                <div className="row mt-2">
                    <div className="col-1"></div>
                    <div className="col-10">
                        <input className="form-control form-control-lg search" type="text" defaultValue={search} onKeyUp={onSearch} placeholder="Search a movie by name" />
                    </div>
                    <div className="col-1"></div>
                </div>

            </div>
            <hr />

            <div className="row mt-4">
                {
                    cards.filter(movieFilter).map(card => <MovieCard {...card} key={card.id} />)
                }
            </div>
        </>

    )

}

export default CardGroup;