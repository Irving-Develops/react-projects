import React from "react"
import { Tour } from "../types/api";

const Tour: React.FC<Tour[]> = ({ tours }) => {
  return (
    <>
      {tours.map((tour) => (
        <article key={tour.id} className="single-tour">
          <img src={tour.image} alt={tour.name}></img>
          <footer>
            <div className="tour-info">
              <h4>{tour.name}</h4>
              <h4 className="tour-price">{tour.price}</h4>
            </div>
            <p>
              {tour.info}
              <button>read more</button>
            </p>
            <button className="delete-btn">Not Interested</button>
          </footer>
        </article>
      ))}
    </>
  );
};

export default Tour