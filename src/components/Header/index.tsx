import { useMemo } from 'react';
import { Typography, Box } from '@mui/material';
import { fonts, spaces } from '../../styles/theme';
import { ThemeColors } from '../../themes/types';
import { useThemeConfig } from '../../themes/ThemeContext';

const getHeaderStyle = (colors: ThemeColors) => ({
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
});

function Header() {
  const { colors, header } = useThemeConfig();
  const headerStyle = useMemo(() => getHeaderStyle(colors), [colors]);

  return (
    <Box style={headerStyle.body.container}>
      <Typography style={headerStyle.title.text}>
        {header.title}
      </Typography>
      <Typography style={headerStyle.body.text}>
        {header.description}
      </Typography>
    </Box>
  );
}

export default Header;
