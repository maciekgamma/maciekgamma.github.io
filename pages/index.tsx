import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import { Chip, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Head from 'next/head';
import { RocketMan } from 'components/RocketMan';

const useStyles = makeStyles((theme: any) => ({
  root: {
    textAlign: 'center',
    height: 'calc(100vh - 64px)',
    position: 'relative',
  },
  background: {
    top: 0,
    position: 'absolute',
    width: '100%',
    height: '100%',
    paddingTop: '10%',
    backgroundColor: '#1d1d1d',
    zIndex: -1,
  },
  chipContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  chip: {
    margin: '5px 10px',
    color: theme.palette.primary.text,
    backgroundColor: theme.palette.primary.main,
  },
  strip: {
    paddingTop: 30,
    paddingBottom: 30,
  },
}));

const Index: React.FC = () => {
  const handleOpenLink = (href: string) => {
    window.open(href);
    return false;
  };
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.background}>
        <RocketMan />
      </div>
      <Head>
        <title>Nitro</title>
      </Head>
      <div className={classes.strip}>
        <Typography variant="h3" gutterBottom>
          Nitro
        </Typography>
        <div className={classes.chipContainer}>
          <Chip
            avatar={<Avatar alt="MUI" src="https://material-ui.com/static/logo_raw.svg" />}
            label="Material-UI"
            className={classes.chip}
            onClick={() => handleOpenLink('https://material-ui.com')}
          />
          <Chip
            avatar={
              <Avatar alt="NextJS" src="https://assets.zeit.co/image/upload/front/assets/design/black-triangle.png" />
            }
            label="NextJS"
            className={classes.chip}
            onClick={() => handleOpenLink('https://nextjs.org/')}
          />
          <Chip
            avatar={<Avatar alt="TS" src="https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.png" />}
            label="Typescript"
            className={classes.chip}
            onClick={() => handleOpenLink('https://www.typescriptlang.org/')}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
