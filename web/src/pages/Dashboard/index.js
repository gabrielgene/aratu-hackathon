import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Topbar from "../../components/Topbar";
import NumberStats from "../../components/NumberStats";
import HistoryChart from "../../components/HistoryChart";
import NowAiring from "../../components/NowAiring";
import FilterBar from "../../components/FilterBar";


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  content: {
    display: 'flex',
    padding: 16,
    flexDirection: 'column',
  },
  contentMiddle: {
    display: 'flex',
    flexGrow: 1,
  },
  header: {
    marginBottom: 16,
    display: 'flex',
  },
  historyChart: {
    flexGrow: 1,
    marginLeft: 16,
    height: '100%',
  },
  filterBar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'left',
    flexGrow: 1,
    marginLeft: 16,
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Topbar />
      <div className={classes.content}>
        <div className={classes.header}>
          <NowAiring className={classes.nowAiring} />
          <FilterBar className={classes.filterBar}/>
        </div>
        <div className={classes.contentMiddle}>
          <NumberStats />
          <HistoryChart className={classes.historyChart} />
        </div>
      </div>
    </div>
  );
}
