import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-links">
          <ul className="links">
            <li>Home</li>
            <li>About Us</li>
            <li>FAQ</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="social-icons">
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-youtube"></i>
        </div>
        <div className="footer-title">
          <h2>Frog Finance</h2>
          <h5><em>Where pre-loved furniture finds a new home!</em></h5>
        </div>
        <div className="footer-copyright">
          <i className="fa-regular fa-copyright"></i>
          <h6>2023: Frog Finance, Inc. All rights reserved.</h6>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
