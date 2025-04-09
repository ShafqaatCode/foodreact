import React from 'react';
import FoodEat from '../../assets/FoodEat.png';
import { WorkSection, WorkContainer, WorkTitle, WorkSteps, WorkBox, WorkImage, WorkText } from './Work.styled';

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
            <WorkText>Choose your favourite food</WorkText>
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
            <WorkImage src={FoodEat} alt="Easy Payment Method" />
            <WorkText>Easy Payment Method</WorkText>
          </WorkBox>
        </WorkSteps>
      </WorkContainer>
    </WorkSection>
  );
};

export default Work;
