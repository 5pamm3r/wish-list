import React from "react";
import "./Categories.css";

function Categories() {
  return (
    <section className="cat__section">
      <h2>Categories</h2>
      <div className="cat__container">
        {/* <div className="buttons__container">
          <div className="dot-all dot"></div>
          <button>All</button>
        </div> */}
        <div className="buttons__container">
          <div className="dot-personal dot"></div>
          <button>Personal</button>
        </div>
        <div className="buttons__container">
          <div className="dot-work dot"></div>
          <button>Work</button>
        </div>
        <div className="buttons__container">
          <div className="dot-shop dot"></div>
          <button>Shop</button>
        </div>
        <div className="buttons__container">
          <div className="dot-other dot"></div>
          <button>Other</button>
        </div>
      </div>
    </section>
  );
}

export { Categories };
