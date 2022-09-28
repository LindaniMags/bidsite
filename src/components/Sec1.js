import React from "react";
import { BsArrowRight } from "react-icons/bs";
import learning from "../images/learning.svg";

export const Sec1 = () => {
  return (
    <div className="sec1-con">
      <div className="hero">
        <div className="sec1-left">
          <h1>Learning That Gets You</h1>
          <p>Skills for your present and your future. Get started with us.</p>
          <div className="email-con">
            <button className="start email-field">Get started</button>
          </div>
        </div>
        <div className="sec1-right">
          <div className="circle">
            <img src={learning} />
          </div>
        </div>
      </div>
    </div>
  );
};
/*<div className="adspace">
        <div className="adspace-left">
          <h3>Voluptate quos! Quisquam aspernatur nostrum</h3>
          <div className="read-more">
            <p>Read more</p>
            <BsArrowRight />
          </div>
        </div>
        <div className="adspace-right">
          <div className="round">
            <h4>advert</h4>
          </div>
        </div>
      </div>*/
