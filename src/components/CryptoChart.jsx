import React, { useMemo } from 'react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

const generate7dChartData = (basePrice, percentChange7d) => {
  const data = [];
  let price = basePrice;
  const direction = percentChange7d >= 0 ? 1 : -1;
  const absChange = Math.abs(percentChange7d);

  for (let i = 0; i < 50; i++) {
   
    const fluctuation = (absChange / 50) * (Math.random() * 0.4 + 0.8);
    price = price * (1 + direction * fluctuation / 100);
    data.push({ day: i, price: parseFloat(price.toFixed(2)) });
  }

  return data;
};

const CryptoChart = ({ basePrice, percentChange7d }) => {
  const data = useMemo(
    () => generate7dChartData(basePrice, percentChange7d),
    [basePrice, percentChange7d] 
  );

  return (
    <ResponsiveContainer width="100%" height={50}>
      <LineChart data={data}>
        <Line
          type="monotone"
          dataKey="price"
          stroke="#10b981"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default CryptoChart;
