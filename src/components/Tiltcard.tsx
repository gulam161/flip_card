import React from "react";
import { Tilt } from "react-tilt";

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

const Tiltcard: React.FC = () => {
  return (
    <Tilt options={defaultOptions}>
      <div className="w-[32vw] h-[80vh] border border-gray-600 rounded-md bg-[#f2f] text-white font-bold">
        Tilt card
      </div>
    </Tilt>
  );
};
export default Tiltcard;
