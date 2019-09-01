import React, { useCallback, useState } from 'react';
import Lottie from 'react-lottie';
import { makeStyles, Typography, CircularProgress } from '@material-ui/core';
import { GoogleLogin } from 'react-google-login';

import { getAdress } from '../../services/GeolocationAPI';

const useStyles = makeStyles(theme => ({
  root: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    padding: 20,
    justifyContent: 'space-beetwen'
  },
  body: {
    marginTop: 15,
    marginBottom: 30,
    color: 'white',
    fontFamily: 'Ubuntu'
  },
  title: {
    color: 'white',
    fontFamily: 'Ubuntu'
  },
  progress: {
    margin: theme.spacing(2),
    color: 'white'
  }
}));

const defaultLottieOptions = {
  loop: true,
  autoplay: true,
  animationData: require('../../animations/chicken.json'),
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

export default function BaseOnboarding(props) {
  const classes = useStyles();

  const [values, setValues] = useState({
    isValidated: false,
    isLoading: false
  });

  const onSuccessGoogle = useCallback(response => {
    const { profileObj } = response;
    const {
      email,
      googleId,
      givenName,
      name,
      familyName,
      imageUrl
    } = profileObj;

    setValues({ ...values, isLoading: true });

    navigator.geolocation.getCurrentPosition(position => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;

      getAdress(lat, lng).then(result => {
        console.log(result.address);

        //SEND ALL TO BACKEND

        setValues({ isLoading: false, isValidated: true });
      });
    });
  }, []);

  const onFailureGoogle = useCallback(() => {
    console.log('deu merda');
  }, []);

  return (
    <div className={classes.root}>
      <Typography className={classes.title} variant='h2' gutterBottom>
        TVAratu
      </Typography>
      <Lottie options={defaultLottieOptions} width='250' height='250' />
      <Typography className={classes.body} variant='body1'>
        Estamos participando de um hackaton (competição) e precisamos de sua
        ajuda! Basta logar com o google, e sua ajuda estará computada, ative as
        localizacoes tambem, muito obrigado!
      </Typography>
      <div className={classes.footer}>
        {values.isLoading ? (
          <CircularProgress className={classes.progress} />
        ) : values.isValidated ? (
          <Typography className={classes.title} variant='h4' gutterBottom>
            Obrigado!
          </Typography>
        ) : (
          <GoogleLogin
            clientId='217118554638-fkh62t3fu61hvlmrqnmeun9idour35jr.apps.googleusercontent.com'
            buttonText='Entrar com o Google'
            onSuccess={onSuccessGoogle}
            onFailure={onFailureGoogle}
            cookiePolicy={'single_host_origin'}
          />
        )}
      </div>
    </div>
  );
}
