import React, { Component } from 'react';
import styled from 'styled-components';

import FormInputs from '../../components/Forms/FormInputs';
import Button from '../../components/UI/Button/Button';

import { Icon } from '@iconify/react';
import githubIcon from '@iconify/icons-logos/github-icon';
import linkedinIcon from '@iconify/icons-logos/linkedin';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3em;

  background-color: ${({ theme }) => theme.colors.light};
`;

const Header = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.header};
  text-transform: uppercase;
  margin-bottom: 0.5em;
`;

const Form = styled.form`
  width: 100%;
  max-width: 600px;
  padding: 1em;
`;

const StyledButton = styled(Button)`
  font-size: 1.2rem;
  padding: 0.6em 2em;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.light};
  border: none;
`;

const BottomRow = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2em;
`;

const TopRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledIcon = styled(Icon)`
  font-size: 1.7rem;
  filter: grayscale(100%);
`;

const IconWrapper = styled.a.attrs(() => {
  return {
    target: '_blank',
  };
})`
  outline: none;
  cursor: pointer;

  margin: 0 0.6em;

  &:hover * {
    filter: grayscale(0%);
  }
`;

class Contact extends Component {
  state = {
    controls: {
      email: {
        type: 'input',
        config: {},
        value: '',
      },
      message: {
        type: 'textarea',
        config: {},
        value: '',
      },
    },
  };

  handleControlChange = (event, controlName) => {
    console.log(event.target.value, this.state.controls);
    this.setState({
      controls: {
        ...this.state.controls,
        [controlName]: {
          ...this.state.controls[controlName],
          value: event.target.value,
        },
      },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submit');
  };

  render() {
    return (
      <Container id='contact'>
        <Header>Get in touch</Header>
        <TopRow>
          <IconWrapper href='https://github.com/HoangNguyen-CA/'>
            <StyledIcon icon={githubIcon}></StyledIcon>
          </IconWrapper>
          <IconWrapper href='https://www.linkedin.com/in/hoang-nguyen-a36636196/  '>
            <StyledIcon icon={linkedinIcon}></StyledIcon>
          </IconWrapper>
        </TopRow>
        <Form onSubmit={this.handleSubmit}>
          <FormInputs
            controls={this.state.controls}
            onChange={this.handleControlChange}
          />
          <BottomRow>
            <StyledButton type='submit'>Submit</StyledButton>
          </BottomRow>
        </Form>
      </Container>
    );
  }
}

export default Contact;
