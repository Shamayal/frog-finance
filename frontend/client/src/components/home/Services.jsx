import '../../styles/home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const Services = () => {
  return (
    <section className="wrapper font-poppins services-container">


      <h1 className="text-center fontweight-700">Take Your Finances <br /> to the Next Level</h1>

      <section clasNames="container text-center services">
        <div className="row py-5">
          <div className="col">
            <div>
              <FontAwesomeIcon icon="sack-dollar" className="modalIcon" />
            </div>
            Manage your money
          </div>
          <div className="col">
          <div>
              <FontAwesomeIcon icon="money-bill-transfer" className="modalIcon" />
            </div>
            Create Monthly Budgets
          </div>
          <div className="col">
          <div>
              <FontAwesomeIcon icon="arrow-trend-up" className="modalIcon" />
            </div>
            View Stocks
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div>
              <FontAwesomeIcon icon="hand-holding-dollar" className="modalIcon" />
            </div>
            Set Savings Goals
          </div>
          <div className="col">
          <div>
              <FontAwesomeIcon icon="circle-dollar-to-slot" className="modalIcon" />
            </div>
            Pay Down Debt
          </div>
          <div className="col">
          <div>
              <FontAwesomeIcon icon="chalkboard-user" className="modalIcon" />
            </div>
            Learn About Finances
          </div>
        </div>
      </section>

    </section>
  );
};

export default Services;

