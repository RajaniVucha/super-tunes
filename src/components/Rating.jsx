import React from "react";

const Rating = ({ rating }) => {
  const rateArr = [];
  for (let i = 0; i < rating; i++) {
    console.log(i);
    rateArr.push(i);
  }
  console.log(rateArr);
  return (
    <div className="rating">
      {rateArr.map((item) => (
        <div className="star"></div>
      ))}
    </div>
  );
};

export default Rating;
