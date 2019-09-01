import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Topbar from '../../components/Topbar';
import Paper from '@material-ui/core/Paper';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles(theme => ({
  root: {},
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: 500,
  },
  title: {
    paddingTop: 16,
    fontSize: 20,
    fontWeight: 500,
    color: '#2f2b63',
  },
  customField: {
    margin: 16,
    paddingLeft: 24,
    width: 700,
    height: 400,
  },
  textField: {
    width: 400,
  },
  button: {
    marginLeft: 16,
  },
  rightIcon: {
    marginLeft: 8,
  },
}));

export default function FormBuilder() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [currentFields, setCurrentFields] = React.useState([]);
  const [fieldType, setFieldType] = React.useState(null);
  const classes = useStyles();

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleSelect(e) {
    const fields = [...currentFields, { type: e }];
    setCurrentFields(fields);
    setAnchorEl(null);
  }

  function renderFields() {
    console.log('renderFields', currentFields);
    return currentFields.map(field => {
      if (field.type === 1)
        return (
          <TextField
            id="outlined-phone"
            name="phone"
            className={classes.textField}
            // value={values.phone}
            // onChange={onChange}
            margin="normal"
            type="number"
            variant="outlined"
            InputProps={{
              className: classes.input,
            }}
          />
        );
      return <h3 contentEditable>sua pergunta</h3>;
    });
  }

  return (
    <React.Fragment>
      <Topbar />
      <div style={{ display: 'flex' }}>
        <div className={classes.root}>
          <Paper className={classes.customField}>
            <Typography className={classes.title} color="textSecondary">
              Campos customizados
            </Typography>
            <TextField
              id="outlined-name"
              label="Campo 1"
              className={classes.textField}
              value="Email"
              margin="normal"
              variant="outlined"
            />
            <TextField
              id="outlined-name"
              label="Campo 2"
              value="Fale com a gente!"
              className={classes.textField}
              margin="normal"
              variant="outlined"
            />
            <TextField
              id="outlined-name"
              label="Campo 3"
              value="Localização"
              className={classes.textField}
              margin="normal"
              variant="outlined"
            />
          </Paper>
          <Paper className={classes.customField}>
            <Typography className={classes.title} color="textSecondary">
              Tipos de formulario
            </Typography>
            <FormControl component="fieldset" className={classes.formControl}>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox value="gilad" />}
                  label="Promoção"
                />
                <FormControlLabel
                  control={<Checkbox value="jason" />}
                  label="Iteração"
                  checked
                />
                <FormControlLabel
                  control={<Checkbox value="antoine" />}
                  label="Votação"
                />
              </FormGroup>
            </FormControl>
          </Paper>
        </div>
        <div className={classes.root}>
          <Paper className={classes.customField}>
            <Typography className={classes.title} color="textSecondary">
              Link final
            </Typography>
            <TextField
              id="outlined-name"
              label="Inserir campo customizado"
              className={classes.textField}
              value="https://aratu-web.gabrielgene.now.sh/"
              margin="normal"
              variant="outlined"
            />
          </Paper>
        </div>
      </div>
    </React.Fragment>
  );
}
