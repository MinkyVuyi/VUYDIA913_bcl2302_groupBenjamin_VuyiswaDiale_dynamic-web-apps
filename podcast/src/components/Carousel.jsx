import React, { useState } from 'react';

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  const handleItemClick = (index) => {
    // Implement logic to navigate to the show details page for the selected show
    console.log("Show details page for:", items[index].title);
  };

  return (
    <div className="carousel">
      <button onClick={prevItem}>&#10094;</button>
      <div className="carousel-items">
        {items.map((item, index) => (
          <div
            key={index}
            className={index === currentIndex ? 'active' : 'inactive'}
            onClick={() => handleItemClick(index)} // Handle click event for show details
          >
            {/* Display the item content, e.g., an image or card */}
            <img src={item.imageUrl} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      <button onClick={nextItem}>&#10095;</button>
    </div>
  );
};

export default Carousel;
