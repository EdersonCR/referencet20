import { Link as Hyperlink } from '@mui/material';
import { useThemeConfig } from '../../themes/ThemeContext';

interface LinkProps {
  link: {
    id: number;
    lable: string, 
    url: string
  },
  myKey?: string;
};

function Link(props: LinkProps) {
  const { colors } = useThemeConfig();

  return (
    <Hyperlink 
      href={props.link.url} 
      style={{ textDecoration: 'none', color: colors.link }} 
      target='_blank' 
      key={`${props.myKey ? props.myKey : ''}${props.link.id}`}
    >
      {props.link.lable}
    </Hyperlink>
  );
}

export default Link;
