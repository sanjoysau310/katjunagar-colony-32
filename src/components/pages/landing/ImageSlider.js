import React, { useState, useEffect } from "react";

const ImageSlider = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    // Set up a timer to switch to the next image every 3 seconds (adjust as needed)
    const timer = setInterval(() => {
      nextImage();
    }, 3000);

    // Clean up the timer on component unmount
    return () => clearInterval(timer);
  }, [currentImage]);

  const nextImage = () => {
    // Update the currentImage state to switch to the next image
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const prevImage = () => {
    // Update the currentImage state to switch to the previous image
    setCurrentImage(
      (prevImage) => (prevImage - 1 + images.length) % images.length
    );
  };

  return (
    <div className="image-slider">
      <img src={images[currentImage]} alt={`Slide ${currentImage + 1}`} />
    </div>
  );
};

export default ImageSlider;
