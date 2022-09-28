import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import edu from "../images/education.svg";
import mem from "../images/membership.png";
import res from "../images/research.png";
import grid from "../images/grid.png";

export const Sec4 = () => {
  return (
    <div className="sec4-con">
      <div className="sec-con">
        <div className="sec4-left">
          <div className="object">
            <div className="join">
              <img src={res} />
            </div>
            <div className="object-titles">
              <h5>What Will You Discover?</h5>
              <p>
                Explore new skills, deepen existing passions, and get lost in
                creativity. What you find just might surprise and inspire you.
              </p>
            </div>
          </div>
          <div className="object">
            <div className="join">
              <img src={mem} />
            </div>
            <div className="object-titles">
              <h5>Membership With Meaning </h5>
              <p>
                With so much to explore, real projects to create, and the
                support of fellow-creatives, Skillshare’s online learning
                platform empowers you to learn new skills and accomplish real
                growth.
              </p>
            </div>
          </div>
          <div className="object">
            <div className="join">
              <img src={grid} />
            </div>

            <div className="object-titles">
              <h5>Online Learning Designed For Real Life</h5>
              <p>
                Move your creative journey forward without putting life on hold.
                Skillshare’s short online classes help you find inspiration that
                fits your routine.
              </p>
            </div>
          </div>
        </div>
        <div className="sec4-right">
          <div className="big-rect">
            <img src={edu} />
          </div>
        </div>
      </div>
    </div>
  );
};
