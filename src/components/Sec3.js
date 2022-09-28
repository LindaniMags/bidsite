import React from "react";
import { BsFillExclamationDiamondFill } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";

export const Sec3 = () => {
  return (
    <div className="sec3-con">
      <div className="sec3-left">
        <h3>Help yourself to our delightful career courses.</h3>

        <p>Learn new skills and make a career out of them.</p>
        <button className="get-started">get started</button>
      </div>
      <div className="sec3-right">
        <div className="products">
          <div className="product-con">
            <div className="product">
              <p>Web Development</p>
            </div>
          </div>
          <div className="product-con">
            <div className="product">
              <p>Digital Marketing</p>
            </div>
          </div>
          <div className="product-con">
            <div className="product">
              <p>Data Science</p>
            </div>
          </div>
          <div className="product-con">
            <div className="product">
              <p>Mobile App Development</p>
            </div>
          </div>
        </div>
        <div className="view-more">
          <a href="lindanimags.github.io">View more</a>
          <BsArrowRight />
        </div>
      </div>
    </div>
  );
};
