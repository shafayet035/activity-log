import React from "react";

const DateConv = ({ seconds }) => {
  const convert = () => {
    let date = new Date(seconds * 1000);
    return <p>{date.toDateString()}</p>;
  };

  return <div>{convert()}</div>;
};

export default DateConv;
