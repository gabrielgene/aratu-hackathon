import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import CardHeader from '@material-ui/core/CardHeader';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    margin: 16,
  },
  bigAvatar: {
    margin: 8,
    width: 60,
    height: 60,
  },
  cardHeader: {
    fontSize: 20,
    fontWeight: 500,
  },
}));

export default function NowAiring({ className }) {
  const classes = useStyles();

  return (
    <Card className={clsx(classes.root, className)}>
      <div className="Beacon">
        <div className="Beacon-intern" />
      </div>

      <CardHeader
        title="Hackaton Aratu"
        classes={{ title: classes.cardHeader }}
        color="#2f2b63"
      />
    </Card>
  );
}
