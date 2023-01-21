import React from "react";

// import Image from "next/image";
// import styles from "../styles/Home.module.css";
import Navigator from "../components/Navigator";
import { useState } from "react";

const index = () => {
  const [first,setfirst] =useState(0);
  
  const handleIncrease = () => {
    setfirst(first + 1);
  };
  const handleDecrease = () => {
    setfirst(first - 1);
  };
  
  return (
    <>
      <Navigator />
      <h1>learing about hooks</h1>
      <h1>show value {first}</h1>

      <button onClick={handleIncrease}>+</button>
      <h1>icreasing {setfirst}</h1>
      <button onClick={handleDecrease}>+</button>
    </>
  );
};
export default index;
