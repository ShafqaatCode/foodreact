import React from "react";
import ContactImg from "../../assets/contact.jpg";
import { StyledContact } from "./Contact.styled";

const Contact = () => {
  return (
    <StyledContact id="contact">
      <h2 className="text-center text-3xl my-[40px] text-[#1f6dad] font-bold">Contact <span className="text-[#8c233b]">Us</span></h2>
      <div className="contact-container">
        <div className="left-img">
          <img src={ContactImg} alt="Contact" />
        </div>
        <div className="right-form">
          <form>
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
