import React from 'react';
import FoodEat from '../../assets/FoodEat.png'; // I’ll replace this image later with unique ones maybe?

// Styled Components - not all of these are final, still playing around
import {
  WorkSection,
  WorkContainer,
  WorkTitle,
  WorkSteps,
  WorkBox,
  WorkImage,
  WorkText
} from './Work.styled';

const Work = () => {
  return (
    <WorkSection>
      <WorkContainer>
        <WorkTitle>
          How It <span>Works</span> 
        </WorkTitle>

        <WorkSteps>
          <WorkBox>
            <WorkImage src={FoodEat} alt="Choose your favourite food" />
            <WorkText>Choose favourite food</WorkText>
          </WorkBox>

          <WorkBox>
            <WorkImage src={FoodEat} alt="Free and Fast delivery" />
            <WorkText>Free and Fast delivery</WorkText>
          </WorkBox>

          <WorkBox>
            <WorkImage src={FoodEat} alt="Easy Payment Method" />
            <WorkText>Easy Payment Method</WorkText>
          </WorkBox>

          <WorkBox>
            <WorkImage src={FoodEat} alt="Enjoy your meal" />
            <WorkText>Enjoy your meal</WorkText> 
          </WorkBox>
        </WorkSteps>
      </WorkContainer>
    </WorkSection>
  );
};

export default Work;
