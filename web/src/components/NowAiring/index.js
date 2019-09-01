import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Avatar from '@material-ui/core/Avatar';
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
}));

export default function NowAiring({ className }) {
  const classes = useStyles();

  return (
    <Card className={clsx(classes.root, className)}>
      <CardHeader title="Passando agora: Que Venha o Povo" color="textSecondary" />
      <Avatar alt="avatar" src="https://i.imgur.com/BFuaWoq.png" className={classes.bigAvatar} />
    </Card>
  );
}
