import React, { useState, useRef } from 'react';
import {
  makeStyles,
  TextField,
  FormControl,
  InputLabel,
  Select,
  OutlinedInput,
  MenuItem
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    padding: 20,
    alignItems: 'center'
  },
  textField: {
    width: '100%',
    marginTop: 8
  },
  input: {
    color: 'white',
    borderColor: 'white'
  }
}));

export default function Form(props) {
  const classes = useStyles();

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const [values, setValues] = useState({
    phone: '',
    gender: '',
    age: ''
  });

  const onChange = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className={classes.root}>
      <TextField
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
    </div>
  );
}
