import React, { useState, useEffect } from "react";
// Import components
import Awards from "../components/Awards";
import Gallery from "../components/Gallery";
//Import Styles
import styled from "styled-components";
// Import motion animations
import { motion } from "framer-motion";
import { lineAnim } from "../animations";
import { useLocation } from "react-router-dom";
import { MovieState } from "../movieState";

function MovieDetails() {
  const url = useLocation();
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const currentMovie = movies.filter(
      (stateMovie) => stateMovie.url === url.pathname // Compare movies url against the current movie url
    );
    setMovie(currentMovie[0]);

    console.log(currentMovie[0])
    // console.log(movies);
    console.log(url.pathname)
    // console.log(url)
  }, [movies, url]);
  return (
    <DetailsContainer>
      <HeadlineContainer>
        <h2>{movie?.title}</h2>
        <img src={movie?.mainImg} alt={movie?.title} />
      </HeadlineContainer>
      <AwardsContainer>
        {movie?.awards.map((award) => (
          <Awards
            title={award.title}
            description={award.description}
            key={award.title}
          />
        ))}
      </AwardsContainer>
      <ImageDisplay>
        <img src={movie?.secondaryImg} alt={movie?.title} />
      </ImageDisplay>
      <GalleryHeader>
        <h3>Gallery</h3>
        <motion.div variants={lineAnim} className="line"></motion.div>
      </GalleryHeader>
      <GalleryContainer>
        {movie?.gallery.map((gallery) => (
          <Gallery image={gallery.galleryImage} key={gallery.galleryImage} />
        ))}
      </GalleryContainer>
    </DetailsContainer>
  );
}

const DetailsContainer = styled.div`
  color: #fff;
`;

const HeadlineContainer = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%, 10%);
  }
  img {
    padding-top: 5rem;
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const AwardsContainer = styled.div`
  max-height: 80vh;
  display: flex;
  margin: 8rem 0rem;
  align-items: center;
  justify-content: space-around;
  @media (min-width: 280px) and (max-width: 800px) {
    flex-wrap: wrap;
  }
`;

const ImageDisplay = styled.div`
  min-height: 40vh;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (min-width: 280px) and (max-width: 469px) {
    img {
      margin-top: 15rem;
    }
  }
`;

const GalleryContainer = styled.div`
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`;
const GalleryHeader = styled.div`
  height: 30vh;
  padding: 8rem 0rem;
  align-items: center;
  justify-content: center;
  position: relative;

  .line {
    width: 13%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 10%);
  }

  h3 {
    text-align: center;
    font-size: 5rem;
  }
`;
export default MovieDetails;
