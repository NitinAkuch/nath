import React from "react";
import styled from "styled-components";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { dummyData } from "../data";
import InputField from "../Components/InputField";

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
const DropdownCountries = styled.div`
  margin: 10px;
  color: #05628a;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Select = styled.select`
  margin: 5px;
  padding: 10px;
`;
const ButtonWrapper = styled.button`
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

const Register_one = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Title>Register</Title>

          {dummyData.map((field) => (
            <InputField
              key={field.id}
              type={field.type}
              placeholder={field.placeholders}
              label={field.label}
              maxlength={field.maxlength}
              default={field.default}
            />
          ))}
          <DropdownCountries>
            <label for="countries">Choose Your Country:</label>
            <Select id="countries">
              <option>India</option>
              <option>USA</option>
              <option>UK</option>
              <option>China</option>
              <option>France</option>
            </Select>
          </DropdownCountries>

          <ButtonWrapper>
            <Stack spacing={2} direction="row">
              <Button variant="contained">Back</Button>
              <Button variant="contained" color="success">
                Submit
              </Button>
            </Stack>
          </ButtonWrapper>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Register_one;
