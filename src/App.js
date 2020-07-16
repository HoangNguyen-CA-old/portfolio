import React from 'react';
import styled from 'styled-components';

import Navbar from './containers/Navbar/Navbar';
import Cover from './containers/Cover/Cover';
import Projects from './containers/Projects/Projects';
import Contact from './containers/Contact/Contact';
import Skills from './containers/Skills/Skills';

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
      <Contact />
    </Container>
  );
}

export default App;
