import React from "react";
import styled from "styled-components";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

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
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  margin: 10px;
  padding: 10px;
  color: #c3e7f5;
  background-color: #abcdda;
  height: 15px;
  border: 2px solid skyblue;
  border-radius: 5px;
  /* ::placeholder {
    color: #09a1dd;
  } */
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

const ButtonWrapper = styled.button`
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>REGISTER</Title>
        <Form method="post">
          <Input placeholder="Full Name" type="text"></Input>
          <Input placeholder="E-mail" type="email"></Input>
          <Input placeholder="Address"></Input>
          <Input placeholder="City/Town" type="text"></Input>
          <Input placeholder="Country" type="text"></Input>
          <ButtonWrapper>
            <Stack spacing={2} direction="row">
              <Button variant="contained">Back</Button>
              <Button variant="contained" color="success">
                Submit
              </Button>
            </Stack>
          </ButtonWrapper>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
