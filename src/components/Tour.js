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
    <div className="tour" id={`tour-item-para-${tour.id}`}>
      <img src={tour.image} alt={tour.name} />
      <div className="tour-info">
        <h3>{tour.name}</h3>
        <p>{showMore ? tour.info : `${tour.info.substring(0, 200)}`}</p>
        <button id={`see-more-${tour.id}`} onClick={handleShowMore}>{showMore ? 'See less' : 'Show more'}</button>
        <button id={`delete-btn-${tour.id}`} className="delete-btn" onClick={handleDelete}>
          Delete Tour
        </button>
      </div>
      <span className="price">${tour.price}</span>
    </div>
  );
}

export default Tour;
