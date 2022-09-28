import { FaBahai } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

export function Footer() {
  return (
    <div className="footer">
      <div className="socials">
        <h3>FOLLOW US</h3>
        <div className="social-icons">
          <a href="lindanimag.github.io">
            <FaTwitter />
          </a>
          <a href="lindanimag.github.io">
            <FaInstagram />
          </a>
          <a href="lindanimag.github.io">
            <FaFacebookSquare />
          </a>
        </div>
      </div>
      <div className="footer-item">
        <div>
          <FaBahai />
        </div>
        <a href="lindanimag.github.io">About</a>
        <a href="lindanimag.github.io">About</a>
        <a href="lindanimag.github.io">About</a>
        <a href="lindanimag.github.io">About</a>
      </div>
      <div className="footer-item">
        <div>
          <FaBahai />
        </div>
        <a href="lindanimag.github.io">About</a>
        <a href="lindanimag.github.io">About</a>
        <a href="lindanimag.github.io">About</a>
        <a href="lindanimag.github.io">About</a>
      </div>
      <div className="footer-banner">
        <h3 className="bidders">LEARN</h3>
        <p>KNOWLEDGE POWER</p>
      </div>
    </div>
  );
}

/*.sec1-left {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  gap: 13px;
  padding-right: 0;
  text-align: center;
} */
