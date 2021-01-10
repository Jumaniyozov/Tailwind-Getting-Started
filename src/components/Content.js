import React from "react";
import ImageONe from "../images/egg.jpg";
import ImageTwo from "../images/egg-2.jpg";

const Content = () => {
  return (
    <>
      <div className="menu-card">
        <img
          src={ImageONe}
          alt="egg1"
          className="h-full rounded mb-20 shadow"
        />
        <div className="center-content">
          <h2 className="text-2xl mb-2">Egg Muffins</h2>
          <p className="mb-2">Crisspy, delicious, and nutritious</p>
          <span>$16</span>
        </div>
      </div>
      <div className="menu-card">
        <img
          src={ImageTwo}
          alt="egg1"
          className="h-full rounded mb-20 shadow"
        />
        <div className="center-content">
          <h2 className="text-2xl mb-2">Egg Salad</h2>
          <p className="mb-2">Crisspy, delicious, and nutritious</p>
          <span>$18</span>
        </div>
      </div>
    </>
  );
};

export default Content;
