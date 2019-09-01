import React, { useCallback, useState } from 'react';
import Lottie from 'react-lottie';
import { makeStyles, Typography, Button } from '@material-ui/core';

import Confetti from 'react-dom-confetti';

const config = {
  angle: 45,
  spread: '200',
  startVelocity: 45,
  elementCount: 80,
  dragFriction: '0.10',
  duration: 5000,
  stagger: 0,
  width: '10px',
  height: '10px',
  colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a']
};

const useStyles = makeStyles(theme => ({
  root: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    padding: 20,
    justifyContent: 'space-beetwen'
  },
  body: {
    marginTop: 4,
    marginBottom: 30,
    color: 'white',
    fontFamily: 'Ubuntu',
    fontSize: 22
  },
  title: {
    color: 'white',
    fontFamily: 'Ubuntu'
  },
  rightIcon: {
    marginLeft: theme.spacing(1)
  },
  footer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-beetwen'
  },
  faceButton: {
    marginTop: 8,
    width: '100%',
    color: 'white',
    height: 44
  },
  whatsButton: {
    width: '100%',
    backgroundColor: '#25d366',
    color: 'white',
    height: 44
  },
  twButton: {
    marginTop: 8,
    width: '100%',
    backgroundColor: '#1DA1F2',
    color: 'white',
    height: 44
  }
}));

const defaultLottieOptions = {
  loop: false,
  autoplay: true,
  animationData: require('../../animations/done.json'),
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

export default function LocationScreen(props) {
  const classes = useStyles();

  const [values, setValues] = useState({
    isFinished: false
  });

  const onFinishAnimation = useCallback(() => {
    setValues({ ...values, isFinished: true });
  });

  const eventListeners = [
    {
      eventName: 'complete',
      callback: onFinishAnimation
    }
  ];

  return (
    <div className={classes.root}>
      <Typography className={classes.title} variant='h3' gutterBottom>
        Parabéns!
      </Typography>
      <Confetti config={config} active={values.isFinished} />
      <Lottie
        options={defaultLottieOptions}
        width='200'
        height='200'
        eventListeners={eventListeners}
      />
      <Typography className={classes.body} variant='body1'>
        Agora você está participando de nosso evento!
      </Typography>

      <div className={classes.footer}>
        <Button
          variant='contained'
          color='primary'
          className={classes.whatsButton}
        >
          Compartilhar no whatsapp
        </Button>
        <Button
          variant='contained'
          color='primary'
          className={classes.twButton}
        >
          Compartilhar no twitter
        </Button>
        <Button
          variant='contained'
          color='primary'
          className={classes.faceButton}
        >
          Compartilhar no facebook
        </Button>
      </div>
    </div>
  );
}
