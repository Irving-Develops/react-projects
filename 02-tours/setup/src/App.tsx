import React, { useState, useEffect, Suspense } from "react";
import { Tour } from "types/api";
import Tours from "./components/Tours";

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";


function App() {
  const [tours, setTours] = useState<Tour[]>([
    { id: "2", image: "12", info: "safsd", name: "sdafa", price: "312e" },
    { id: "1", image: "12", info: "safsd", name: "sdafa", price: "312e" },
  ]);

    const fetchTours = async () => {
      try {
        const response = await fetch(url);
        const tours = await response.json();
        setTours(tours);
      } catch (error) {
        console.log(error);
      }
    };
    useEffect(() => {
      fetchTours();
    }, []);

  return (
    <main>
      <section>
        <div className="title">
          <h2>Our Tours</h2>
          <div className="underline"></div>
        </div>
        <div>
          <Suspense fallback={<>Loading ...</>}>
            {tours.length > 0 ? 
            <Tours  tours={tours} setTours={setTours}/>
            : <>You have 0 tours</>
          }
          </Suspense>
        </div>
      </section>
    </main>
  );
}

export default App;
