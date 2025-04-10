import React, { useState } from "react";
import styled from "styled-components";

const TestimonialSection = styled.section`
  background-color: #a82c48;
  padding: 60px 20px 40px;
  text-align: center;
`;

const TestimonialContainer = styled.div`
  background-color: white;
  max-width: 800px;
  margin: auto;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
`;

const TestimonialCard = styled.div`
  text-align: center;
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
`;

const TestimonialText = styled.p`
  font-size: 1.2rem;
  margin: 30px 0;
  color: #333;
`;

const TestimonialName = styled.h5`
  font-size: 1.4rem;
  font-weight: bold;
  color: #a82c48;
`;

const DummyIcon = styled.div`
  background-color: #ddd;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin: 0 auto;
  margin-bottom: 15px;
`;

const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 20px;
`;

const Dot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? "#a82c48" : "#ddd")};
  cursor: pointer;
  transition: background-color 0.3s;
`;

const Title = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  color: white;
  margin-bottom: 60px;
  text-transform: uppercase;
  letter-spacing: 3px;
`;

const Testimonial = () => {
  const testimonials = [
    {
      text: "“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.”",
      name: "Johnthan Doe",
    },
    {
      text: "“Breakfast was delicious. Enjoyed the whole experience and definitely recommend this place.”",
      name: "Ronnie E.",
    },
    {
      text: "“The absolute best red sauce. Whether on Pizza or Pasta, it's honestly delicious.”",
      name: "Rick H.",
    },
    {
      text: "“Very good service, good menu … Food was very good quality all around.”",
      name: "Bill M.",
    },
    {
      text: "“I had breakfast there this morning and dinner tonight. All were well beyond my expectations.”",
      name: "Taylor M.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <TestimonialSection>
      <Title>Testimonials</Title>

      <TestimonialContainer>
        <TestimonialCard>
          <DummyIcon />
          <TestimonialText>{testimonials[activeIndex].text}</TestimonialText>
          <TestimonialName>{testimonials[activeIndex].name}</TestimonialName>
        </TestimonialCard>

        <DotsContainer>
          {testimonials.map((_, index) => (
            <Dot
              key={index}
              active={activeIndex === index}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </DotsContainer>
      </TestimonialContainer>
    </TestimonialSection>
  );
};

export default Testimonial;
