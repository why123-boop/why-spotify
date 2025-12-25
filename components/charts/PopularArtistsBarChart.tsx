
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const COLORS = ['#1DB954', '#1ED760', '#48D97B', '#6EE096', '#8AE6B1', '#A3EBCB', '#B9F1E2', '#CCF6F0', '#DFF9F9', '#F0FCFC'];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-700 p-2 border border-gray-600 rounded-md text-white">
        <p className="label font-bold">{`${label}`}</p>
        <p className="intro">{`平均热度: ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

interface PopularArtistsBarChartProps {
  data: any[];
}

const PopularArtistsBarChart: React.FC<PopularArtistsBarChartProps> = ({ data }) => {
  const chartData = [...data].reverse();

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={chartData}
        layout="vertical"
        margin={{
          top: 5,
          right: 30,
          left: 60,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#4A5568" />
        <XAxis type="number" stroke="#A0AEC0" />
        <YAxis 
          dataKey="name" 
          type="category" 
          stroke="#A0AEC0" 
          width={100}
          tick={{fontSize: 12}}
          interval={0}
        />
        <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(128, 128, 128, 0.1)' }} />
        <Bar dataKey="averagePopularity" fill="#1DB954">
           {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default PopularArtistsBarChart;
