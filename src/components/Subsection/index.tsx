import React from 'react';
import { Typography, Stack, Box, Grid } from '@mui/material';
import { SubsectionData } from '../../interfaces/Interfaces';
import { fonts, spaces } from '../../styles/theme';
import Item from '../Item';

const subsectionStyle = {
  description: {
    text: {
      fontFamily: fonts.family.text.italic,
      fontSize: fonts.size.text.italic,
      lineHeight: 1.2
    },
    container: {
      padding: `0 ${spaces.standard / 2}rem ${spaces.standard / 2}rem ${spaces.standard / 2}rem`
    }
  }
}

interface SubsectionProps {
  subsection: SubsectionData;
  myKey:string;
};

function Subsection(props: SubsectionProps ) {
  return (
    <Stack>
      <Box style={subsectionStyle.description.container}>
        <Typography style={subsectionStyle.description.text}>
          {props.subsection.description}
        </Typography>
      </Box>
      <Box>
        <Grid container columns={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }}>
          {props.subsection.items.map((item, index) => (
              <Grid xs={1} key={index} item={true}>
                <Item 
                  item={item} 
                  subsection={props.subsection.title}
                  myKey={props.myKey + `${item.id}`}  
                  key={props.myKey + `${item.id}`} 
                />
              </Grid>
          ))}
        </Grid>
      </Box>
    </Stack>
  );
}

export default Subsection;