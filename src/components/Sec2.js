import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import math from "../images/maths.png";
import dna from "../images/dna.png";
import flask from "../images/flask.png";
import physics from "../images/physics.png";

export const Sec2 = () => {
  return (
    <div className="sec2-con">
      <div>Classes Offered.</div>
      <div className="table-con">
        <div className="table-item">
          <div className="name">
            <img src={math} />
            <p>Mathematics</p>
          </div>
          <div className="price">
            <button className="buy">Curriculum</button>
          </div>
        </div>
        <div className="table-item">
          <div className="name">
            <img src={physics} />
            <p>Physics</p>
          </div>
          <div className="price">
            <button className="buy">Curriculum</button>
          </div>
        </div>
        <div className="table-item">
          <div className="name">
            <img src={flask} />
            <p>Chemistry</p>
          </div>
          <div className="price">
            <button className="buy">Curriculum</button>
          </div>
        </div>
        <div className="table-item">
          <div className="name">
            <img src={dna} />
            <p>Biology</p>
          </div>
          <div className="price">
            <button className="buy">Curriculum</button>
          </div>
        </div>
      </div>
    </div>
  );
};
