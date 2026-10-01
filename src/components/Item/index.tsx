import { useMemo, useState } from 'react';
import { Typography, Box, Card, CardContent, CardMedia } from '@mui/material';
import { fonts, multiplicatorFactor, spaces } from '../../styles/theme';
import { ThemeColors } from '../../themes/types';
import { useThemeConfig } from '../../themes/ThemeContext';
import { ItemData } from '../../interfaces/Interfaces';
import Detail from '../Detail';
import IconsItem from '../Iconstem';
import { getIconUrl } from '../../utils/iconMap';

const getItemStyle = (colors: ThemeColors) => ({
  text: {
    title: {
      fontFamily: fonts.family.text.normal,
      fontSize: fonts.size.item,
      fontWeight: 'bold',
      fontVariant: 'small-caps',
      color: colors.subsubtitle,
      lineHeight: 1.35
    },
    description: {
      fontFamily: fonts.family.text.italic,
      fontSize: fonts.size.text.italic,
      lineHeight: 1.2
    }
  },
  container: {
    main:{
      backgroundColor: colors.transparent,
      border: 'none',
      borderRadius: 0,
      boxShadow: 'none',
      display: 'flex',
    },
    content: {
      padding: `0 ${spaces.standard}rem`
    },
    media: {
      width: spaces.standard * multiplicatorFactor.itemIcon,
      border: 'none',
      borderRadius: 'none',
      boxShadow: 'none',
    },
    link: {
      cursor: 'pointer'
    }
  },
  icon: {
    color: colors.subsubtitle,
    marginLeft: `${spaces.standard / 2}rem`,
    width: `${spaces.standard * 1.5}rem`
  }
});

interface ItemProps {
  item: ItemData;
  subsection: string;
  myKey: string;
};

function Item(props: ItemProps) {
  const { colors } = useThemeConfig();
  const itemStyle = useMemo(() => getItemStyle(colors), [colors]);

  const icon = getIconUrl(props.item.img);

  const [openDetail, setOpenDetail] = useState(false);

  const handleOpen = () => setOpenDetail(true);

  return (
    <>
      <Box style={{ margin: `${spaces.standard / 2}rem` }}>
        <Card raised={false} style={itemStyle.container.main}> 
          <Box
            style={{
              ...itemStyle.container.link,
              backgroundColor: colors.title,
              maxHeight: spaces.standard * multiplicatorFactor.itemIcon,
            }}
            onClick={handleOpen}
          >
            <CardMedia 
              component='img' 
              image={icon} 
              alt={props.item.title} 
              style={itemStyle.container.media} 
            />
          </Box>
          <Box onClick={handleOpen} style={itemStyle.container.link}>
            <CardContent style={itemStyle.container.content}>
              <Box style={{ display: 'flex' }}>
                <Typography style={itemStyle.text.title}>
                  {props.item.title}
                </Typography>
                {props.item.icons ? <IconsItem icons={props.item.icons} style={itemStyle.icon} /> : <></>}
              </Box>
              <Typography style={itemStyle.text.description}>
                {props.item.description}
              </Typography>
            </CardContent>
          </Box>
        </Card>
      </Box>
      {props.item.details ? 
        <Detail 
          detail={props.item.details}
          title={props.item.title}
          subsection={props.subsection}
          icons={props.item.icons}
          open={openDetail}
          close={setOpenDetail}
        />
      : <></>}
    </>
  );
}

export default Item;
