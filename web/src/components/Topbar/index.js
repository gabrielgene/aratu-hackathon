import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import { withRouter } from 'react-router-dom';

import NumberStats from '../../components/NumberStats';

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    cursor: 'pointer',
    marginLeft: 36,
  },
  button: {
    marginRight: theme.spacing(2),
  },
}));

const Bar = ({ history }) => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          onClick={() => history.push('/dashboard')}
          variant="h6"
          className={classes.title}
        >
          Dashboard Aratu Analytics
        </Typography>
        <Button
          color="inherit"
          className={classes.button}
          onClick={() => history.push('/form')}
        >
          Formulário
        </Button>
        <Button color="inherit" onClick={() => history.push('/dados')}>
          Dados
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default withRouter(Bar);
