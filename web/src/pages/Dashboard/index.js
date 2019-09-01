import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Topbar from '../../components/Topbar';
import NumberStats from '../../components/NumberStats';
import HistoryChart from '../../components/HistoryChart';
import NowAiring from '../../components/NowAiring';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  content: {
    display: 'flex',
    padding: 16,
    paddingTop: 0,
  },
  contentMiddle: {
    display: 'flex',
    flexGrow: 1,
  },
  header: {
    marginBottom: 16,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Topbar />
      <NowAiring className={classes.nowAiring} />
      <div className={classes.content}>
        <NumberStats />
        <HistoryChart />
      </div>
    </div>
  );
}
