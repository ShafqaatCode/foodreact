// components/About/About.jsx
import React from 'react';
import AboutImg from '../../assets/about.jpg';
import {
  Section,
  Container,
  ImageWrapper,
  TextWrapper,
  Heading,
  Paragraph,
  Button
} from './About.styled';

const About = () => {
  return (
    <Section id="about">
      <Container>
        <ImageWrapper>
          <img src={AboutImg} alt="Delicious Food" />
        </ImageWrapper>
        <TextWrapper>
          <Heading>
            We pride ourselves on making <span>Real Food</span> from the best ingredients.
          </Heading>
          <Paragraph>
            Besides practical experience, a simple but effective business plan should
            be in place which defines and describes the restaurant's concept, its targeted market and
            location, menu and pricing, future earnings and expenditure forecasts, and staff
            recruitment, training, and retention policies.
          </Paragraph>
          <Paragraph>
            It is important to invest wisely to save costs without compromising on quality. It is also
            essential to invest in high-quality equipment for long-term and heavy-duty use.
          </Paragraph>
          <Button>Learn More</Button>
        </TextWrapper>
      </Container>
    </Section>
  );
};

export default About;
