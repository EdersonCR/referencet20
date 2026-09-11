import { Typography, Box } from '@mui/material';
import { colors, fonts, spaces } from '../../styles/theme';

const headerStyle = {
  title: {
    text: {
      fontFamily: fonts.family.title,
      color: colors.title,
      fontSize: fonts.size.title,
      margin: `${- spaces.standard / 2 }rem 0 ${- spaces.standard }rem 0`,
    }
  },
  body: {
    text: {
      fontFamily: fonts.family.text.normal,
      fontSize: fonts.size.text.normal
    },
    container: {
      padding: `0 ${spaces.standard}rem ${spaces.standard}rem ${spaces.standard}rem`,
      backgroundColor: colors.backround
    }
  }
}

function Header() {
 return (
  <Box style={headerStyle.body.container}>
    <Typography style={headerStyle.title.text}>
      Referência Rápida T20
    </Typography>
    <Typography style={headerStyle.body.text}>
      Este guia reúne as regras básicas de Tormenta20 em formato de consulta rápida e objetiva, para que jogadores e mestres relembrem o essencial durante a sessão.
    </Typography>
  </Box>
 ); 
}

export default Header;
