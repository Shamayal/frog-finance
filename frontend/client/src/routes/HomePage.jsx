import "../../src/styles/HomePage.css"
import frog from "../media/frog.mp4"
import frogLeaf from "../media/frog_leaf.mp4"
import Services from "../components/home/Services";
import IndividualServicesInfo from "../components/home/IndividualServicesInfo";

const HomePage = () => {

  return (

    <div>

      <div className="homepage">

      <video autoPlay loop muted playsInline className="back-video">
        <source src={frogLeaf} type="video/mp4" />
      </video>

      <div className="homepage-content">
        <h1>Frog Finance</h1>
        <h3>Leap towards financial stability!</h3>
      </div>

      </div>

      <Services />
    <IndividualServicesInfo />

    </div> // outter div

  );

};

export default HomePage;
