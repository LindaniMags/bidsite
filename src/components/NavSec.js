import styles from "./styles.css";
import React from "react";
import { FiLogIn } from "react-icons/fi";
import { FcMenu } from "react-icons/fc";

export function NavSec() {
  const [toggleState, setToggleState] = React.useState(0);
  const [active, setActive] = React.useState(false);

  function toggleTab(index) {
    setToggleState(index);
  }
  function navControl() {
    setActive((prevState) => !prevState);
  }

  return (
    <div className="navsec-con">
      <div className="menu">
        <FcMenu onClick={navControl} className="menu-icon" />

        <div className={active ? "nav-on" : "nav-off"}>
          <ul>
            <li>Learn</li>
            <li>Careers</li>
            <li>Resources</li>
            <li>About Us</li>
          </ul>
        </div>
      </div>

      <h2 className="bidders">BIDDERS</h2>
      <div
        className="nav-list"
        onMouseLeave={() => {
          toggleTab(0);
        }}
      >
        <ul>
          <li>
            <div className="explore">
              <a
                href="lindanimags.github.io"
                onMouseOver={() => {
                  toggleTab(2);
                }}
              >
                Learn
              </a>
              <ul
                className={toggleState === 2 ? "active-list" : " hidden-list"}
              >
                <li>
                  <a href="google.com">Mathematics</a>
                </li>
                <li>
                  <a href="google.com">Physics</a>
                </li>
                <li>
                  <a href="google.com">Chemistry</a>
                </li>
                <li>
                  <a href="google.com">Biology</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <div className="explore">
              <a
                href="lindanimags.github.io"
                onMouseOver={() => {
                  toggleTab(3);
                }}
              >
                Careers
              </a>
              <ul
                className={toggleState === 3 ? "active-list" : " hidden-list"}
              >
                <li>
                  <a href="google.com">Web Development</a>
                </li>
                <li>
                  <a href="google.com">Digital Marketing</a>
                </li>
                <li>
                  <a href="google.com">Data Science</a>
                </li>
                <li>
                  <a href="google.com">Mobile Development</a>
                </li>
                <li>
                  <a href="google.com">Photography</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <div className="explore">
              <a href="lindanimags.github.io">Resources</a>
            </div>
          </li>
          <li>
            <div className="explore">
              <a href="lindanimags.github.io">About Us</a>
            </div>
          </li>
        </ul>
      </div>
      <FiLogIn className="log-in" />
      <div className="logs">
        <a href="lindanimags.github.io">Log in</a>
        <button className="get-started">Sign up</button>
      </div>
    </div>
  );
}
