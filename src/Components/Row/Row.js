import React, { useState, useEffect } from "react";
import "./Row.css";
import axios from "../../axios"; // importing instance as axios because instance is exported as default
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// to fetch images for each movies
const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchURL, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      // console.log(request);
      // console.log(request.data.results);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchURL]); //fetchURL is dependancy in useEffect

  //OR we can write the above useEffect code like this
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await fetch("http://localhost:4444/getBlogPost");
  //       const getResponse = await res.json();
  //       console.log(getResponse);
  //       setMovies(getResponse);
  //     } catch (error) {
  //       console.log("An error occured");
  //       console.log(error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slideToShow: 5,
    slideToScroll: 3,
  };

  // function to display youTube trailer when movies are clicked
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || movie?.title || movie?.original_title || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search); //a method to parse out the parameter(url) form the query string
          setTrailerUrl(urlParams.get("v")); //v is the videoId found on the youtube url
        })
        .catch((error) => console.log(error));
    }
  };

  // console.log(movies);

  return (
    <>
      <Slider {...settings}>
        <div className="row">
          <h1 className="text">{title}</h1>

          <div className="row_posters">
            {movies?.map((movie) => (
              <img
                key={movie.id}
                onClick={() => handleClick(movie)}
                className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            ))}
          </div>

          <div style={{ padding: "40px" }}>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
          </div>
        </div>
      </Slider>
    </>
  );
}

export default Row;
