import React from "react";
import { BsFillExclamationDiamondFill } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";

export const Sec3 = () => {
  return (
    <div className="sec3-con">
      <div className="sec3-left">
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, nisi
          mollitia
        </h3>
        <p>
          necessitatibus quo illo voluptates veniam iusto beatae minus? Suscipit
          unde ea nisi repellat doloremque.
        </p>
        <button className="get-started">start earning</button>
      </div>
      <div className="sec3-right">
        <div className="products">
          <div className="product-con">
            <div className="product">
              <BsFillExclamationDiamondFill />
              <p>Product1</p>
            </div>
            <p className="earn">earn 154.56</p>
          </div>
          <div className="product-con">
            <div className="product">
              <BsFillExclamationDiamondFill />
              <p>Product1</p>
            </div>
            <p className="earn">earn 154.56</p>
          </div>
          <div className="product-con">
            <div className="product">
              <BsFillExclamationDiamondFill />
              <p>Product1</p>
            </div>
            <p className="earn">earn 154.56</p>
          </div>
          <div className="product-con">
            <div className="product">
              <BsFillExclamationDiamondFill />
              <p>Product1</p>
            </div>
            <p className="earn">earn 154.56</p>
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
