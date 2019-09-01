import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  card: {
    display: "flex",
    flexDirection: 'column',
    alignItems: "center",
    minHeight: 500,
  },
  button: {
    marginLeft: 16,
  },
  title: {
    margin: 16
  },
  rightIcon: {
    marginLeft: 8
  }
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
    console.log('renderFields', currentFields)
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
              className: classes.input
            }}
          />
        );
      return (
        <h3 contentEditable>sua pergunta</h3>
      );
    });
  }

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <Typography
          className={classes.title}
          color="textSecondary"
          variant="h3"
        >
          Construtor de formulários
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
            variant="contained"
            color="secondary"
            className={classes.button}
          >
            Adicionar <AddIcon className={classes.rightIcon} />
          </Button>
        </Typography>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleSelect}
          className={classes.menu}
        >
          <MenuItem onClick={() => handleSelect(0)}>Pergunta</MenuItem>
          <MenuItem onClick={() => handleSelect(1)}>Resposta</MenuItem>
        </Menu>
        {renderFields()}
      </Card>
    </div>
  );
}
