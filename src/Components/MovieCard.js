import React from 'react';

import { Link } from 'react-router-dom';
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";

function MovieCard(props) {

    // the link with parameter bellow is to find a certain movie's IMDB ID, to use the movie's full information on a movie page
    // const findImdbId = `https://api.themoviedb.org/3/movie/${props.id}/external_ids?api_key=9da9c0dae2a10b1212393b3a9c87ae7b`;

    const movieDate = props.release_date.split('-');
    const movieYear = movieDate[0];

    return (

        <div className="col-xl-3 col-md-4 col-sm-6 mb-4">

            <div className="flip-card mCard">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img src={`http://image.tmdb.org/t/p/w600_and_h900_bestv2${props.poster_path}`} alt={props.title} className="posterImg" />
                        <div className='mTop' style={{ right: '5px' }}>
                            {/* <img className='starImg' src='../../images/star.png' /> */}
                                        <Rating
              name="customized-10"
              value={1}
              max={1}
              readOnly
            />{props.vote_average}
                        </div>
                        <div className='mTop' style={{ left: '5px' }}>
                            {movieYear}
                        </div>
                    </div>
                    <div className="flip-card-back">
                        <img src={`http://image.tmdb.org/t/p/w600_and_h900_bestv2${props.poster_path}`} style={{ opacity: '0.4' }} alt={props.title} className="posterImg" />
                        <Link to={`/movies/${props.id}`}>
                            <div className="cardBackTitle">
                                <h5 style={{ width: '100%' }}>{props.title}</h5>
                            </div>
                        </Link>
                        <div className="cardBackRDate">
                            <p style={{ width: '100%' }}>Release Date: <b>{props.release_date}</b></p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default MovieCard;