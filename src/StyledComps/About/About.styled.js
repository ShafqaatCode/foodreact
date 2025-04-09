// components/About/About.styled.js
import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  background-color: #fff;
  padding: 60px 40px;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
  overflow: hidden;
  max-width: 1200px;
  margin: auto;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
  }
`;

export const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;

  img {
    width: 90%;
    max-width: 600px;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  }

  @media (max-width: 768px) {
    justify-content: center;
    img {
      width: 100%;
    }
  }
`;

export const TextWrapper = styled.div`
  flex: 1;
  padding: 20px;
`;

export const Heading = styled.h2`
  font-size: 2.2rem;
  color: #1f6daf;
  text-transform: capitalize;
  margin-bottom: 20px;
  font-weight:700;
  

  span {
    color: #a82c48;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
    text-align: center;
  }
`;

export const Paragraph = styled.p`
  color: #555;
  font-size: 16px;
  line-height: 1.9;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const Button = styled.button`
  background-color: #a82c48;
  color: white;
  padding: 12px 20px;
  font-size: 1rem;
  margin-top: 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #911f39;
  }

  @media (max-width: 768px) {
    display: block;
    margin: 20px auto 0;
  }
`;
