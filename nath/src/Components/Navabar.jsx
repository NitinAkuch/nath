import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const LinkContainer = styled.div`
  height: 80px;
  width: 100%;
  background-color: skyblue;
`;
const Navabar = () => {
  return (
    <>
      <LinkContainer>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
      </LinkContainer>
    </>
  );
};

export default Navabar;
