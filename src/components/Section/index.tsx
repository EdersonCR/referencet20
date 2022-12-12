import React, { useState } from 'react';
import { Typography, Box, Stack, IconButton } from '@mui/material';
import Subsection from '../Subsection';
import { SectionData } from '../../interfaces/Interfaces';
import { colors, fonts, spaces } from '../../styles/theme';
import Collapse from '@mui/material/Collapse';
import { Remove, Add } from '@mui/icons-material';

const sectionStyle = {
  title: {
    container: {
      padding: `0 ${spaces.standard}rem 0 ${spaces.standard}rem`,
      backgroundColor: colors.border,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      border: `1px solid ${colors.border}`
    },
    text: {
      fontFamily: fonts.family.title,
      color: colors.subtitle,
      fontSize: fonts.size.subtitle,
      margin: `${- spaces.standard / 2}rem 0 ${- spaces.standard / 2}rem 0`,
    },
    button: {
      color: colors.anotation,
    }
  },
  body: {
    container: {
      backgroundColor: colors.backround,
      padding: `${spaces.standard}rem ${spaces.standard / 2}rem`
    }
  }
}

interface SectionProps {
  section: SectionData; 
  myKey: string;
}

function Section(props: SectionProps) {

  const [checked, setChecked] = useState(true);

  const handleChange = () => setChecked((prev) => !prev);

  return (
    <Stack>
      <Box style={sectionStyle.title.container}>
        <Typography style={sectionStyle.title.text}>
          {props.section.title}
        </Typography>
        <IconButton onClick={handleChange} disableRipple={true}>
          {checked ? (<Remove style={sectionStyle.title.button}/>) : (<Add style={sectionStyle.title.button}/>)}
        </IconButton>
      </Box>
      <Collapse in={checked}>
        <Stack spacing={2} style={sectionStyle.body.container}>
          {props.section.subsections.map(subsection => 
            <Subsection 
              subsection={subsection}
              myKey={props.myKey + `${subsection.id}`} 
              key={props.myKey + `${subsection.id}`} 
            />)
          }
        </Stack>
      </Collapse>
    </Stack>
  );
}

export default Section;