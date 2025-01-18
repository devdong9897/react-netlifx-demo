import React from "react";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import { useParams } from "react-router-dom";
import { useMovieReviewQuery } from "../../../hooks/useMovieReview";

const MovieDetailReview = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useMovieReviewQuery(id);
  console.log("mmmm", data);

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
      <h3>Reviews</h3>
      <div className="first-review">
        <p>{data.results[0].author}</p>
        <p>{data.results[0].content}</p>
      </div>
    </div>
  );
};

export default MovieDetailReview;
