import React from "react";
import styled from "styled-components";
import backgroundImage from "../../assets/story.jpg"; 


const Story = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(${backgroundImage}) no-repeat center center/cover;
`;

const StoryContainer = styled.div`
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 0 20px;
`;

const Heading = styled.h2`
  text-align: center;
  color: #ccc;
  font-size: 2rem;
  font-weight: bold;
  line-height: 1.4;
`;

const Paragraph = styled.p`
  text-align: center;
  color: #ccc;
  font-size: 1rem;
`;

const Button = styled.button`
  padding: 12px 30px;
  background-color: #a82c48;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.3s ease;

  &:hover {
    background-color: #881f3a;
  }
`;

const StoryBoard = () => {
  return (
    <Story>
      <StoryContainer>
        <Heading>
          When a man's stomach is full it makes no <br /> difference whether he is rich or poor.
        </Heading>
        <Paragraph>
          Many successful restaurateurs believe that working in someone else's restaurants was <br />
          the best preparation for owning and running their own establishment.
        </Paragraph>
        <Button>Read More</Button>
      </StoryContainer>
    </Story>
  );
};

export default StoryBoard;
