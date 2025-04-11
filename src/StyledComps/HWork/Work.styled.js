import styled from 'styled-components';

export const WorkSection = styled.section`
  background-color: #f9f9f9;
  padding: 60px 20px;
  text-align: center;
`;

export const WorkContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const WorkTitle = styled.h2`
  font-size: 2.5rem;
  color: #1f6daf;
  margin-bottom: 40px;

  span {
    color: #a82c48; 
  }
`;

export const WorkSteps = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px; // was 30, still seems fine
`;

export const WorkBox = styled.div`
 
  /* background-color: white;
  border-radius: 120px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); */

  padding: 20px;
  max-width: 250px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px); // tiny nudge on hover
  }
`;

export const WorkImage = styled.img`
  width: 300px;
  height: 200px;
  border-radius: 100%; // gives that circle look

  object-fit: cover; // makes sure image doesn't stretch or squash

  // keeping these for later possible tweaks
  // padding: 20px;
  // height: 160px;
  // border-radius: 10px;
`;

export const WorkText = styled.p`
  margin-top: 15px;
  font-size: 1rem;
  color: #333;


`;
