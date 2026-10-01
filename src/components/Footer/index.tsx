import { useMemo } from 'react';
import { Typography, Grid } from '@mui/material';
import { fonts, spaces } from '../../styles/theme';
import { ThemeColors } from '../../themes/types';
import { useThemeConfig } from '../../themes/ThemeContext';
import Github from '../Github';
import Link from '../Link';

const getFooterStyle = (colors: ThemeColors) => ({
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
  }
});

function Footer() {
  const { colors, links } = useThemeConfig();
  const footerStyle = useMemo(() => getFooterStyle(colors), [colors]);

  return (
    <Grid container columns={{ xs: 3, sm: 6, md: 12, lg: 12, xl: 12 }} style={footerStyle.container}>
      <Grid size={{ xs: 3, md: 2 }}>
        <Typography style={{ ...footerStyle.primeryBody.text, textAlign: 'center' }}>
          Site desenvolvido por:<br/><Github name={links.developer.creator} repo={links.repo.name}/>
        </Typography>
      </Grid>
      <Grid size={{ xs: 3, md: 3 }}>
        <Typography style={{ ...footerStyle.primeryBody.text, textAlign: 'center' }}>
          <Link link={links.t20}/> pertence a <Link link={links.jambo}/>. Todos os direitos são reservados à editora.
        </Typography>
      </Grid>
      <Grid size={{ xs: 3, md: 3 }}>
        <Typography style={{ ...footerStyle.secundaryBody.text, textAlign: 'center' }}>
          Sugestões, melhorias e erros, envie um e-mail para <Link link={links.mail}/>.
        </Typography>
      </Grid>
      <Grid size={{ xs: 3, md: 3 }}>
        <Typography style={{ ...footerStyle.secundaryBody.text, textAlign: 'center' }}>
          Ícones feitos por {links.icons.creators.slice(0, -1).join(', ')} e {links.icons.creators[links.icons.creators.length - 1]}. Disponíveis em <Link link={links.icons}/>.
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Footer;
