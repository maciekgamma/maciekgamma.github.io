import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSpring, animated } from 'react-spring';
import LocalizedStrings from 'react-localization';
import { localizedStrings } from 'public/localization';
import { LanguageContext } from 'components';

const calc = (x: any, y: any) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1];
const trans = (x: any, y: any, s: any) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const strings = new LocalizedStrings(localizedStrings);

const useStyles = makeStyles({
  image: {
    marginTop: '100px',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block',
  },
  imageDiv: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '90%',
    textAlign: 'center',
  },
  label: {
    fontSize: '5vh',
    fontFamily: 'Lato',
  },
});

export function WorkInProgress() {
  const languageContext = React.useContext(LanguageContext);
  const classes = useStyles();

  strings.setLanguage(languageContext.language);

  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 1, tension: 100, friction: 40 } }));
  return (
    <animated.div
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      // @ts-ignore
      style={{ transform: props.xys.interpolate(trans) }}
    >
      <div className={classes.imageDiv}>
        <img src={require('public/Freelancer.svg')} className={classes.image} />
        <span className={classes.label}>{strings.workInProgess}</span>
      </div>
    </animated.div>
  );
}
