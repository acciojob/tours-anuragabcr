import React, { useState } from 'react';

function Tour({ tour, onDeleteTour }) {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  const handleDelete = () => {
    onDeleteTour(tour.id);
  };

  return (
    <div className="tour">
      <img src={tour.image} alt={tour.name} />
      <div className="tour-info">
        <h3>{tour.name}</h3>
        <p>{showMore ? tour.info : `${tour.info.substring(0, 200)}...`}</p>
        <button onClick={handleShowMore}>{showMore ? 'See less' : 'Show more'}</button>
        <button className="delete-btn" onClick={handleDelete}>
          Delete Tour
        </button>
      </div>
      <span className="price">${tour.price}</span>
    </div>
  );
}

export default Tour;
