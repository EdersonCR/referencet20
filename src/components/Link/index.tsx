import React from 'react';
import { Link as Hyperlink } from '@mui/material';
import { colors } from '../../styles/theme';

const linkStyle = {
  textDecoration: 'none',
  color: colors.subtitle
}

interface LinkProps {
  link: {
    id: number;
    lable: string, 
    url: string
  },
  myKey?: string;
};

function Link(props: LinkProps) {
  return (
    <Hyperlink 
      href={props.link.url} 
      style={linkStyle} 
      target='_blank' 
      key={`${props.myKey ? props.myKey : ''}${props.link.id}`}
    >
      {props.link.lable}
    </Hyperlink>
  );
}

export default Link;