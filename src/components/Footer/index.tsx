import React from 'react';
import { Typography, Grid } from '@mui/material';
import { colors, fonts, spaces } from '../../styles/theme';
import Github from '../Github';
import Link from '../Link';

const links = require('../../data/links.json');

const footerStyle = {
  container: {
    backgroundColor: colors.title,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  primeryBody: {
    text: {
      fontFamily: fonts.family.table,
      fontSize: fonts.size.footer,
      color: colors.anotation,
      padding: `${spaces.standard}rem`,
    }
  },
  secundaryBody: {
    text: {
      fontFamily: fonts.family.table,
      fontSize: fonts.size.footerCredits,
      color: colors.anotation,
      padding: `${spaces.standard}rem`,
    },
  },
  link: {
    textDecoration: 'none',
    color: colors.subtitle
  }
}

function Footer() {
  return (
    <Grid container columns={{ xs: 3, sm: 6, md: 12, lg: 12, xl: 12 }} style={footerStyle.container}>
      <Grid md={2} xs={3} item={true}>
        <Typography style={footerStyle.primeryBody.text} textAlign='center'>
          Site desenvolvido por:<br/><Github name={links.developer.creator}/>
        </Typography>
      </Grid>
      <Grid md={3} xs={3} item={true}>
        <Typography style={footerStyle.primeryBody.text} textAlign='center'>
          <Link link={links.t20}/> pertence a <Link link={links.jambo}/>. Todos os direitos são reservados à editora.
        </Typography>
      </Grid>
      <Grid md={3} xs={3} item={true}>
        <Typography style={footerStyle.secundaryBody.text} textAlign='center'>
          Sugestões, melhorias e erros, envie um e-mail para <Link link={links.mail}/>.
        </Typography>
      </Grid>
      <Grid md={3} xs={3} item={true}>
        <Typography style={footerStyle.secundaryBody.text} textAlign='center'>
          Ícones feitos por {links.icons.creators.slice(0,-1).join(', ').concat(' e ', links.icons.creators.slice(-1))}. Disponíveis em <Link link={links.icons}/>.
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Footer;