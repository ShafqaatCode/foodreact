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
            Besides practical experience, a simple but effective business plan should be in place.
            It defines the restaurant's concept, target audience, pricing, and all that good stuff.
          </Paragraph>

          <Paragraph>
            Its all about smart investing — save costs where you can, but never skimp on the essentials.
            Especially when it comes to equipment. Trust me, that matters long-term.
          </Paragraph>

          
          <Button>Learn More</Button>
        </TextWrapper>
      </Container>
    </Section>
  );
};

export default About;
