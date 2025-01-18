import React from "react";
import { useMovieDetailQuery } from "../../hooks/useMovieDetail";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import { useParams } from "react-router-dom";
import "./MovieDetailPage.style.css";
import MovieDetailTitle from "./components/MovieDetailTitle";
import MovieDetailReview from "./components/MovieDetailReview";
import MovieDetailVideos from "./components/MovieDetailVideos";

const MovieDetailPage = () => {
  const { id } = useParams();
  console.log(id);

  const { data, isLoading, isError, error } = useMovieDetailQuery(id);
  console.log("ddd", data);

  if (isLoading) {
    return (
      <div className="spinner-area">
        <Spinner
          animation="border"
          variant="danger"
          style={{ width: "5rem", height: "5rem" }}
        />
      </div>
    );
  }

  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  return (
    <div>
      <MovieDetailTitle movie={data} />
      <MovieDetailReview />
      <MovieDetailVideos />
    </div>
  );
};

export default MovieDetailPage;
