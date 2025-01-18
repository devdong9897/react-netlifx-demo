import React from "react";
import { useMovieDetailQuery } from "../../hooks/useMovieDetail";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import { useParams } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import "./MovieDetailPage.style.css";

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
      <Row className="justify-content-center g-0">
        <Col
          xs={12}
          md={8}
          className="d-flex justify-content-center align-items-center"
        >
          <div className="detail-img">
            <img
              src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${data.poster_path}`}
              alt="포스터"
            />
          </div>
        </Col>
        <Col> 
          <div className="content">
            <h1>{data.title}</h1>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default MovieDetailPage;
