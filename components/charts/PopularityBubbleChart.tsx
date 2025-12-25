import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const d = payload[0].payload;
    return (
      <div className="bg-gray-700 p-2 border border-gray-600 rounded-md text-white text-xs max-w-xs break-words">
        <p className="font-bold text-green-300">{d.name}</p>
        <p>{`艺人热度: ${d.artistPopularity}`}</p>
        <p>{`曲目热度: ${d.trackPopularity}`}</p>
        <p>{`粉丝数: ${d.followers.toLocaleString()}`}</p>
      </div>
    );
  }
  return null;
};

interface PopularityBubbleChartProps {
    data: any[];
}

const PopularityBubbleChart: React.FC<PopularityBubbleChartProps> = ({ data }) => {
  const followers = data.map(d => d.followers);
  const domain: [number, number] = [0, followers.length > 0 ? Math.max(...followers) : 0];
  const range: [number, number] = [100, 1000];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <ScatterChart
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid stroke="#4A5568"/>
        <XAxis type="number" dataKey="artistPopularity" name="艺人热度" stroke="#A0AEC0" />
        <YAxis type="number" dataKey="trackPopularity" name="曲目热度" stroke="#A0AEC0"/>
        {/* FIX: The `range` prop for ZAxis expects a tuple `[number, number]`, but was inferred as `number[]`. */}
        <ZAxis type="number" dataKey="followers" name="粉丝数" domain={domain} range={range} />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} content={<CustomTooltip />} />
        <Legend formatter={(value) => value.charAt(0).toUpperCase() + value.slice(1)} />
        <Scatter name="艺人" data={data} fill="#1DB954" fillOpacity={0.6} shape="circle" />
      </ScatterChart>
    </ResponsiveContainer>
  );
};

export default PopularityBubbleChart;