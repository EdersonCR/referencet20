import { Link } from '@mui/material';
import { spaces } from '../../styles/theme';
import { useThemeConfig } from '../../themes/ThemeContext';
import GitHubIcon from '@mui/icons-material/GitHub';

const githubStyle = {
  icon: {
    marginBottom: `-${spaces.standard / 2}rem`
  }
}

function Github(props: { name: string, repo: string }) {
  const { colors } = useThemeConfig();

  return (
    <Link
      href={`https://github.com/${props.name}${props.repo ? `/${props.repo}` : ''}`}
      style={{ textDecoration: 'none', color: colors.link }}
      target='_blank'
    >
      <GitHubIcon fontSize='small' style={githubStyle.icon}/>{props.name}
    </Link>
  );
}

export default Github;
