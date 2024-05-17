// src/App.js

import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import VideoPlayer from './components/VideoPlayer';

function App() {
  const [videos, setVideos] = useState([]);
  const navigate = useNavigate();

  const handleSearch = async (searchTerm) => {
    try {
      const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          key: 'AIzaSyCYy9HWnOkPpaTGmYINIjXmyGxKNV0cVg8', // Replace with your API key
          part: 'snippet',
          q: searchTerm,
          type: 'video',
          maxResults: 10 // Number of results to fetch
        }
      });

      const fetchedVideos = response.data.items;
      setVideos(fetchedVideos);
    } catch (error) {
      console.error('Error fetching videos:', error);
      // Handle error, e.g., show an error message to the user
    }
  };

  const handleCardClick = (videoId) => {
    navigate(`/video/${videoId}`);
  };

  return (
    <div className="App p-4">
      <h1 className="text-2xl text-red-500 mb-4">YouTube</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="grid grid-cols-4 gap-4">
        {videos.map((video) => (
          <div
            className="bg-gray-100 p-4 rounded-md cursor-pointer hover:shadow-lg transition-shadow duration-300"
            key={video.id.videoId}
            onClick={() => handleCardClick(video.id.videoId)}
          >
            <div className="flex justify-center items-center h-48">
              <img
                className="w-full h-full object-cover rounded-md"
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
              />
            </div>
            <p className="text-gray-800 font-semibold mt-2 text-center">{video.snippet.title}</p>
          </div>
        ))}
      </div>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/video/:videoId" element={<VideoPlayer />} />
      </Routes>
    </div>
  );
}

export default App;
