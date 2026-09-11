import { Link } from '@mui/material';
import { colors, spaces } from '../../styles/theme';
import GitHubIcon from '@mui/icons-material/GitHub';

const githubStyle = {
  icon: {
    marginBottom: `-${spaces.standard / 2}rem`
  },
  link: {
    textDecoration: 'none',
    color: colors.link
  }
  
}

function Github(props: { name: string, repo: string }) {
  return (
    <Link href={`https://github.com/${props.name}${props.repo ? `/${props.repo}` : ''}`} style={githubStyle.link} target='_blank'>
      <GitHubIcon fontSize='small' style={githubStyle.icon}/>{props.name}
    </Link>
  );
}

export default Github;