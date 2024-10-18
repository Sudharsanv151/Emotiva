// src/assets/components/Videobg.jsx
import React from 'react';
import videoFile from '/public/img/videobg.mp4';

const Videobg = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <video
        autoPlay
        loop
        muted
        className="w-full h-full object-cover"
        playsInline // Fixes playback on mobile browsers
      >
        <source src={videoFile} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Videobg;
