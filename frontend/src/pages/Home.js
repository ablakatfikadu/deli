import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const HomeTitle = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 2rem;
  text-align: center;
`;

const HomeSubtitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 3rem;
  text-align: center;
`;

const ServiceSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  width: 80%;
  max-width: 1200px;
`;

const ServiceCard = styled.div`
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
`;

const ServiceTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1rem;
`;

const ServiceDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const ServiceLink = styled(Link)`
  font-size: 1.2rem;
  color: #007bff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export default function Home() {
  return (
    <HomeContainer>
      <HomeTitle>WELCOME TO DILIGENCE TECHNOLOGIES</HomeTitle>
      <HomeSubtitle>DETERMINED TO MAKE A DIFFERENCE!</HomeSubtitle>
      <ServiceSection>
        <ServiceCard>
          <ServiceTitle>IT Infrastructure Service</ServiceTitle>
          <ServiceDescription>Explore our full range of IT infrastructure services, specializing in data center solutions.</ServiceDescription>
          <ServiceLink to="/services/it-infrastructure">Learn More</ServiceLink>
        </ServiceCard>
        <ServiceCard>
          <ServiceTitle>Managed Service</ServiceTitle>
          <ServiceDescription>Explore our comprehensive managed services for seamless IT operations and optimal performance.</ServiceDescription>
          <ServiceLink to="/services/managed-service">Learn More</ServiceLink>
        </ServiceCard>
        <ServiceCard>
          <ServiceTitle>Telecom</ServiceTitle>
          <ServiceDescription>Discover our comprehensive telecom infrastructure services, tailored to meet all communication needs.</ServiceDescription>
          <ServiceLink to="/services/telecom">Learn More</ServiceLink>
        </ServiceCard>
        <ServiceCard>
          <ServiceTitle>Software Service</ServiceTitle>
          <ServiceDescription>Discover our comprehensive telecom infrastructure services, tailored to meet all communication needs.</ServiceDescription>
          <ServiceLink to="/services/software">Learn More</ServiceLink>
        </ServiceCard>
        <ServiceCard>
          <ServiceTitle>IT Consulting</ServiceTitle>
          <ServiceDescription>Navigate your IT challenges effortlessly with our expert consulting services.</ServiceDescription>
          <ServiceLink to="/services/it-consulting">Learn More</ServiceLink>
        </ServiceCard>
        <ServiceCard>
          <ServiceTitle>Mobility</ServiceTitle>
          <ServiceDescription>Stay ahead in the digital era with our mobility services.</ServiceDescription>
          <ServiceLink to="/services/mobility">Learn More</ServiceLink>
        </ServiceCard>
      </ServiceSection>
    </HomeContainer>
  );
}