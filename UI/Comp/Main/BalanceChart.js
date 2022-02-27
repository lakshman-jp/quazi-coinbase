import React from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import styled from "styled-components";

const BalanceChart = () => {
  return (
    <Wrapper>
      <Line data={data} options={options} width={400} />
    </Wrapper>
  );
};

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
};

const data = {
  labels: [
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
    "Jan",
  ],
  datasets: [
    {
      fill: false,
      lineTension: 0.1,
      backgroundColor: "#3773f5",
      borderColor: "#3773f5",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "#3773f5",
      pointBackgroundColor: "#3773f5",
      pointBackgroundWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "#3773f5",
      pointHoverBorderColor: "#3773f5",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 72, 45, 67, 55, 42],
    },
  ],
};

const Wrapper = styled.div`
  height: 100;
`;

export default BalanceChart;
