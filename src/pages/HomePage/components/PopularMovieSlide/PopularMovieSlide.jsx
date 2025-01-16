import React from "react";
import Alert from "react-bootstrap/Alert";
import { usePopularMoviesQuery } from "../../../../hooks/usePopularMovies";

const PopularMovieSlide = () => {
  const { data, isLoading, isError, error } = usePopularMoviesQuery();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }
  return (
    <div>
      <h3>Popular Movies</h3>
    </div>
  );
};

export default PopularMovieSlide;
