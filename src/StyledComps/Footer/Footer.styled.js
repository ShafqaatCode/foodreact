import styled from 'styled-components';

export const FooterSection = styled.section`
  background-color: #a82c38;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
`;

export const FooterLinks = styled.ul`
  display: flex;
  color: white;
  list-style: none;
  gap: 40px;
  margin-bottom: 20px;
`;

export const FooterLinkItem = styled.li`
  margin: 0;
`;

export const FooterLink = styled.a`
  color: white;
  font-weight: 600;
  text-decoration: none;
  padding: 10px;
  transition: color 0.3s ease;

  &:hover {
    color: #ffdb00; // bright yellow hover – stands out
  }
`;

export const FooterIcons = styled.div`
  display: flex;
  gap: 60px;
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const FooterIconImage = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;

  &:hover {
    transform: scale(1.1); 
  }
`;

export const FooterCopywrite = styled.div`
  color: white !important;
  text-align: center;
  margin-top: 20px;
  font-size: 1rem;

  p {
    margin: 5px 0;
  }
`;
