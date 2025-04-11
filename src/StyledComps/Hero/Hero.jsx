import React from 'react';
import HeroImg from '../../assets/Hero.jpg'; 

import {
  Section,
  Content,
  Left,
  Heading,
  Paragraph,
  OrderButton,
  Right
} from './Hero.styled';

const Hero = () => {
  return (
    <Section id="home">
      <Content>
        <Left>
          <Heading>
            Delicious Healthy Recipes<br />
            From Family to Yours
          </Heading>

          <Paragraph>
            As a food lover *and* a number cruncher, I've realized that cooking on a budget doesn’t have to
            mean canned beans every night. These recipes are budget-friendly and actually tasty.
          </Paragraph>

          
          <OrderButton>Order Now →</OrderButton>
        </Left>

        <Right>
          
        </Right>
      </Content>
    </Section>
  );
};

export default Hero;
