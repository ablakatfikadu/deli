import React, { useState } from 'react';
import styled from 'styled-components';
import Register from './Register';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 500px;
  background-color: #f5f5f5;
  margin: 0 auto;
  margin-top: 80px;
`;

const LoginBox = styled.div`
  width: 100%;
  padding: 40px;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const LoginTitle = styled.h1`
  font-size: 2.4rem;
  font-weight: bold;
  margin-bottom: 2rem;
  text-align: center;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem 1rem;
  font-size: 1.2rem;
  border: 1px solid #ccc;
  border-radius: 4px;
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
  &:hover {
    background-color: #0056b3;
  }
`;

const RegisterLink = styled(Link)`
  display: block;
  font-size: 1.2rem;
  text-align: center;
  margin-top: 1.5rem;
  color: blue; // Blue color
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #0056b3;
  }
`;

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const handleRegisterClick = () => {
    navigate('/register');
  };

  return (
    <LoginContainer>
      <LoginBox>
        <LoginTitle>Login</LoginTitle>
        <form onSubmit={handleSubmit}>
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
          <SubmitButton type="submit">Login</SubmitButton>
        </form>
        <RegisterLink className="nav-link active" aria-current="page" to="/register">
          Register here If you don't have an account
        </RegisterLink>
      </LoginBox>
    </LoginContainer>
  );
}