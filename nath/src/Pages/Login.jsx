import React from "react";
import styled from "styled-components";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 40px;
  background-color: skyblue;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 25%;
  height: auto;
  padding: 25px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;
const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #1276ce;
`;
const Input = styled.input`
  margin: 10px;
  padding: 10px;

  background-color: #abcdda;
  border: 2px solid skyblue;
  border-radius: 5px;

  &::placeholder {
    color: #05628a;
    font-weight: 500;
    &:hover {
      color: white;
    }
  }

  &:hover {
    background-color: #26a8d4;
    &::placeholder {
      color: white;
    }
  }
`;

const LinkContainer = styled.div`
  margin: 15px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Login = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Title>Login</Title>
          <Input placeholder="Username"></Input>
          <Input placeholder="Password" $marginBottom="25px"></Input>
          <Stack spacing={2} direction="row">
            <Button variant="contained">Back</Button>
            <Button variant="contained" color="success">
              Login
            </Button>
          </Stack>
          <LinkContainer>
            <Link href="#">New User?</Link>
            <Link href="#">Forgot Password?</Link>
          </LinkContainer>
        </Wrapper>
      </Container>
    </>
  );
};

export default Login;
