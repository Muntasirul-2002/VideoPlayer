import React from "react";
import { useParams } from "react-router-dom";

function VideoPlayer() {
  const { id } = useParams();
  return <div>VideoPlayer</div>;
}

export default VideoPlayer;
