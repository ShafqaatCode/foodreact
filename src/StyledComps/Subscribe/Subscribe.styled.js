import styled from "styled-components";

export const StyledSubscribe = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 80px 0;
  text-transform: capitalize;

  .sub-content {
    width: 80%;
    text-align: center;

    h1 {
      font-size: 36px;
      font-weight: 700;
      color: #1f6dad;

      span {
        color: #a82c38;
      }
    }

    p {
      color: #333;
      margin: 10px 0;
    }

    .btn {
      margin-top: 20px;

      input {
        padding: 10px;
        border: 2px solid #ccc;
        border-radius: 4px;
        margin-right: 10px;
        outline: none;
      }

      button {
        padding: 10px 20px;
        background-color: #a82c48;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
          background-color: white;
          border: 2px solid #a82c48;
          color: #a82c38;
        }
      }
    }
  }
`;
