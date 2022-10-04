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
      <div className="footer-items">
        <div className="items-con">
          <div className="bahai">
            <FaBahai />
          </div>
          <div className="footer-item">
            <a href="lindanimag.github.io">Visit Us</a>
            <a href="lindanimag.github.io">Learn</a>
            <a href="lindanimag.github.io">Careers</a>
            <a href="lindanimag.github.io">Teachers</a>
          </div>
        </div>

        <div className="items-con">
          <div>
            <FaBahai className="bahai" />
          </div>
          <div className="footer-item">
            <a href="lindanimag.github.io">Help Center</a>
            <a href="lindanimag.github.io">Legal & privacy </a>
            <a href="lindanimag.github.io">Cookie policy</a>
          </div>
        </div>
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
