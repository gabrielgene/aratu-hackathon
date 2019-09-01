import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const useStyles = makeStyles({
  card: {
    width: 275,
  },
  content: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  number: {
    fontSize: 36,
  },
  title: {
    fontSize: 20,
  },
});

export default function SimpleCard({ icon, number, title, className }) {
  const classes = useStyles();

  return (
    <Card className={clsx(classes.card, className)}>
      <CardContent className={classes.content}>
        <div>
          <Typography
            className={classes.number}
            color="textSecondary"
          >
            {number}
          </Typography>
          <Typography className={classes.title} color="textSecondary">
            {title}
          </Typography>
        </div>
        <FontAwesomeIcon icon={icon} size="6x" />
      </CardContent>
    </Card>
  );
}
