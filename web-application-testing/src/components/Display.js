import React from "react";

const Display = props => {
    //console.log(props.strikes);
  return (
    <div>
      <p>Balls: {props.balls}</p>
      <p>Strikes: {props.strikes}</p>
      <p>Hits: {props.hit}</p>
    </div>
  );
};

export default Display;
