import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
<<<<<<< HEAD
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Card from '@material-ui/core/Card';
import FormControl from '@material-ui/core/FormControl';
import CardHeader from '@material-ui/core/CardHeader';
=======
import Card from "@material-ui/core/Card";
import IconButton from "@material-ui/core/IconButton";
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';

import CardHeader from "@material-ui/core/CardHeader";
>>>>>>> 579b4d3a088f36e36859b9779391342f8f6a4673
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
