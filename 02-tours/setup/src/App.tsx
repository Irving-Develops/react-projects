import React, { useState, useEffect, Suspense } from "react";
import { Tour } from "types/api";
import Loading from "./Loading";
import Tours from "./Tours";
import fetchTours from "services/api";

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN

function App() {
  const [tours, setTours] = useState<Tour[]>([])!;



  useEffect(() => {
  async function fetchData() {
    const tours = await fetchTours()
    setTours(tours)
  }
  fetchData()
  }, []);

  // if (!tours.length) return null;
  return (
    <main>
      <section>
        <div className="title">
          <h2>Our Tours</h2>
          <div className="underline"></div>
        </div>
        <div>
          <Suspense fallback={<Loading />}>
            <Tours tours={tours}/>
          </Suspense>
        </div>
      </section>
    </main>
  );
}

export default App;
