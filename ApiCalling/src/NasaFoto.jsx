// src/components/NasaPhoto.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NasaPhoto = () => {
  const [photoData, setPhotoData] = useState(null);

  useEffect(() => {
    const fetchPhoto = async () => {
        try {
            const response = await axios.get(
              `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=YOUR_API_KEY`
            );
            setPhotoData(response.data);
          } catch (error) {
            console.error('Error fetching NASA photo:', error);
          }
      };

    fetchPhoto();
  }, []);

  if (!photoData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Mars Rover Photo</h1>
      <img src={photoData.photos[0].img_src} alt="Mars Rover" />
      <p>Earth Date: {photoData.photos[0].earth_date}</p>
      <p>Camera: {photoData.photos[0].camera.full_name}</p>
    </div>
  );
};

export default NasaPhoto;
