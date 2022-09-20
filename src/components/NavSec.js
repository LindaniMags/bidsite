import styles from "./styles.css";
import React from "react";
export function NavSec() {
  const [toggleState, setToggleState] = React.useState(0);

  function toggleTab(index) {
    setToggleState(index);
  }

  return (
    <div className="navsec-con">
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
                  toggleTab(1);
                }}
              >
                Explore
              </a>
              <ul
                className={toggleState === 1 ? "active-list" : " hidden-list"}
              >
                <li>
                  <a href="google.com">nykjhsdhv jsdjsosi</a>
                </li>
                <li>
                  <a href="google.com">nyosi</a>
                </li>
                <li>
                  <a href="google.com">nyosi</a>
                </li>
              </ul>
            </div>
          </li>
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
                  <a href="google.com">nykjhsdhv jsdjsosi</a>
                </li>
                <li>
                  <a href="google.com">nyosi</a>
                </li>
                <li>
                  <a href="google.com">nyosi</a>
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
                Individual
              </a>
              <ul
                className={toggleState === 3 ? "active-list" : " hidden-list"}
              >
                <li>
                  <a href="google.com">nykjhsdhv jsdjsosi</a>
                </li>
                <li>
                  <a href="google.com">nyosi</a>
                </li>
                <li>
                  <a href="google.com">nyosi</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <div className="explore">
              <a
                href="lindanimags.github.io"
                onMouseOver={() => {
                  toggleTab(4);
                }}
              >
                Businesses
              </a>
              <ul
                className={toggleState === 4 ? "active-list" : " hidden-list"}
              >
                <li>
                  <a href="google.com">nykjhsdhv jsdjsosi</a>
                </li>
                <li>
                  <a href="google.com">nyosi</a>
                </li>
                <li>
                  <a href="google.com">nyosi</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <div className="explore">
              <a
                href="lindanimags.github.io"
                onMouseOver={() => {
                  toggleTab(5);
                }}
              >
                Developers
              </a>
              <ul
                className={toggleState === 5 ? "active-list" : " hidden-list"}
              >
                <li>
                  <a href="google.com">nykjhsdhv jsdjsosi</a>
                </li>
                <li>
                  <a href="google.com">nyosi</a>
                </li>
                <li>
                  <a href="google.com">nyosi</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <div className="explore">
              <a
                href="lindanimags.github.io"
                onMouseOver={() => {
                  toggleTab(6);
                }}
              >
                Company
              </a>
              <ul
                className={toggleState === 6 ? "active-list" : " hidden-list"}
              >
                <li>
                  <a href="google.com">nykjhsdhv jsdjsosi</a>
                </li>
                <li>
                  <a href="google.com">nyosi</a>
                </li>
                <li>
                  <a href="google.com">nyosi</a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div className="logs">
        <a href="lindanimags.github.io">Log in</a>
        <button className="get-started">Sign up</button>
      </div>
    </div>
  );
}
