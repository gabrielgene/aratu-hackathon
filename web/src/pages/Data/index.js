import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { getLocations, getTwitters } from '../../services/Data';

import Topbar from '../../components/Topbar';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(3),
  },
  filtersPaper: {
    margin: theme.spacing(3),
    paddingBottom: theme.spacing(1),
  },
  table: {
    minWidth: 650,
  },
  textField: {
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(4),
  },
  text: {
    width: 300,
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

  const filters = [
    { name: 'Nome', change: 'name' },
    { name: 'Email', change: 'email' },
    { name: 'Bairro', change: 'suburb' },
    { name: 'Plataforma', change: 'platform' },
    { name: 'Programa', change: 'program' },
    { name: 'Texto', change: 'text' },
  ];

  return (
    <div>
      <Topbar />
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
