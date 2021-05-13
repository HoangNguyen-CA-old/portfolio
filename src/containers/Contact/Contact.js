import React, { Component } from 'react';
import styled from 'styled-components';
import firebase from '../../config/fbConfig';
import { withRouter } from 'react-router-dom';

import FormInputs from '../../components/Forms/FormInputs';
import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';

import { Icon } from '@iconify/react';
import githubIcon from '@iconify/icons-logos/github-icon';
import linkedinIcon from '@iconify/icons-logos/linkedin';

const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3em 1em;

  background-color: ${({ theme }) => theme.colors.primaryDark};
`;

const Header = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.header};
  text-transform: uppercase;
  margin-bottom: 0.5em;
  color: ${({ theme }) => theme.colors.light};
  text-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);
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

  border: none;
`;

const BottomRow = styled.div`
  display: flex;
  align-items: center;

  justify-content: center;
  margin: 1em auto 0 auto;
  height: 3.5em;
  width: 3.5em;
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
    loading: false,
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
    if (
      this.state.controls.email.value === '' ||
      this.state.controls.message.value === ''
    ) {
      return;
    }
    this.setState({ loading: true });

    firebase
      .firestore()
      .collection('submissions')
      .add({
        name: this.state.controls.name.value,
        email: this.state.controls.email.value,
        message: this.state.controls.message.value,
        createdAt: new Date(),
      })
      .then(() => {
        this.setState({ loading: false });
        this.props.history.push('/formSuccess');
      })
      .catch((err) => this.setState({ loading: false }));
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
            {this.state.loading ? (
              <Spinner />
            ) : (
              <StyledButton type='submit'>Send</StyledButton>
            )}
          </BottomRow>
        </Form>
      </Container>
    );
  }
}

export default withRouter(Contact);
