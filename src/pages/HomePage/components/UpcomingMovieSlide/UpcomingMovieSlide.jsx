import React from "react";
import Alert from "react-bootstrap/Alert";
import MovieSlider from "../../../../common/MovieSlider/MovieSlider";
import { responsive } from "../../../../constants/responsive";
import { useUpcomingMovieQuery } from "../../../../hooks/useUpcomingMovies";

const UpcomingMovieSlide = () => {
  const { data, isLoading, isError, error } = useUpcomingMovieQuery();
  console.log("ddd", data);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }
  return (
    <div>
      <MovieSlider
        title="Upcoming Movies"
        movies={data.results}
        responsive={responsive}
      />
    </div>
  );
};

export default UpcomingMovieSlide;
