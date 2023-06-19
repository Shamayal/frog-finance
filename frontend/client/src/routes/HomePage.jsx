import "../../src/styles/HomePage.css"
import frogLeaf from "../media/frog_leaf.mp4"
import Services from "../components/home/Services";
import IndividualServicesInfo from "../components/home/IndividualServicesInfo";
import { useAuth0 } from "@auth0/auth0-react";

const HomePage = () => {
  const { loginWithRedirect } = useAuth0();


  return (

    <div>

      <div className="homepage">

      <video autoPlay loop muted playsInline className="back-video">
        <source src={frogLeaf} type="video/mp4" />
      </video>

      <div className="homepage-content">
        <h1 className="title fontweight-700 font-poppins"><strong>Frog Finance</strong></h1>
        <br />
        <h3 className="slogan font-poppins">Leap towards financial stability, one hop at a time!</h3>
        <div className="button-container">
          <button className="btn btn-light" onClick={() => loginWithRedirect()}>
            Sign Up
          </button>
        </div>
      </div>

      </div>

      <Services />
    <IndividualServicesInfo />

    </div> // outter div

  );

};

export default HomePage;
