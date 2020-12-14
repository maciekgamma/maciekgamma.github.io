import * as React from 'react';
import { animated } from 'react-spring';
import { Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  button: {
    width: '120px',
  },
});

type Props = {
  children: React.ReactNode;
};

export const AnimatedButton = (props: Props) => {
  const classes = useStyles();
  return (
    <animated.div>
      <Button color="inherit" className={classes.button}>
        {props.children}
      </Button>
    </animated.div>
  );
};
