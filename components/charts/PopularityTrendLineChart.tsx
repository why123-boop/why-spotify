
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-700 p-2 border border-gray-600 rounded-md text-white">
        <p className="label font-bold">{`年份: ${label}`}</p>
        <p className="intro" style={{color: payload[0].color}}>{`平均热度: ${payload[0].value.toFixed(2)}`}</p>
      </div>
    );
  }
  return null;
};

interface PopularityTrendLineChartProps {
    data: any[];
}

const PopularityTrendLineChart: React.FC<PopularityTrendLineChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#4A5568"/>
        <XAxis dataKey="year" stroke="#A0AEC0" />
        <YAxis stroke="#A0AEC0" />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Line type="monotone" dataKey="averagePopularity" name="平均热度" stroke="#1DB954" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default PopularityTrendLineChart;
