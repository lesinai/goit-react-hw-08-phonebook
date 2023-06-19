import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const LinkNav = styled(NavLink)`
  margin-left: 20px;
  color: #b314ad;
  font-weight: 500;

  &.active {
    text-decoration: underline;
  }
  &:focus {
    color: white;
  }
  &:hover {
    color: white;
  }
`;

export const LinkAuth = styled(NavLink)`
  color: #e8156d;
  font-weight: 600;

  &.active {
    text-decoration: underline;
  }
  &:focus {
    color: white;
  }
  &:hover {
    color: white;
  }
`;
