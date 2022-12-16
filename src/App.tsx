import React from 'react';
import { Stack } from '@mui/material';
import Header from './components/Header';
import Footer from './components/Footer';
import Section from './components/Section';
import { spaces } from './styles/theme';
import { SectionData } from './interfaces/Interfaces';
import { Analytics } from '@vercel/analytics/react';

const bgImg = require('./images/background.jpg');
const data: SectionData[] = require('./data/data.json');

const styles = {
  background: {
    padding: `${spaces.standard * 2}rem`,
    backgroundImage: `url(${bgImg})`,
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
  }
}

function App() {
  return (
    <>
      <Stack style={styles.background} spacing={`${spaces.standard * 2}rem`}>
        <Header />
        {data.map(section => <Section section={section} myKey={`${section.id}`} key={`${section.id}`} />)}
        <Footer />
      </Stack>
      <Analytics />
    </>
  );
}

export default App;
