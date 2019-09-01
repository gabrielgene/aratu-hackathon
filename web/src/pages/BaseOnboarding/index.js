import React, { useCallback, useState, useEffect } from 'react';
import Lottie from 'react-lottie';
import { makeStyles, Typography, CircularProgress } from '@material-ui/core';
import { GoogleLogin } from 'react-google-login';

import { sendUserData } from '../../services/Aratu';
import { getAdress } from '../../services/GeolocationAPI';

const useStyles = makeStyles(theme => ({
  root: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    padding: 20,
    alignItems: 'center',
  },
  body: {
    marginTop: 15,
    marginBottom: 30,
    color: 'white',
    fontFamily: 'Ubuntu',
    textAlign: 'center',
  },
  title: {
    color: 'white',
    fontFamily: 'Ubuntu',
  },
  progress: {
    margin: theme.spacing(2),
    color: 'white',
  },
  img: {
    width: theme.spacing(41),
    marginTop: theme.spacing(2),
  },
}));

const defaultLottieOptions = {
  loop: true,
  autoplay: true,
  animationData: require('../../animations/chicken.json'),
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

export default function BaseOnboarding({ router }) {
  const classes = useStyles();

  const [values, setValues] = useState({
    isValidated: false,
    isLoading: false,
    lat: 0,
    lng: 0,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        setValues({ ...values, lat, lng, isAllowed: true });
      },
      () => {
        setValues({ ...values, isAllowed: false });
      },
    );
  }, []);

  const onSuccessGoogle = useCallback(response => {
    const { profileObj } = response;
    const { email, googleId, givenName, name, familyName } = profileObj;

    setValues({ ...values, isLoading: true });

    getAdress(values.lat, values.lng).then(result => {
      const userData = {
        email,
        googleId,
        givenName,
        name,
        familyName,
        address: result.address,
      };

      //SEND ALL TO BACKEND
      sendUserData(userData)
        .then(() => {
          router.push('/concluido');
        })
        .catch(err => console.log(err));
    });
  }, []);

  const onFailureGoogle = useCallback(() => {}, []);

  return (
    <div className={classes.root}>
      <img
        className={classes.img}
        src="https://i.imgur.com/I1NTCFk.png"
        alt="logo"
      />
      <Lottie options={defaultLottieOptions} width="60%" height="150" />
      <Typography className={classes.body} variant="body1">
        Estamos participando de um hackaton (competição) e precisamos de sua
        ajuda! Basta logar com o google, e sua ajuda estará computada, ative as
        localizacoes tambem, muito obrigado!
      </Typography>
      <div className={classes.footer}>
        {values.isLoading ? (
          <CircularProgress className={classes.progress} />
        ) : values.isValidated ? (
          <Typography className={classes.title} variant="h4" gutterBottom>
            Obrigado!
          </Typography>
        ) : (
          <GoogleLogin
            clientId="217118554638-fkh62t3fu61hvlmrqnmeun9idour35jr.apps.googleusercontent.com"
            buttonText="Entrar com o Google"
            onSuccess={onSuccessGoogle}
            onFailure={onFailureGoogle}
            cookiePolicy={'single_host_origin'}
          />
        )}
      </div>
    </div>
  );
}
