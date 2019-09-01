import React, { useState } from 'react';

import {
  makeStyles,
  Paper,
  TextField,
  Button,
  Typography
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    padding: 20,
    alignItems: 'center'
  },
  body: {
    marginTop: 15,
    marginBottom: 30,
    color: 'white',
    fontFamily: 'Ubuntu',
    textAlign: 'center'
  },
  title: {
    color: 'white',
    fontFamily: 'Ubuntu',
    textAlign: 'center'
  },
  paper: {
    width: '100%',
    marginTop: 16,
    padding: 8
  },
  img: {
    width: theme.spacing(41),
    marginTop: theme.spacing(2)
  },
  textField: {
    width: '100%'
  },
  button: {
    width: '100%',
    padding: 8,
    marginTop: theme.spacing(2),
    backgroundColor: 'white',
    color: 'black'
  }
}));

export default function InterationForm({ history, match: { params } }) {
  const classes = useStyles();

  const [values, setValues] = useState({
    text: '',
    googleId: params.googleId
  });

  const onChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = () => {
    history.push('/concluido');
  };

  return (
    <div className={classes.root}>
      <img
        className={classes.img}
        src='https://i.imgur.com/I1NTCFk.png'
        alt='logo'
      />
      <Typography className={classes.title} variant='h5' gutterBottom>
        Interaja com a gente!
      </Typography>
      <Paper className={classes.paper}>
        <TextField
          id='outlined-phone'
          name='text'
          label='Mensagem'
          className={classes.textField}
          value={values.text}
          onChange={onChange}
          margin='normal'
          variant='outlined'
          multiline
          helperText='Escreva sua mensagem aqui'
          rows='5'
          rowsMax={5}
        />
      </Paper>
      <Button
        className={classes.button}
        variant='contained'
        color='primary'
        onClick={onSubmit}
      >
        Enviar
      </Button>
    </div>
  );
}
