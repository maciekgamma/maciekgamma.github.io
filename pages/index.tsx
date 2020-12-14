import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { NavBar, WorkInProgress } from 'components';

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
  workInProgess: {
    marginLeft: 'aut',
    marginRight: 'auto',
  },
}));

const Index: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <NavBar />
      <div className={classes.workInProgess}>
        <WorkInProgress />
      </div>
    </>
  );
};

export default Index;
