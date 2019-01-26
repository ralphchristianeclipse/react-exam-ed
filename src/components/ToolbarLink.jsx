import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

const ToolbarLink = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  text-transform: uppercase;
  margin-left: 10px;
  align-self: center;
  padding: 0px 0.5rem 0.25rem;
  border-right: 0.25rem solid #0f2027;
  border-bottom: 0.25rem solid #0f2027;
  transition: 0.5s ease-in-out;
  border-radius: 5px;

  &.active {
    border-left: 0.25rem solid #2c5364;
    border-top: 0.25rem solid #2c5364;
    border-right: 0;
    border-bottom: 0;
  }
`;

export default ToolbarLink;
