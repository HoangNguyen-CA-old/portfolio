import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './containers/Navbar/Navbar';
import Cover from './containers/Cover/Cover';
import Projects from './containers/Projects/Projects';
import Contact from './containers/Contact/Contact';
import Skills from './containers/Skills/Skills';
import Footer from './containers/Footer/Footer';

import FormSuccess from './containers/FormSuccess/FormSuccess';

const Container = styled.div`
  overflow: hidden;
`;

function MainApp() {
  return (
    <>
      <Navbar></Navbar>
      <Cover></Cover>
      <Projects></Projects>
      <Skills></Skills>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

function App() {
  return (
    <Container>
      <Router>
        <Switch>
          <Route exact path='/formSuccess' component={FormSuccess}></Route>
          <Route path='/' component={MainApp}></Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
