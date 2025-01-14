import React from "react"
import {ToursProps } from "../types/api";
import Button from "./Button";
import ReadMore from "./ReadMore";

const Tours= ({tours, setTours}: ToursProps) => {
    console.log(tours)
    const handleTourDelete = (id: string) => {
      setTours((prevTours) => prevTours.filter((tour) => tour.id !== id));
    };
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
            <ReadMore info={tour.info} />
            <Button
              children={"Not Interested"}
              styles={"delete-btn"}
              onClick={() => handleTourDelete(tour.id)}
            />
          </footer>
        </article>
      ))}
    </>
  );
};

export default Tours