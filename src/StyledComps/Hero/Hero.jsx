
import React from 'react';
import HeroImg  from '../../assets/Hero.jpg'
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
          <Heading>Delicious Healthy Recipes<br />From Family to Yours</Heading>
          <Paragraph>
            As a food lover and a number cruncher, I've decided that cooking on a budget shouldn't mean canned beans and
            ramen noodles night after night. Join me for delicious recipes designed for small budgets.
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
