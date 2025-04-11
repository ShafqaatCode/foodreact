import React from 'react';
import {
  ExploreFoodSection,
  Wrapper,
  FoodGrid,
  Card,
  CardContent,
  OrderButton,
  TextContent
} from './ExploreFood.styled';

import dosa from '../../assets/dosa.jpg'; 

const ExploreFood = () => {
  return (
    <ExploreFoodSection id="explore">
      <Wrapper>
        <div className="explore-container">
          <TextContent>
            <h2>
              Explore Our <span style={{ color: '#a82c38' }}>Foods</span>
            </h2>
            <p>
              Food is a huge part of how we connect with cultures. and it is good to see<br />
              From spices to street food  we're all about flavor.
            </p>
          </TextContent>

          <FoodGrid>
            {[...Array(8)].map((_, index) => (
              <Card key={index}>
                <img src={dosa} alt="Vegetable Sandwich" />
                <CardContent>
                  <h4>Vegetable Sandwich</h4>
                  <p>Time: 15 - 20 Minutes</p>

                 
                  <p><span className="rating">4.3 ★</span></p>

                  <span className="price">
                    ₹150 <del>₹180</del>
                  </span>

                  <OrderButton>Order Now</OrderButton>
                </CardContent>
              </Card>
            ))}
          </FoodGrid>
        </div>
      </Wrapper>
    </ExploreFoodSection>
  );
};

export default ExploreFood;
