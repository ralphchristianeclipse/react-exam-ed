/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import styled from '@emotion/styled';
import { MarginAuto } from './Error';
import { NavLink } from 'react-router-dom';
const RouteNotFoundContainer = styled.div`
  display: flex;
  place-content: center;
  height: 100vh;
`;

const BackHomeButton = styled(NavLink)`
  text-decoration: none;
  color: #000;
  cursor: pointer;
  border: 1px solid #000;
  padding: 0.5rem;
  border-radius: 10px;
  transition: 0.3s ease-in-out;

  &:hover {
    background: #000a;
    color: #fff;
  }
`;

export const RouteNotFound = () => (
  <RouteNotFoundContainer>
    <MarginAuto style={{ textAlign: 'center' }}>
      <h1 style={{ marginBottom: '1.2rem' }}>4️⃣0️⃣4️⃣ Not Found 🙈</h1>
      <BackHomeButton to="/"> Get 🔙 🏠 </BackHomeButton>
    </MarginAuto>
  </RouteNotFoundContainer>
);
