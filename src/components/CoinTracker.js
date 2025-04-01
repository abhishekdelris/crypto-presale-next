"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function CoinTracker({ coin = 'bitcoin' }) {
  const [chartData, setChartData] = useState(null);
  const [days, setDays] = useState(7); // Default to 7 days

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${coin}/market_chart`,
          {
            params: { 
              vs_currency: 'usd',
              days,
            },
          }
        );

        const prices = response.data.prices;
        setChartData({
          labels: prices.map((price) => new Date(price[0]).toLocaleDateString()),
          datasets: [
            {
              label: `${coin.toUpperCase()} Price (USD)`,
              data: prices.map((price) => price[1]),
              borderColor: 'rgba(75,192,192,1)',
              backgroundColor: 'rgba(75,192,192,0.2)',
            },
          ],
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [coin, days]);

  return (
    <div>
      <h2>{coin.toUpperCase()} Price Chart (Last {days} Days)</h2>

      <select onChange={(e) => setDays(e.target.value)}>
        <option value="7">7 Days</option>
        <option value="14">14 Days</option>
        <option value="30">30 Days</option>
      </select>

      {chartData ? <Line data={chartData} /> : <p>Loading chart data...</p>}
    </div>
  );
}
