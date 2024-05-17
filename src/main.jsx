// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import App from './App';
import VideoPlayer from './components/VideoPlayer';
import './index.css'

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <BrowserRouter>
      <Routes>
        <Route path="*" element={<App />} />
        <Route path="/video/:videoId" element={<VideoPlayer />} />
      </Routes>
  </BrowserRouter>

);
