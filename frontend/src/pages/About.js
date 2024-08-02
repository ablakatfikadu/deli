import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px; // Reduced width
  height: 700px; // Reduced height
  padding: 2rem;
  background-color: #f5f5f5;
  margin: 0 auto; // Center the container
`;

const AboutHeader = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const AboutSection = styled.div`
  width: 100%;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  border-radius: 8px;
  margin-bottom: 2rem;
`;

const AboutTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const AboutText = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

export default function About() {
  return (
    <AboutContainer>
      <AboutHeader>About Diligence Technologies</AboutHeader>
      <AboutSection>
        <AboutTitle>Our Company</AboutTitle>
        <AboutText>
          Diligence Technologies is a leading ICT Solutions Provider based in
          Addis Ababa, Ethiopia. Founded in 2010, Diligence is made up of a team
          of IT engineers and management professionals with years of experience
          in providing robust and optimal IT solutions to all our clients.
        </AboutText>
        <AboutText>
          Diligence enhances the growth and profits of our customers by
          delivering quality ICT Solutions on schedule. We offer quality services
          in the area of information systems, management consulting, design,
          development, and customization of business software.
        </AboutText>
      </AboutSection>
    </AboutContainer>
  );
}