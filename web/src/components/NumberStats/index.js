import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import NumberCard from '../../components/NumberCard';

const useStyles = makeStyles(theme => ({
  numberStats: {
    display: 'flex',
    flexDirection: 'column',
  },
  numberCard: {
    marginBottom: 16,
  },
}));

export default function NumberStats() {
  const classes = useStyles();

  return (
    <div className={classes.numberStats}>
      <NumberCard className={classes.numberCard} number={98} title="Total" icon={['fas', 'users']} />
      <NumberCard className={classes.numberCard} number={33} title="Facebook" icon={['fab', 'facebook-square']} />
      <NumberCard className={classes.numberCard} number={29} title="Instagram" icon={['fab', 'instagram']} />
      <NumberCard className={classes.numberCard} number={10} title="Twitter" icon={['fab', 'twitter']} />
      <NumberCard className={classes.numberCard} number={26} title="QR Code" icon={['fas', 'qrcode']} />
    </div>
  );
}