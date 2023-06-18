import "../../src/styles/HomePage.css"
import frog from "../media/frog.mp4"
import frogLeaf from "../media/frog_leaf.mp4"

const HomePage = () => {
  return (
    <div className="homepage">
      <video autoPlay loop muted playsInline className="back-video">
        <source src={frogLeaf} type="video/mp4" />        
      </video>
      <div className="homepage-content">
        <h1>Frog Finance</h1>
        <h3>Leap towards financial stability!</h3>
      </div>
    </div>
  );
};

export default HomePage;
