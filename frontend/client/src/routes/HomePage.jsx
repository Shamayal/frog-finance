import "../../src/styles/HomePage.css"
import coin_spinning from "../media/coin_spinning.mp4";

const HomePage = () => {
  return (
    <div>
      <h2>Welcome to Frog Finance!</h2>
      <h3>Leap towards financial stability!</h3>
      <h4>Join millions of others and hop into finance frog to embark on your journey to effective money management!</h4>
      <h3>The First Hop Towards a Better Future!</h3>
      <h6>Disclaimer: No frogs were harmed in the making of this blog post. Ribbit!</h6>
      <div className="homepage">
        <video autoPlay loop muted playsInline className="back-video">
          <source src={coin_spinning} type="video/mp4">
          </source>        
        </video>
      </div>
    </div>
  );
};

export default HomePage;
