import React from "react";
import styled from "styled-components";

const InputContainer = styled.div`
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
const InputLabel = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
`;
const InputField = ({ type, id, placeholder }) => {
  return (
    <div>
      <InputContainer>
        <InputLabel htmlFor={id}>{placeholder}</InputLabel>
        <Input type={type} id={id} placeholder={placeholder} />
      </InputContainer>
    </div>
  );
};

export default InputField;
