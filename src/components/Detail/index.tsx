import React, { Dispatch, SetStateAction } from 'react';
import { Typography, Box, Stack, Dialog } from '@mui/material';
import { DetailData } from '../../interfaces/Interfaces';
import { colors, fonts, spaces } from '../../styles/theme';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';
import IconsItem from '../Iconstem';

const detailStyle = {
  dialog: {
    cursor: 'context-menu',
    outline: 'none',
    borderRadius: 0,
    margin: 0
  },
  backdroop: {
    backgroundColor: colors.modalBackdroop
  },
  paper: {
    borderRadius: 0
  },
  title: {
    container: {
      padding: `0 ${spaces.standard}rem 0 ${spaces.standard}rem`,
      backgroundColor: colors.border,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      border: `1px solid ${colors.border}`
    },
    text: {
      fontFamily: fonts.family.title,
      color: colors.subtitle,
      fontSize: fonts.size.subtitle,
      margin: `${- spaces.standard / 2}rem 0 ${- spaces.standard / 2}rem 0`,
    },
    anotation: {
      fontFamily: fonts.family.subtitle,
      color: colors.anotation,
      fontSize: fonts.size.anotation,
      fontVariant: 'small-caps',
    }
  },
  body: {
    container: {
      backgroundColor: colors.modalBackground,
      padding: `${spaces.standard}rem`,
      // border: `${colors.border}`,
      // borderWidth: `${spaces.standard}rem`,
      // borderStyle: 'none solid solid solid',
    },
    text: {
      description: {
        fontFamily: fonts.family.text.italic,
        fontSize: fonts.size.dialog.italic,
        lineHeight: 1.2
      },
      emphasis: {
        fontFamily: fonts.family.text.normal,
        fontSize: fonts.size.dialog.italic,
        lineHeight: 1.2,
        fontWeight: 'bold',
        color: colors.title,
        fontVariant: 'small-caps',
      },
      moreInfo: {
        fontFamily: fonts.family.text.italic,
        fontSize: fonts.size.dialog.italic,
        lineHeight: 1.2
      },
      reference: {
        fontFamily: fonts.family.text.italic,
        fontSize: fonts.size.reference,
        marginTop: `${spaces.standard / 2}rem`
      }
    }
  },
  table: {
    container: {
      border: colors.tableBorder,
      borderWidth: `${spaces.standard / 2}rem`,
      borderStyle: 'solid none'
    },
    text: {
      fontFamily: fonts.family.table,
      fontSize: fonts.size.table.normal,
      padding: `${spaces.standard / 2}rem ${spaces.standard}rem`,
      lineHeight: 1.3
    }
  },
  icon: {
    color: colors.subtitle,
    marginLeft: `${spaces.standard}rem`,
    marginTop: `${spaces.standard / 2}rem`,
    width: `${spaces.standard * 2}rem`
  }
};

interface DetailProps {
  detail: DetailData;
  title: string;
  subsection: string;
  icons?: string[];
  open: boolean;
  close: Dispatch<SetStateAction<boolean>>
};

function Detail(props: DetailProps) {

  const handleClose = () => props.close(false)
  let countLinesTable = 0;

  return (
    <Dialog 
      open={props.open}
      onClose={handleClose}
      disableScrollLock={true}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{ timeout: 600, style: detailStyle.backdroop }}
      PaperProps={{ style: detailStyle.paper }}
      fullWidth
    >
      <Fade in={props.open}>
        <Stack onClick={handleClose} style={detailStyle.dialog}>
          <Box style={detailStyle.title.container}>
            <Box display={'flex'}>
              <Typography style={detailStyle.title.text}>
                {props.title}
              </Typography>
              {props.icons ? <IconsItem icons={props.icons} style={detailStyle.icon} /> : <></>}
            </Box>
            <Typography style={detailStyle.title.anotation}>
              {props.subsection}
            </Typography>
          </Box>
          <Stack style={detailStyle.body.container} spacing={2}>
            <Typography style={detailStyle.body.text.description}>
              {props.detail.description}
            </Typography>

            { props.detail.emphasis ?
            <Typography style={detailStyle.body.text.emphasis} textAlign='center'>
              {props.detail.emphasis}
            </Typography>
            : <></>}

            { props.detail.uses ? 
              <Box style={detailStyle.table.container}>
                {props.detail.uses.map((use, index) => {
                  countLinesTable++;
                  const color = countLinesTable % 2 === 0 ? colors.tableLine.even : colors.tableLine.odd
                  return (
                      <Typography style={detailStyle.table.text} bgcolor={color} key={index}>
                        { use.title ? <strong>{use.title + ': '}</strong> : <></>}
                        {use.description}
                      </Typography>
                  );
                }
                )}
              </Box>
            : <></>}
            { props.detail.moreInfo ?
              <Typography style={detailStyle.body.text.moreInfo}>
                {props.detail.moreInfo}
              </Typography>
            : <></>}
            <Typography style={detailStyle.body.text.reference} textAlign='right'>
              {props.detail.reference.source + ', pág. ' + props.detail.reference.page}
            </Typography>
          </Stack>
        </Stack>
      </Fade>
    </Dialog>
  );
}

export default Detail;