import React from 'react';
import styled from 'styled-components';

import Navbar from './containers/Navbar/Navbar';
import Cover from './containers/Cover/Cover';
import Projects from './containers/Projects/Projects';
import Contact from './containers/Contact/Contact';
import Skills from './containers/Skills/Skills';
import Footer from './containers/Footer/Footer';

import Divider from './components/UI/Divider/Divider';

const Container = styled.div`
  overflow: hidden;
`;

function App() {
  return (
    <Container>
      <Navbar />
      <Cover />
      <Projects />
      <Skills />
      <Divider></Divider>
      <Contact />
      <Footer />
    </Container>
  );
}

export default App;
