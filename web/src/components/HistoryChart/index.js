import React from "react";
import Chart from "chart.js";
import clsx from 'clsx';

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles(theme => ({
  history: {
    padding: 8,
    minHeight: 424,
    minWidth: 800,
    width: '100%',
  }
}));

export default function HistoryChart({ className }) {
  const classes = useStyles();

  React.useEffect(() => {
    new Chart(document.getElementById("line-chart"), {
      type: "line",
      data: {
        labels: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90],
        datasets: [
          {
            data: [8, 20, 40, 30, 50, 55, 60, 70, 80, 75],
            label: "Facebook",
            borderColor: "#3e95cd",
            fill: false
          },
          {
            data: [20, 30, 33, 35, 36, 50, 55, 60, 80, 87],
            label: "Total",
            borderColor: "#8e5ea2",
            fill: false
          },
          {
            data: [8, 10, 20, 30, 33, 35, 40, 40, 41, 42],
            label: "QR Code",
            borderColor: "#3cba9f",
            fill: false
          },
          {
            data: [15, 10, 13, 20, 23, 30, 40, 50, 40, 60],
            label: "Twitter",
            borderColor: "#e8c3b9",
            fill: false
          },
          {
            data: [10, 10, 13, 20, 23, 30, 40, 42, 50, 60],
            label: "Instagram",
            borderColor: "#c45850",
            fill: false
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: "World population per region (in millions)"
        }
      }
    });
  });

  return (
    <Card className={clsx(classes.history, className)}>
      <canvas id="line-chart"></canvas>
    </Card>
  );
}
