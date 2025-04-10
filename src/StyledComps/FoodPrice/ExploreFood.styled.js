import styled from "styled-components";

export const ExploreFoodSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
`;

export const Wrapper = styled.div`
  width: 90%;
`;

export const TextContent = styled.div`
  h2 {
    text-align: center;
    font-size: 2rem;
    color: #1f6daf;
    margin-bottom: 60px;
    margin-top: 40px;
  }

  p {
    text-align: center;
    font-size: 1.1rem;
    margin-bottom: 110px;
  }
`;

export const FoodGrid = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
`;

export const Card = styled.div`
  margin-bottom: 60px;

  img {
    border-radius: 20px;
    width: 240px;
    transition: transform 0.3s ease;
    margin-bottom: 20px;
  }

  img:hover {
    transform: scale(1.2);
  }
`;

export const CardContent = styled.div`
  margin: 10px 0;

  h4 {
    font-size: 20px;
    font-weight: 600;
  }

  p {
    //   border:2px solid red;
    padding: 10px 0;
  }

  .rating {
    background-color: rgb(18, 218, 151);
    padding: 10px;
    border-radius: 5px;
    margin: 90px 0;
  }

  .price {
    color: #a82c48;
    font-size: 2rem;
  }

  .price del {
    color: #ccc;
  }
`;

export const OrderButton = styled.button`
  background-color: #a82c48;
  padding: 10px 20px;
  color: white;
  display: block;
  margin-top: 10px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease, border 0.3s ease;

  &:hover {
    background-color: white;
    color: #a82c48;
    border: 2px solid #a82c48;
  }
`;
