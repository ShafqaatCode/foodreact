import React from 'react';
import ContactImg from '../../assets/contact.jpg';
import { StyledContact } from './Contact.styled';


const Contact = () => {
  return (
    <StyledContact>
      <div className="contact-container">
        <div className="left-img">
          <img src={ContactImg} alt="Contact" />
        </div>
        <div className="right-form">
          <form>
            <h2>Contact Us</h2>
            <label htmlFor="name">Name</label>
            <input type="text" placeholder="Enter Your Name" />

            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Enter Your Email" />

            <label htmlFor="subject">Subject</label>
            <input type="text" placeholder="Enter Subject" />

            <label htmlFor="message">Message</label>
            <textarea placeholder="Write your message here"></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </StyledContact>
  );
};

export default Contact;
