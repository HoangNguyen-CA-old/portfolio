import React from 'react';
import styled from 'styled-components';

const InputEl = styled.input`
  border: 1.5px solid #bbb;
  display: block;
  border-radius: 3px;

  width: 100%;

  font-size: 1.1rem;
  padding: 0.5em 0.5em;
  outline: none;
  &:focus {
    border: 1.5px solid ${({ theme }) => theme.colors.darkLight};
  }
`;

const TextArea = styled.textarea`
  border: 1.5px solid #bbb;
  display: block;
  border-radius: 3px;
  height: 15em;

  font-size: 1.1rem;
  padding: 0.5em 0.5em;
  outline: none;
  width: 100%;

  resize: none;

  font-family: ${({ theme }) => theme.mainFont};
  &:focus {
    border: 1.5px solid ${({ theme }) => theme.colors.darkLight};
  }
`;

const Label = styled.label`
  font-size: 1.2rem;
  display: block;
  text-transform: capitalize;
  margin-bottom: 0.3em;
  color: ${({ theme }) => theme.colors.dark};
`;

const Container = styled.div`
  margin: 0.5em 0;
`;

const Input = (props) => {
  let inputEl = null;
  switch (props.type) {
    case 'input':
      inputEl = (
        <InputEl
          {...props.config}
          value={props.value}
          onChange={props.onChange}
        >
          {props.children}
        </InputEl>
      );
      break;

    case 'textarea':
      inputEl = (
        <TextArea
          {...props.config}
          value={props.value}
          onChange={props.onChange}
        >
          {props.children}
        </TextArea>
      );
      break;
    default:
      inputEl = (
        <InputEl
          {...props.config}
          value={props.value}
          onChange={props.onChange}
        >
          {props.children}
        </InputEl>
      );
      break;
  }
  return (
    <Container>
      <Label>{props.label}:</Label>
      {inputEl}
    </Container>
  );
};

export default Input;
