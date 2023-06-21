import React, { useEffect } from 'react';
import "../../styles/learn.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

const LearnFinance = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="wrapper learn-section font-quicksand">
      <h1 className='font-poppins'>A Guide to the Basics of Financial Literacy<br /> Dive into the pond of financial wisdom!</h1>
      <br />
      <h5 className='font-poppins'>Financial literacy is a term thrown around a lot, but what is it and how important is it in your daily life?</h5>
      <h6>
        Financial literacy is when a person has the skills and knowledge to make smart decisions on how to manage their money.This includes keeping track of a budget, being responsible with how you save money, understanding how loans can impact your credit, and planning for retirement. With these skills you will be able to live the life you want and have more freedom to choose how you spend your hard-earned money!
      </h6>
      <br />
      <h6>
      Just like frogs leaping from one lily pad to another, understanding financial concepts and taking proactive steps can propel you towards a stable and secure future. So, let's hop right in and explore the essentials of financial literacy, one leap at a time!
      </h6>
      <br />

      <div data-aos="fade-up-right" data-aos-duration="500" className="tip-box">
        <h5>1. Tadpole Tales: From Ripples to Riches</h5>
          <p>
          Just as frogs start as tadpoles, your financial journey begins with grasping the fundamental concepts. Learn about budgeting, saving, and tracking your expenses. Create a budgeting plan that suits your goals and income. Remember, every penny saved is a leap towards financial independence!
          </p>
      </div>

      <br />

      <div data-aos="fade-up-left" data-aos-duration="500" className="tip-box">
        <h5>2. Leaping Over Lilies: Say Goodbye to the Debt Swamp!</h5>
          <p>
          As frogs, we must be cautious about the murky waters of debt ponds. Just as a frog skillfully jumps from one lily pad to another, we must navigate through financial challenges and avoid accumulating unnecessary debt. Understand the different types of debt and prioritize paying them off. Avoid unnecessary loans, manage credit cards responsibly, and stay aware of interest rates and their longterm impact on paying off debt.Leapfrog towards financial freedom by keeping your debts under control.
          </p>
      </div>

      <br />

      <div data-aos="fade-up-right" data-aos-duration="500" className="tip-box">
        <h5>3. Croaking About Credit Scores: The Lily Pad of Trustworthiness!</h5>
          <p>
          Our credit score is akin to a frog's croak—a distinct sound that lets others know who we are. A good credit score is vital for financial success, opening doors to favorable loan terms, lower interest rates, and greater opportunities. Just like frogs rely on their croaks to communicate, maintaining a good credit score requires responsible borrowing and timely repayments.
          </p>
      </div>

      <br />

      <div data-aos="fade-up-left" data-aos-duration="500" className="tip-box">
        <h5>4. Building Your Froggy Fortress: Save, Save, Save!</h5>
          <p>
          Start by saving a portion of your income regularly. Create an emergency fund to protect yourself from unexpected financial storms. As you save, watch your nest egg grow, allowing you to leap ahead in achieving your financial goals.
          </p>
      </div>

      <br />

      <div data-aos="fade-up-right" data-aos-duration="500" className="tip-box">
        <h5>5. Diversify Your Pond: Don't Put All Your Eggs in One Basket!</h5>
          <p>
          Just as frogs thrive in diverse habitats, your finances benefit from diversification. Consider investing in various asset classes such as stocks, bonds, and mutual funds. By diversifying your investments, you spread the risk and increase the likelihood of long-term financial growth. Take a leap of faith and become an informed investor!
          </p>
      </div>

      <br />

      <div data-aos="fade-up-left" data-aos-duration="500" className="tip-box">
        <h5>6. Use Insurance to Protect Yourself : Beware of Predators and Pond Pests!</h5>
          <p>
          Frogs face challenges from predators and pests in their natural habitat. Similarly, financial security requires protection. Safeguard your assets with insurance coverage, including health, life, and property insurance. By doing so, you can protect yourself from unexpected leaps into financial trouble.
          </p>
      </div>

      <br />

      <div data-aos="fade-up-right" data-aos-duration="500" className="tip-box">
        <h5>7. The Ripple Effect : Giving Back</h5>
          <p>
          Just as a frog's leap creates ripples in the water, our financial actions can create positive impacts on society. Embracing the principle of giving back, whether through charitable donations or supporting sustainable investments, can amplify the influence of our financial decisions.
          </p>
      </div>

      <br />

      <div data-aos="fade-up-left" data-aos-duration="500" className="tip-box">
        <h5>8. Seek More Knowledge: Educate Yourself Continually!</h5>
          <p>
          Continual learning is the secret to a frog's adaptability, and the same applies to financial literacy. Stay updated on financial news, read books or blogs, and attend workshops or seminars. Embrace opportunities for growth and learning. The more knowledge you acquire, the higher you'll leap on your financial journey.
          </p>
      </div>

      <br />

      <div data-aos="fade-up-right" data-aos-duration="500" className="tip-box">
        <h5>9. Seek Advice: Talk to a Financial Advisor!</h5>
          <p>
          Just as frogs guide their tadpoles, seeking financial advice can help you navigate tricky financial waters. Consider working with a financial advisor or finding a knowledgeable mentor who can provide guidance tailored to your goals. Their expertise can help you make informed financial decisions and avoid potential pitfalls.
          </p>
      </div>

      <br />

      <div data-aos="fade-up-left" data-aos-duration="500" className="tip-box">
        <h5>10. Sign-Up for a Frog Finance Account!</h5>
          <p>
          The first hop in navigating the ever-chaning waters of personal fincance is to create a Frog Finance account! Members have free access to features like the budget tracker, savings goals, and debt management which you can use to know where your money is going and see how much you are saving to put towards your goals or pay off high interest debts! Welcome to our pond, ribbet!
          </p>
      </div>

      <br />

    </div>
  );
};

export default LearnFinance;
