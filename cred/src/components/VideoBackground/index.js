import video from '../../assets/CreditVideo_HD_Preview.mp4'; // Import your video file
import './videoBackground.css'

import React from 'react';

const VideoBackground = () => {
  return (
    <video autoPlay loop muted className="video-background">
      <source src={video} type="video/mp4" />
      Your browser does not support the video tag.
    
</video>
  );
};

export default VideoBackground;