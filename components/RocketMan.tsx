// https://codepen.io/chrisgannon/pen/EjVyXN
import * as React from 'react';
import { makeStyles, createStyles } from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    svg: {
      width: '100%',
      height: '100%',
      backgroundColor: '#1d1d1d',
    },
  }),
);
export const RocketMan = () => {
  return <div>Hello</div>;
};
