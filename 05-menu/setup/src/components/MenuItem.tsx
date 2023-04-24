import React from "react";

const MenuItem = ({item}) => {
    return (
      <article className="menu-item">
        <img className="photo" src={item.img} alt={item.title} />
        <div className="info">
          <header>
            <h4>{item.title}</h4>
            <h4 className="price">${item.price}</h4>
          </header>
          <p className="item-text">{item.desc}</p>
        </div>
      </article>
    );
}

export default MenuItem