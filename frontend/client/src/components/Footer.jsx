import "../styles/Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-links">
          <ul className="links font-quicksand">
            <li>Home</li>
            <li>About Us</li>
            <li>FAQ</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="social-icons">
          <FontAwesomeIcon icon="frog" />
        </div>
        <div className="footer-title fontweight-700 font-poppins">
          <h2>Frog Finance</h2>
        </div>
        <div className="footer-copyright font-quicksand">
          <h6>© 2023: Frog Finance, Inc. All rights reserved.</h6>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
