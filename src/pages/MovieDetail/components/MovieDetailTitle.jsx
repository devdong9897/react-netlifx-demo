import React from "react";
import { Col, Row } from "react-bootstrap";
import Badge from "react-bootstrap/Badge";
import "./MovieDetailTitle.style.css";

const MovieDetailTitle = ({ movie }) => {
  return (
    <div>
      <Row className="justify-content-center g-0">
        <Col
          xs={12}
          md={8}
          className="d-flex justify-content-center align-items-center"
          style={{ padding: "0 15px" }}
        >
          <div className="detail-img">
            <img
              src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`}
              alt="포스터"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </Col>
        <Col
          xs={12}
          md={4}
          className="d-flex justify-content-start"
          style={{ paddingLeft: "15px" }}
        >
          <div className="content">
            {movie.genres.map((genre, index) => (
              <Badge bg="danger" key={index}>
                {genre.name}
              </Badge>
            ))}
            <h1>{movie.title}</h1>
            <div className="grade">
              <div>평균 평점: {movie.vote_average}</div>
              <div>인기도: {movie.popularity}</div>
            </div>
            <p>{movie.overview}</p>
            <div className="sale">
              <div style={{ display: "block", marginBottom: "10px" }}>
                <Badge bg="danger">Budget</Badge> ${" "}
                {movie.budget.toLocaleString()}
              </div>
              <div style={{ display: "block", marginBottom: "10px" }}>
                <Badge bg="danger">Revenue</Badge> ${" "}
                {movie.revenue.toLocaleString()}
              </div>
              <div style={{ display: "block", marginBottom: "10px" }}>
                <Badge bg="danger">Release Date</Badge> {movie.release_date}
              </div>
              <div style={{ display: "block", marginBottom: "10px" }}>
                <Badge bg="danger">Runtime</Badge> {movie.runtime}분
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default MovieDetailTitle;
