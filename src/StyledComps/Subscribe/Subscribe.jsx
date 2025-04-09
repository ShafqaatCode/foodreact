import {React} from 'react';
import { StyledSubscribe } from './Subscribe.styled';

const Subscribe = () => {
  return (
    <StyledSubscribe>
      <div className="sub-content">
        <h1>
          Hurry Up! <span>Subscribe</span> our <br /> newsletter and get 25% off
        </h1>
        <p>Limited time offer for this month. No credit card required.</p>
        <div className="btn">
          <input type="text" placeholder="Email Address Here" />
          <button>Subscribe</button>
        </div>
      </div>
    </StyledSubscribe>
  );
};

export default Subscribe;
