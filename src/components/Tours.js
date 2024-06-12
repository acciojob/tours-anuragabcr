import React from 'react';
import Tour from './Tour';

function Tours({ tours, onDeleteTour }) {
  return (
    <div className="tours">
      {tours.map((tour) => (
        <Tour key={tour.id} tour={tour} onDeleteTour={onDeleteTour} />
      ))}
    </div>
  );
}

export default Tours;
