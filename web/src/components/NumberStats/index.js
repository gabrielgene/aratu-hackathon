import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import NumberCard from '../../components/NumberCard';
import { getTwitterAmount, getUserAmount } from '../../services/Data';

const useStyles = makeStyles(theme => ({
  numberStats: {
    display: 'flex',
    flexDirection: 'column',
    height: 698,
    marginRight: 16,
  },
  numberCard: {
    marginBottom: 16,
  },
}));

export default function NumberStats() {
  const classes = useStyles();
  const [twitter, setTwitter] = React.useState(null);
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    getTwitterAmount().then(x => setTwitter(x.amount));
  }, []);

  React.useEffect(() => {
    getUserAmount().then(x => setUser(x.amount));
  }, []);

  return (
    <div className={classes.numberStats}>
      <NumberCard
        className={classes.numberCard}
        number={twitter + user}
        title="Total"
        icon={['fas', 'comment']}
      />
      <NumberCard
        className={classes.numberCard}
        number={0}
        title="Facebook"
        icon={['fab', 'facebook-square']}
      />
      <NumberCard
        className={classes.numberCard}
        number={0}
        title="Instagram"
        icon={['fab', 'instagram']}
      />
      <NumberCard
        className={classes.numberCard}
        number={twitter}
        title="Twitter"
        icon={['fab', 'twitter']}
      />
      <NumberCard
        className={classes.numberCard}
        number={user}
        title="QR Code"
        icon={['fas', 'qrcode']}
      />
    </div>
  );
}
