import React from 'react';
import {
  FaqSection,
  FaqContent,
  QBox,
  QuestionTitle,
  QuestionText,
  Title
} from './Faqs.styled';

const Faq = () => {
  const faqData = [
    {
      question: 'How do I Make a regular Table Booking?',
            answer: "It's a piece of cake - once you've found your preferred restaurant simply select your Date and Time required, and then so long as we have an email address and phone number your booking is instantly confirmed the minute you hit 'Book'."
    },
    {
     question: 'How do I Make a regular Table Booking?',
            answer: "It's a piece of cake - once you've found your preferred restaurant simply select your Date and Time required, and then so long as we have an email address and phone number your booking is instantly confirmed the minute you hit 'Book'."
    },
    {
     question: 'How do I Make a regular Table Booking?',
            answer: "It's a piece of cake - once you've found your preferred restaurant simply select your Date and Time required, and then so long as we have an email address and phone number your booking is instantly confirmed the minute you hit 'Book'."
    },
    {
    question: 'How do I Make a regular Table Booking?',
            answer: "It's a piece of cake - once you've found your preferred restaurant simply select your Date and Time required, and then so long as we have an email address and phone number your booking is instantly confirmed the minute you hit 'Book'."
    },
  ];

  return (
    <FaqSection id ="faq">
      <Title>
        Frequently Asked <span>Questions</span>
      </Title>

      <FaqContent>
        {faqData.map((faq, index) => (
          <QBox key={index}>
            <QuestionTitle>{faq.question}</QuestionTitle>
            <QuestionText>{faq.answer}</QuestionText>
          </QBox>
        ))}
      </FaqContent>
    </FaqSection>
  );
};

export default Faq;
