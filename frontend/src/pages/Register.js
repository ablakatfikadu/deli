import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Api from "../components/Api";

const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 600px;
  background-color: #f5f5f5;
  margin: 80px auto;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const RegisterTitle = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 2rem;
  text-align: center;
`;

const FormGroup = styled.div`
  margin-bottom: 1.2rem;
`;

const Label = styled.label`
  display: block;
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 450px;
  padding: 0.8rem 1rem;
  font-size: 1.2rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const SubmitButton = styled.button`
  display: block;
  width: 100%;
  padding: 0.8rem 1rem;
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const LoginLink = styled(Link)`
  display: block;
  font-size: 1.2rem;
  text-align: center;
  margin-top: 1.5rem;
  color: #007bff;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #0056b3;
  }
`;

export default function RegisterPage() {
  // Use the Api component to create an instance of the HTTP client
  const http = Api();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Send a POST request to the '/createpost' endpoint with the title and description
    http
      .post("/register", { firstName, lastName, phoneNumber, email, password })
      .then((res) => {
        console.log("Request payload:", { firstName, lastName, phoneNumber, email, password });
        console.log("Response:", res.data);
      })
      .catch((error) => {
        console.error("Error creating post:", error);
        console.error("Request payload:", { firstName, lastName, phoneNumber, email, password });

        // Log more detailed error information if available
        if (error.response) {
          console.error("Response data:", error.response.data);
          console.error("Response status:", error.response.status);
          console.error("Response headers:", error.response.headers);
        } else if (error.request) {
          console.error("No response received:", error.request);
        } else {
          console.error("Error:", error.message);
        }
      });
  };

  return (
    <RegisterContainer>
      <RegisterTitle>CREATE AN ACCOUNT</RegisterTitle>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="firstName">First Name</Label>
          <Input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="phoneNumber">Phone Number</Label>
          <Input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </FormGroup>
        <SubmitButton type="submit">Register</SubmitButton>
      </form>
      <LoginLink to="/login">Already have an account? Login</LoginLink>
    </RegisterContainer>
  );
}