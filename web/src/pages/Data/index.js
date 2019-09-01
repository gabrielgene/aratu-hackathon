import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';
import IconButton from '@material-ui/core/IconButton';
import exportFromJSON from 'export-from-json'
import SendIcon from '@material-ui/icons/Send';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import clsx from 'clsx';

import { getLocations, getTwitters } from '../../services/Data';

import Topbar from '../../components/Topbar';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(3),
  },
  filtersPaper: {
    margin: theme.spacing(3),
    paddingBottom: theme.spacing(1),
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  table: {
    minWidth: 650,
  },
  // textField: {
  //   marginLeft: theme.spacing(3),
  //   marginRight: theme.spacing(3),
  // },
  text: {
    width: 300,
  },
  leftIcon: {
    marginRight: theme.spacing(1),
  },
  iconSmall: {
    fontSize: 20,
  },
  button: {
    margin: theme.spacing(2),
    color: '#302b63',
  },
}));

export default function SimpleTable() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    email: '',
    suburb: '',
    name: '',
    gender: '',
    platform: '',
    program: '',
    text: '',
  });
  const [tableData, setTableData] = React.useState([]);
  const [trueData, setTrueData] = React.useState([]);

  const formatData = async () => {
    const { users } = await getLocations();
    const { twitters } = await getTwitters();
    const formattedUsers = users.map(u => ({
      name: u.name || ' ',
      phone: u.phone || ' ',
      email: u.email || ' ',
      suburb: u.address.suburb || ' ',
      age: u.age || ' ',
      gender: u.gender || ' ',
      platform: 'QRCode',
      program: 'Hackaton Aratu',
      text: u.text || ' ',
    }));
    const formattedTwitters = twitters.map(t => ({
      name: t.username || ' ',
      phone: t.phone || ' ',
      email: t.email || ' ',
      suburb: t.address || ' ',
      age: t.age || ' ',
      gender: t.gender || ' ',
      platform: 'Twitter',
      program: 'Hackaton Aratu',
      text: t.tweet || ' ',
    }));
    const sortData = [...formattedTwitters, ...formattedUsers].sort(
      () => Math.random() - 0.5,
    );
    setTableData(sortData);
    setTrueData(sortData);
  };

  React.useEffect(() => {
    formatData();
  }, []);

  const handleChange = name => event => {
    const { value } = event.target;
    let filterValue = tableData;
    filterValue = tableData.filter(
      data =>
        data[name] && data[name].toLowerCase().includes(value.toLowerCase()),
    );
    setTrueData(filterValue);
    setValues({ ...values, [name]: value });
  };

  const generateCsv = (trueData) => {
    const fileName = 'download'
    const exportType = 'csv'
     
    exportFromJSON({ data: trueData, fileName, exportType })
  }

  const filters = [
    { name: 'Nome', change: 'name' },
    { name: 'Email', change: 'email' },
    { name: 'Bairro', change: 'suburb' },
    { name: 'Plataforma', change: 'platform' },
    { name: 'Programa', change: 'program' },
    { name: 'Texto', change: 'text' },
  ];

  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div>
      <Topbar />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {'Insira sua mensagem customizada'}
        </DialogTitle>
        <DialogContent style={{ width: 400 }}>
          <DialogContentText id="alert-dialog-description">
            <TextField
              id="outlined-dense-multiline"
              label="Mensagem"
              style={{ width: '100%' }}
              value="Nosso 1º hackaton está chegando ao fim! Que tal nos dizer algo sobre
            a sua experiência? Acesse o link para enviar o seu feedback.
            https://aratu-web.gabrielgene.now.sh"
              margin="dense"
              variant="outlined"
              multiline
              rowsMax="4"
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Enviar
          </Button>
        </DialogActions>
      </Dialog>
      <Paper className={classes.filtersPaper}>
        {filters.map(f => (
          <TextField
            key={f.name}
            label={f.name}
            className={classes.textField}
            value={values[f.change]}
            onChange={handleChange(f.change)}
            margin="normal"
            variant="outlined"
          />
        ))}
        <Button
          className={clsx(classes.button, classes.iconSmall)}
          onClick={() => generateCsv(trueData)}
        >
          <SaveIcon classes={classes.icon} />
        </Button>
        <Button
          className={clsx(classes.button, classes.iconSmall)}
          onClick={handleClickOpen}
        >
          <SendIcon classes={classes.icon} />
        </Button>
      </Paper>

      <Paper className={classes.root}>
        <Table className={classes.table} size="small">
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell align="right">Telefone</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Bairro</TableCell>
              <TableCell align="right">Idade</TableCell>
              <TableCell align="right">Genero</TableCell>
              <TableCell align="right">Plataforma</TableCell>
              <TableCell align="right">Programa</TableCell>
              <TableCell>Texto</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {trueData.map((row, idx) => (
              <TableRow key={idx}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.phone}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.suburb}</TableCell>
                <TableCell align="right">{row.age}</TableCell>
                <TableCell align="right">{row.gender}</TableCell>
                <TableCell align="right">{row.platform}</TableCell>
                <TableCell align="right">{row.program}</TableCell>
                <TableCell className={classes.text}>{row.text}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}
