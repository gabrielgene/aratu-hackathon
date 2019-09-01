import React, { useState, useRef } from 'react';
import {
  makeStyles,
  TextField,
  FormControl,
  InputLabel,
  Select,
  OutlinedInput,
  MenuItem,
  Button,
  Typography
} from '@material-ui/core';
import Lottie from 'react-lottie';

const useStyles = makeStyles(theme => ({
  root: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    padding: 20,
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  textField: {
    width: '100%',
    marginTop: 8
  },
  input: {},
  button: {
    marginTop: 18,
    width: '100%',
    backgroundColor: '#302b63'
  },
  title: {
    color: '#302b63',
    fontFamily: 'Ubuntu',
    textAlign: 'center',
    marginTop: 16
  }
}));

const defaultLottieOptions = {
  loop: true,
  autoplay: true,
  animationData: require('../../animations/form.json'),
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

const backdropOptions = {
  loop: true,
  autoplay: true,
  animationData: require('../../animations/backdrop.json'),
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

export default function Form({ router }) {
  const classes = useStyles();

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const [values, setValues] = useState({
    phone: '',
    gender: '',
    age: '',
    isLoading: false
  });

  const onChange = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

  const onCompleted = () => {
    setValues({ ...values, isLoading: true });
    //Send data to BACKEND
  };

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Typography className={classes.title} variant='h5' gutterBottom>
          Complete para participar!
        </Typography>
        <Lottie options={defaultLottieOptions} width='200' height='200' />
        <TextField
          disabled={values.isLoading}
          id='outlined-phone'
          name='phone'
          label='Telefone'
          className={classes.textField}
          value={values.phone}
          onChange={onChange}
          margin='normal'
          type='number'
          variant='outlined'
          InputProps={{
            className: classes.input
          }}
        />
        <TextField
          disabled={values.isLoading}
          id='outlined-age'
          name='age'
          label='Idade'
          className={classes.textField}
          value={values.age}
          onChange={onChange}
          margin='normal'
          type='number'
          variant='outlined'
          InputProps={{
            className: classes.input
          }}
        />
        <FormControl variant='outlined' className={classes.textField}>
          <InputLabel ref={inputLabel} htmlFor='outlined-gender-simple'>
            Gênero
          </InputLabel>
          <Select
            disabled={values.isLoading}
            value={values.gender}
            onChange={onChange}
            input={
              <OutlinedInput
                labelWidth={labelWidth}
                name='gender'
                id='outlined-gender-simple'
              />
            }
          >
            <MenuItem value='Masculino'>Masculino</MenuItem>
            <MenuItem value='Feminino'>Feminino</MenuItem>
            <MenuItem value='Outro'>Outro</MenuItem>
          </Select>
        </FormControl>
        <Button
          disabled={values.isLoading}
          variant='contained'
          color='primary'
          className={classes.button}
          onClick={onCompleted}
        >
          {values.isLoading ? 'Enviando...' : 'Enviar'}
        </Button>
      </div>
      <div
        style={{
          marginTop: 8
        }}
      >
        <Lottie options={backdropOptions} width='45%' height='45%' />
      </div>
    </React.Fragment>
  );
}
