import React, { useState } from 'react';
import data from './data';
import Questions from 'components/Questions';
const App: React.FC = () => {
  console.log(data)
  
  return (
    <main>
      <div className="container">
        <h3>questions and answers about login</h3>
        <section className="info">
          {data.map((article) => (

            <Questions article={article}/>
            // <article className="question" key={article.id}>
            //   <header>
            //     <h4>{article.title}</h4>
            //     <button className="btn" onClick={(e) => handleClick(e)}>
            //       <svg
            //         stroke="currentColor"
            //         fill="currentColor"
            //         stroke-width="0"
            //         // t="1551322312294"
            //         viewBox="0 0 1024 1024"
            //         version="1.1"
            //         height="1em"
            //         width="1em"
            //         xmlns="http://www.w3.org/2000/svg"
            //       >
            //         <defs></defs>
            //         <path d="M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z"></path>
            //         <path d="M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z"></path>
            //       </svg>
            //     </button>
            //   </header>
            //   {toggle ? (
            //     <p style={{ display: toggle ? "block" : "none" }}>
            //       {article.info}
            //     </p>
            //   ) : null}
            // </article>
          ))}
        </section>
      </div>
    </main>
  );
}

export default App;