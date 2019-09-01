import React from 'react';
import Chart from 'chart.js';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { getLocations } from '../../services/Data';

const useStyles = makeStyles(theme => ({
  history: {
    padding: 8,
    minHeight: 424,
    minWidth: 800,
  },
}));

export default function HistoryChart({ className }) {
  const classes = useStyles();

  React.useEffect(() => {
    getLocations().then(x => {
      const locations = x.users.map(l => l.address.suburb).filter(l => l);
      const counts = {};

      locations.forEach(l => (counts[l] = counts[l] ? counts[l] + 1 : 1));

      const labels = Object.keys(counts);
      const data = Object.keys(counts).map(k => counts[k]);
      const colors = Object.keys(counts).map(
        () => '#' + ((Math.random() * 0xffffff) << 0).toString(16),
      );
      new Chart(document.getElementById('line-chart'), {
        type: 'doughnut',
        data: {
          labels,
          datasets: [
            {
              backgroundColor: colors,
              data,
            },
          ],
        },
        options: {
          title: {
            display: true,
            text: 'Usuários por bairro em Salvador',
          },
        },
      });
    });
  });

  return (
    <Card className={clsx(classes.history, className)}>
      <canvas id="line-chart"></canvas>
    </Card>
  );
}
