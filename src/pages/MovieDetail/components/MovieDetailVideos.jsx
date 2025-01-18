import React from "react";
import { useMovieVideosQuery } from "../../../hooks/useMovieVideos";
import { useParams } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import YouTube from "react-youtube";

const MovieDetailVideos = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useMovieVideosQuery(id);

  console.log("vvvv", data);

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

  const videoId = data.results[0].key;

  return (
    <div>
      <h2>Movie Trailer</h2>
      <YouTube
        videoId={videoId}
        opts={{
          height: "440",
          width: "100%",
          playerVars: {
            autoplay: 1,
            controls: 0,
            modestbranding: 1,
            rel: 0,
            fs: 0,
            iv_load_policy: 3,
            mute: 1,
          },
        }}
      />
    </div>
  );
};

export default MovieDetailVideos;
