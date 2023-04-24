import React, { useState } from 'react';
import items from './data';
import MenuItem from 'components/MenuItem';
import Button from 'components/Button';

function App() {
  const categories = ["all", "breakfast", "lunch", "shakes"]
  const [category, setCategory] = useState(categories[0])
  const [filterItems, setFilterItems] = useState(null)

  const handleClick = (category) => {

    if(category === "all") {
      
    }

    setCategory(category)
  }

  console.log(category)
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <div className="btn-container">
          {categories.map((category) => (
            <Button
              styles={"filter-btn"}
              children={category}
              onClick={() => handleClick(category)}
            />
          ))}
          {/* <button className="filter-btn">all</button>
          <button className="filter-btn">breakfast</button>
          <button className="filter-btn">lunch</button>
          <button className="filter-btn">shakes</button> */}
        </div>
        <div className="section-center">
          {items.map((item) => (
            <>
              {item.category === category ? (
                <MenuItem key={item.id} item={item} />
              ) : null
              // (
              //   <MenuItem key={item.id} item={item} />
              // )
              }
            </>
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
