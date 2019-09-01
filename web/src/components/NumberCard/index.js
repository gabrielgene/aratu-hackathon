import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { CircularProgress } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const useStyles = makeStyles({
  card: {
    width: 275,
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 24,
  },
  number: {
    fontSize: 36,
    fontWeight: 500,
    color: '#2f2b63',
  },
  title: {
    fontSize: 20,
    fontWeight: 500,
    color: '#2f2b63',
  },
  iconWrapper: {
    width: 105,
    color: '#2f2b63',
  },
  progress: {
    margin: 16,
    color: '#2f2b63',
  },
});

export default function SimpleCard({ icon, number, title, className }) {
  const classes = useStyles();

  return (
    <Card className={clsx(classes.card, className)}>
      <CardContent className={classes.content}>
        <div className={classes.iconWrapper}>
          <FontAwesomeIcon icon={icon} size="4x" color="#302b6" />
        </div>
        <div>
          {number === null ? (
            <CircularProgress className={classes.progress} />
          ) : (
            <Typography className={classes.number} color="textSecondary">
              {number}
            </Typography>
          )}
          <Typography className={classes.title} color="textSecondary">
            {title}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
}
