import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../../styles/learn.css"

const LearnMoney = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="wrapper learn-section font-quicksand">
      <h1 className='font-poppins'>"Ribbeting" Tips on How you Can Pinch your Pennies!<br /> Saving Money the Frog-tastic Way!</h1>
      <br />
      <h5 className='font-poppins'>Saving Money doesn't have to be hard or boring, but how can you do that?</h5>
      <h6>
        In our daily lives, finding ways to save money can be a tad challenging. However, with a little creativity and a touch of whimsy, we can discover frog-tastic methods to jump-start our savings. From budgeting to embracing frugality, let's explore a lily pad full of clever ways to save those precious pennies, all while hopping along with our amphibian friends!
      </h6>
      <br />

      <div data-aos="fade-up-right" data-aos-duration="500" className="tip-box">
        <h5>1. "Croak" Down on Your Expenses</h5>
          <p>
          It is crucial to analyze your expenses and reflect on what was an unnecessary purchase.Focus on your needs vs. wants. Do you really need to buy lunch at work everyday or can you save money and bring a homecooked meal instead? Create a budgeting plan that suits your goals and income. Instead of splurging on costly outings, try hiking, organizing game nights with friends, or having a movie marathon at home. Learn to enjoy the simply everyday things that bring us joy.
          </p>
      </div>

      <br />

      <div data-aos="fade-up-left" data-aos-duration="500" className="tip-box box-left">
        <h5>2. Hop on the Thrifting Train</h5>
          <p>
          Embrace the art of thrift shopping! Instead of buying brand new items, leap into secondhand stores and flea markets for incredible deals. You never know what hidden treasures you might find—be it fashionable clothing or quirky home decor. It's the frugal frog method to save while reducing waste and being environmentally conscious.
          </p>
      </div>

      <br />

      <div data-aos="fade-up-right" data-aos-duration="500" className="tip-box">
        <h5>3. Leaping Over Impulse Purchases</h5>
          <p>
          Avoid falling victim to marketing scehemes that will lure you in to purchase the current trendy item. Impulse purchases can be a drain on your wallet. If you come across something you want to buy, give it some time. This allows you to reflect on whether it's a necessary purchase or simply a passing desire. Often, you'll find that the "hoppy" feeling fades away, and you'll save money by avoiding unnecessary buys. Remember the goal is to be rich not look rich.
          </p>
      </div>

      <br />

      <div data-aos="fade-up-left" data-aos-duration="500" className="tip-box box-left">
        <h5>4. Frog Friendly Energy Efficiency</h5>
          <p>
          Embrace energy-efficient habits, and you'll witness a reduction in your utility bills. Make sure to turn off lights when you leave a room, unplug electronics when they're not in use, and opt for energy-efficient appliances. These small adjustments can make a huge difference in conserving energy and saving you money in the long run.
          </p>
      </div>

      <br />

      <div data-aos="fade-up-right" data-aos-duration="500" className="tip-box">
        <h5>5. Jump into Couponing</h5>
          <p>
          Don't let coupons hop away without making use of them! Embrace the art of couponing and save a bundle on your grocery bills, household items, and more. Hop on websites or apps that offer digital coupons and watch your savings soar like a frog leaping across a pond!
          </p>
      </div>
    
    </div>
  );
};

export default LearnMoney;