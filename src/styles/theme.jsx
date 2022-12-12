import { createTheme } from '@mui/material/styles';
import './index.css';

export const theme = createTheme({
  typography: {
    body: {
      fontFamily: ['IowanOldStyleRegular', 'Times News Roman', 'serif'].join(','),
      fontSize: '1rem'
    }
  }
});

export const colors = {
  backround: "#FFFFFFF3",
  title: '#CF2A29',
  subtitle: '#F9D97A',
  subsubtitle: '#B72A2B',
  border: '#CF2A29',
  anotation: '#FFFFFF',
  transparent: '#FFFFFF00',
  modalBackground: '#F5F5F5',
  modalBackdroop: '#000000DD',
  tableBorder: '#B72A2B',
  tableLine: {
    odd: '#FFFFFF00',
    even: '#DFD7D4'
  },
  reference: '#833421'
};

export const spaces = {
  standard: 0.5 // rem
}

export const multiplicatorFactor = {
  itemIcon: 95
}

export const fonts = {
  family: {
    title: ['Tormenta20', 'Times News Roman', 'serif'].join(','),
    subtitle: ['IowanOldStyleBold', 'Times News Roman', 'serif'].join(','),
    text: {
      normal: ['IowanOldStyleRegular', 'Times News Roman', 'serif'].join(','),
      italic: ['IowanOldStyleItalic', 'Times News Roman', 'serif'].join(','),
    },
    table: ['SourceSansPro', 'Arial', 'san-serif'].join(','),
  },
  size: {
    title: '2.6rem',
    subtitle: '1.8rem',
    anotation: '1.3rem',
    item: '1.1rem',
    reference: '0.9rem',
    footer: '1rem',
    footerCredits: '0.8rem',
    text: {
      normal: '1rem',
      italic: '1.1rem'
    },
    dialog: {
      normal: '1rem',
      italic: '1.1rem'
    },
    table: {
      normal: '1rem'
    }
  }
};