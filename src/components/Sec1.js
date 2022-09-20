import React from "react";
import { BsArrowRight } from "react-icons/bs";

export const Sec1 = () => {
  return (
    <div className="sec1-con">
      <div className="hero">
        <div className="sec1-left">
          <div className="profile">
            <p>Jump start your profile</p>
            <BsArrowRight />
          </div>
          <h1>Jump start your portfolio</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, nisi
            mollitia necessitatibus quo illo
          </p>
          <div className="email-con">
            <input
              type="text"
              placeholder="email"
              className="email-field"
            ></input>
            <button className="start email-field">Get started</button>
          </div>
        </div>
        <div className="sec1-right">
          <div className="circle">
            <div className="rectangle"></div>
          </div>
        </div>
      </div>
      <div className="adspace">
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
      </div>
    </div>
  );
};
