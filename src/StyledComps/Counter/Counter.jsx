import React, { useState, useEffect } from "react";
import styled from "styled-components";

const CounterSection = styled.section`
  background-color: #a82c38;
  padding: 60px 20px;
  text-align: center;
  color: white;

  .counter-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    gap: 40px;
  }

  .counter-box {
    flex: 1 1 200px;
    display: flex;
    flex-direction: column;
  }

  .counter-box h2 {
    font-size: 36px;
    font-weight: bold;
  }

  .counter-box p {
    font-size: 1rem;
  }
`;

const Counter = () => {
  const counterData = [
    { count: 1700, text: "CUSTOMERS" },
    { count: 1500, text: "REVIEWS" },
    { count: 1500, text: "RATINGS" },
    { count: 5000, text: "ORDERS" },
  ];

  const [counts, setCounts] = useState(counterData.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prevCounts) =>
        prevCounts.map((current, index) => {
          const target = counterData[index].count;
          const increment = Math.ceil(target / 100);
          return current < target ? Math.min(current + increment, target) : current;
        })
      );
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <CounterSection>
      <div className="counter-container">
        {counterData.map((item, index) => (
          <div className="counter-box" key={index}>
            <h2>{counts[index]}+</h2>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </CounterSection>
  );
};

export default Counter;
