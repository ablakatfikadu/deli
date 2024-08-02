import React from 'react';
import styled from 'styled-components';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1800px;
  height: 700px;
  background-color: #f5f5f5;
`;

const ContactWrapper = styled.div`
  display: flex;
  width: 80%;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ContactInfoContainer = styled.div`
  flex: 1;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ContactHeader = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 2rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  color: #333;
  transition: color 0.3s ease;

  &:hover {
    color: #007bff;
  }

  svg {
    margin-right: 1rem;
    font-size: 1.5rem;
  }
`;

const ContactFormContainer = styled.div`
  flex: 1;
  padding: 2rem;
  background-color: #fff;
  border-radius: 0 8px 8px 0;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;

  input,
  textarea {
    margin-bottom: 1rem;
    padding: 0.8rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
  }

  button {
    padding: 0.8rem 1.6rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

export default function Contact() {
  return (
    <ContactContainer>
      <ContactWrapper>
        <ContactInfoContainer>
          <ContactHeader>Contact Us</ContactHeader>
          <ContactInfo>
            <ContactItem>
              <FaPhoneAlt />
              <a href="tel:+251123456789">+251 911-224-397</a>
            </ContactItem>
            <ContactItem>
              <FaEnvelope />
              <a href="mailto:info@diligencetechnologies.com">
                info@diligencetechnologies.com
              </a>
            </ContactItem>
            <ContactItem>
              <FaMapMarkerAlt />
              <span>
                Addis Ababa, Ethiopia
                <br />
                Bole Subcity, Woreda 03, House No. 1234
              </span>
            </ContactItem>
          </ContactInfo>
        </ContactInfoContainer>

        <ContactFormContainer>
          <ContactForm>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Message"></textarea>
            <button type="submit">Send</button>
          </ContactForm>
        </ContactFormContainer>
      </ContactWrapper>
    </ContactContainer>
  );
}