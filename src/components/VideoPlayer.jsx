import React from "react";
import { useParams } from "react-router-dom";



function VideoPlayer() {
  // Get the videoId from the URL params
  const { videoId } = useParams();

  // YouTube embed URL with the videoId
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-player-container">
      {/* <h2 className="text-xl font-semibold mb-4">Video Player</h2> */}
      <div className="video-wrapper">
        <iframe
          width="560"
          height="315"
          src = {embedUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default VideoPlayer;
