import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";

function MoviePage() {
  const APP_KEY = "9da9c0dae2a10b1212393b3a9c87ae7b";

  const { id } = useParams();

  const movieUrl = `https://api.themoviedb.org/3/movie/${id}/external_ids?api_key=${APP_KEY}`;

  const specificMfromTMDB = `https://api.themoviedb.org/3/movie/${id}?api_key=${APP_KEY}`;

  const defaultData = {
    Actors: "Jesse Metcalfe, Bruce Willis, Lala Kent, Natalie Eva Marie",
    Awards: "N/A",
    BoxOffice: "N/A",
    Country: "USA",
    DVD: "N/A",
    Director: "Matt Eskandari",
    Genre: "Action, Thriller",
    Language: "English",
    Metascore: "N/A",
    Plot:
      "The work of billionaire tech CEO Donovan Chalmers (Willis) is so valuable that he hires mercenaries to protect it, and a terrorist group kidnaps his daughter just to get it.",
    Poster: "/images/loader.gif",
    Production: "N/A",
    Rated: "R",
    Released: "21 Aug 2020",
    Response: "True",
    Runtime: "98 min",
    Title: "Hard Kill",
    Type: "movie",
    Website: "N/A",
    Writer:
      "Joe Russo (screenplay by), Chris LaMont (screenplay by), Clayton Haugen (story by), Nikolai From (story by)",
    Year: "2020",
    imdbID: "tt11656172",
    imdbRating: "4.0",
    imdbVotes: "4,258",
  };

  //
  // Pic url:  http://image.tmdb.org/t/p/w600_and_h900_bestv2/betExZlgK0l7CZ9CsCBVcwO1OjL.jpg
  // Original: http://image.tmdb.org/t/p/original/betExZlgK0l7CZ9CsCBVcwO1OjL.jpg

  //const [moviePosterTMDB, setMoviePosterTMDB] = useState("/images/loader.gif")

  const [movieObj, setMovieObj] = useState(defaultData);
  const [largePoster, setLargePoster] = useState("/images/loader.gif");

  useEffect(() => {
    const fetchMovieData = async () => {
      console.log(movieUrl);

      const result = await axios.get(movieUrl);
      const imdbID = result.data.imdb_id;

      console.log(imdbID);

      const APP_KEY_2 = "88212abb";
      const movieUrl_2 = `http://www.omdbapi.com/?apikey=${APP_KEY_2}&i=${imdbID}`;

      console.log(movieUrl_2);

      const result_2 = await axios.get(movieUrl_2);
      const MovieDetails = result_2.data;

      console.log(MovieDetails);

      const result_3 = await axios.get(specificMfromTMDB);
      const test = result_3.data;

      console.log("test:");
      console.log(test);

      const posterPath = result_3.data.backdrop_path;

      const fullPosterURL = `https://image.tmdb.org/t/p/original${posterPath}`;
      setLargePoster(fullPosterURL);
      setMovieObj(MovieDetails);

      console.log("fullPosterURL below");
      console.log(fullPosterURL);
    };
    fetchMovieData();
  }, []);

  return (
    <div className="container moviePage">
      <div className="row ">
        <div className="col-lg-12 ">
          {/* <img style={{ boxShadow: ' 0 0 7px grey' }} src={movieObj.Poster} className="img-fluid" alt="Responsive image" /> */}
          <img src={largePoster} className="img-fluid" alt="Responsive image" />
        </div>

        <div className="col-lg-12 ">
          <h2 className="display-4 mb-4">{movieObj.Title}</h2>
          <p>
            <b>Year:</b> {movieObj.Year}
          </p>
          <p>
            <b>Genre:</b> {movieObj.Genre}
          </p>
          <p>
            <b>Runtime:</b> {movieObj.Runtime}
          </p>
          <p>
            <b>Language:</b> {movieObj.Language}
          </p>
          <p>
            <b>IMDB Rating:</b> {movieObj.imdbRating}
            <Rating
              name="customized-10"
              value={movieObj.imdbRating}
              max={10}
              precision={0.5}
              readOnly
            />
          </p>
        </div>
      </div>

      <hr />

      <div className="row ">
        <div className="col-lg-12 ">
          <h3 className="mPlot mb-5 mt-2">
            <b>Plot:</b> {movieObj.Plot}
          </h3>
        </div>
      </div>

      <div className="row ">
        <div className="col-lg-6 ">
          <p>
            <b>Director:</b> {movieObj.Director}
          </p>
        </div>
        <div className="col-lg-6 ">
          <p>
            <b>Actors:</b> {movieObj.Actors}
          </p>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col">
          <Link type="button" class="btn btn-secondary btn-sm" to="/">
            Back to main movies page
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MoviePage;
