import React, { Component } from 'react';
import styled from 'styled-components';
import firebase from '../../config/fbConfig';

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
  padding: 3em 1em;

  background-color: ${({ theme }) => theme.colors.primary};
`;

const Header = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.header};
  text-transform: uppercase;
  margin-bottom: 0.5em;
  color: ${({ theme }) => theme.colors.light};
`;

const Form = styled.form`
  width: 95%;
  max-width: 600px;
  padding: 1em 1.5em;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.colors.light};
  box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.2);
`;

const StyledButton = styled(Button)`
  font-size: 1.2rem;
  padding: 0.6em 2.5em;
  color: ${({ theme }) => theme.colors.light};
  background-color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.5em;

  border: none;
`;

const BottomRow = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2em;
`;

const TopRow = styled.div`
  margin: 1em;
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
      name: {
        type: 'input',
        config: {},
        value: '',
      },
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
    firebase
      .firestore()
      .collection('submissions')
      .add({
        name: this.state.controls.name.value,
        email: this.state.controls.email.value,
        message: this.state.controls.message.value,
        createdAt: new Date(),
      })
      .then(() => null)
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <Container id='contact'>
        <Header>Get in touch</Header>

        <Form onSubmit={this.handleSubmit}>
          <TopRow>
            <IconWrapper href='https://github.com/HoangNguyen-CA/'>
              <StyledIcon icon={githubIcon}></StyledIcon>
            </IconWrapper>
            <IconWrapper href='https://www.linkedin.com/in/hoang-nguyen-a36636196/  '>
              <StyledIcon icon={linkedinIcon}></StyledIcon>
            </IconWrapper>
          </TopRow>
          <FormInputs
            controls={this.state.controls}
            onChange={this.handleControlChange}
          />
          <BottomRow>
            <StyledButton type='submit'>Send</StyledButton>
          </BottomRow>
        </Form>
      </Container>
    );
  }
}

export default Contact;
