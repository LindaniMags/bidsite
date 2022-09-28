import React from "react";
import { BsFillEmojiWinkFill } from "react-icons/bs";
import parents from "../images/fatherhood.svg";
import teachers from "../images/teaching.svg";
import students from "../images/exams.svg";

export const Sec6 = () => {
  return (
    <div className="sec6-con">
      <div className="sub-title">
        <h3>Everyone Benefits.</h3>
      </div>
      <div className="adspace2">
        <div className="ad-item">
          <img src={parents} alt="parents" />
          <h4>Parents</h4>
        </div>
        <div className="hr">
          <hr />
        </div>
        <div className="ad-item">
          <img src={teachers} alt="teachers" />
          <h4>Teachers</h4>
        </div>
        <div className="hr">
          <hr />
        </div>
        <div className="ad-item">
          <img src={students} alt="students" />
          <h4>Students</h4>
        </div>
      </div>
    </div>
  );
};
