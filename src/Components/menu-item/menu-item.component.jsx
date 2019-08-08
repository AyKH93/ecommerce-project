import React from "react";
import "./menu-item.styles.scss";

export const MenuItem = ({ ImageUrl, title, size }) => {
  console.log(ImageUrl);
  return (
    <div className={`${size} menu-item`}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${ImageUrl})` }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};
