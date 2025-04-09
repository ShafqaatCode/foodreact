import styled from 'styled-components';

export const FaqSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 40px auto;
`;

export const FaqContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;
    width: 85%;
    margin: 40px auto;

    @media (max-width: 768px) {
        flex-direction: column;
        // align-items: center;
        border:2px solid red;
        width: 100%;
        margin: 0;
        paddin:0;
    }

`;

export const QBox = styled.div`
    width: 45%;
    margin-bottom: 10px;

    @media (max-width: 768px) {
        width: 90%;
        margin: 0;
        padding: 0;
    }
`;

export const QuestionTitle = styled.h2`
    color: #a82c38;
    font-size: 20px;
    text-align: start;
    font-weight: 600;
`;

export const QuestionText = styled.p`
    font-size: 16px;
    padding: 10px;
    font-weight: 500;
`;

export const Title = styled.h1`
    color: #1f6dad;
    margin: 80px 0;
    font-size: 2.2rem;
    font-weight: 800;

    span {
        color: #a82c38;
    }
`;
