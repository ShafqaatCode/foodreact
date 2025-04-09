// components/Hero/Hero.styled.js
import styled from "styled-components";
import bgImage from "../../assets/Hero.jpg"; // Adjust the path as necessary

export const Section = styled.section`
  margin-top: 80px;
  padding: 100px 80px 60px 80px; /* Top padding accounts for fixed navbar */
  //   background-color: #111;
  color: white;
  min-height: 100vh;
  background: url(${bgImage}) no-repeat center center/cover;
  @media (max-width: 768px) {
    padding: 100px 20px 40px;
  }

  @media (max-width: 480px) {
    padding: 100px 15px 30px;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Left = styled.div`
  flex: 1;
  padding-right: 40px;
  margin-top: 100px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
  }
`;

export const Heading = styled.h1`
  font-size: 40px;
  line-height: 1.2;
  font-weight: 700;
  margin-bottom: 45px;

  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 15px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

export const Paragraph = styled.p`
  color: #ccc;
  margin: 16px 0;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 16px;
    margin: 10px 0;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const OrderButton = styled.button`
  background-color: #a82c48;
  color: white;
  padding: 10px 20px;
  font-weight: bold;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  transition: 0.3s ease;

  &:hover {
    background-color: #8c233b;
  }

  @media (max-width: 768px) {
    padding: 12px 18px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    padding: 10px 15px;
    font-size: 12px;
  }
`;

export const Right = styled.div`
  flex: 1;

  @media (max-width: 768px) {
    width: 100%;
    min-height: 250px;
  }
`;
