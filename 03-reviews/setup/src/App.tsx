import React, { useEffect, useState } from "react";
import reviews from "./data";
import Review from "components/Review";

function App() {
  const [id, setId] = useState(1);
  const currentFinder = (id: number) => {
    return reviews.find((review) => review.id === id);
  };
  const [current, setCurrent] = useState(currentFinder(id)!);

    useEffect(() => {
      setCurrent(currentFinder(id)!);
    }, [id]);

  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>Our Reviews</h2>
          <div className="underline"></div>
        </div>
        <Review review={current} id={id} setId={setId}/>
      </section>
    </main>
  );
}

export default App;
