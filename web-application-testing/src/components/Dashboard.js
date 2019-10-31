import React from "react";

const Dashboard = (props) => {

  const Strike = () => {
    if (props.strikes === 3) {
      return props.setStrikes(0);
    } else {
      return props.setStrikes(props.strikes + 1);
    }
  };

  const Ball = () => {
    if (props.balls === 4) {
      return props.setBalls(0);
    } else {
      return props.setBalls(props.balls + 1);
    }
  };

  const Foul = () => {
    if (props.strikes < 2) {
      return props.setStrikes(props.strikes + 1);
    } else {
      return props.strikes;
    }
  };

  const Hit = () => {
    props.setHit(props.hit + 1);
    if (props.hit > 0) {
      return (
          props.setStrikes(0),
          props.setBalls(0)          
      );
    } else {
        return props.hit;
    }
  };

  return (
    <div>
      <button onClick={Strike}>Strike</button>
      <button onClick={Ball}>Ball</button>
      <button onClick={Foul}>Foul</button>
      <button onClick={Hit}>Hit</button>
    </div>
  );
};

export default Dashboard;
