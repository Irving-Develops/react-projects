import React, { useState } from "react";
import data from "./data";
import UserList from "./components/UserList";
import Button from "./components/Button";
function App() {
  const [people, setPeople] = useState(data);
  const onClick = () => {
    setPeople([]);
  }
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <UserList people={people} />
        <Button onClick={onClick} children={"Clear All"}/>
      </section>
    </main>
  );
}

export default App;
