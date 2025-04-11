import styled from 'styled-components';

export const StyledContact = styled.section`
  padding: 60px 20px;
  background-color: #f9f9f9;

  .contact-container {
    display: flex;
    justify-content: center;
    align-items: flex-center;
    flex-wrap: wrap;
    max-width: 1200px;
    margin: 0 auto;
    gap: 40px;
  }

  .left-img {
    flex: 1;
    min-width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
      max-width: 500px;
      border-radius: 16px;
    }
  }

  .right-form {
    flex: 1;
    min-width: 300px;

    form {
      display: flex;
      flex-direction: column;
      gap: 6px;
      width: 100%;

      h2 {
        color: #1f6dad;
        font-size: 28px;
        margin-bottom: 10px;
        font-weight: 700;
        // border: 2px solid #1f6dad;
        // position:absolute;
        textalighn: center;
      }

      label {
        font-weight: 500;
        font-size: 18px;
        color: #333;
      }

      input,
      textarea {
        border: none;
            padding: 10px;
            background-color: #fffafa;
            width: 100%;
            outline: none;
      }

      textarea {
        min-height: 120px;
        resize: vertical;
      }

      button {
        padding: 12px;
        background-color: #8c233b;
        color: white;
        border: none;
        border-radius: 6px;
        font-size: 16px;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
        //   background-color: #155a99;
        opacity: 0.8;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    .contact-container {
      flex-direction: column;
      align-items: center;
    }

    .left-img,
    .right-form {
      max-width: 100%;
    }

    .left-img img {
      max-width: 100%;
    }
  }
`;
