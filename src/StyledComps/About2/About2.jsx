// components/About2/About2.jsx
import React from 'react';
import About2Img from '../../assets/about2.png';
import {
  Section,
  Container,
  TextWrapper,
  Heading,
  Paragraph,
  FoodList,
  FoodItem,
  Button,
  ImageWrapper
} from './About2.styled';

const About2 = () => {
  return (
    <Section id="about2">
      <Container>
        <TextWrapper>
          <Heading>
            We make <span>everything by hand</span> with the best possible ingredients.
          </Heading>
          <Paragraph>
            A restaurant is a business that prepares and serves food and drinks to
            customers. Meals are generally served and eaten on the premises, but many restaurants also
            offer take-out and food delivery services.
          </Paragraph>
          <Paragraph>
            Restaurants vary greatly in appearance and offerings, including a wide variety of cuisines
            and service models ranging from inexpensive fast-food restaurants and cafeterias to
            mid-priced family restaurants, to high-priced luxury establishments.
          </Paragraph>
          <FoodList>
            <FoodItem><span>✔</span> Tasty Food</FoodItem>
            <FoodItem><span>✔</span> Good Service</FoodItem>
            <FoodItem><span>✔</span> Reasonable Cost</FoodItem>
            <FoodItem><span>✔</span> Hygiene and Cleanliness</FoodItem>
          </FoodList>
          <Button>Learn More</Button>
        </TextWrapper>
        <ImageWrapper>
          <img src={About2Img} alt="Food preparation" />
        </ImageWrapper>
      </Container>
    </Section>
  );
};

export default About2;
