import "../../src/styles/HomePage.css"
import frogLeaf from "../media/frog_leaf.mp4"
import Services from "../components/home/Services";
import IndividualServicesInfo from "../components/home/IndividualServicesInfo";
import { useAuth0 } from "@auth0/auth0-react";

const HomePage = () => {
  const { loginWithRedirect } = useAuth0();


  return (

    <>

      <div className="homepage font-poppins ">

        <video autoPlay loop muted playsInline className="back-video">
          <source src={frogLeaf} type="video/mp4" />
        </video>

        <div className="homepage-content text-right">
          <h1 className="homepage-title fontweight-700"><strong>Frog Finance</strong></h1>
          <h2 className="slogan">Leap towards financial stability</h2>
          <button className="btn btn-dark homepage-get-started-btn" onClick={() => loginWithRedirect()}>
            Hop In & Get Started
          </button>
        </div>

      </div>
      <Services />
      <IndividualServicesInfo />


    </>

  );

};

export default HomePage;
