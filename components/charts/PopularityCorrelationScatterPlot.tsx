
import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ZAxis } from 'recharts';

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-gray-700 p-2 border border-gray-600 rounded-md text-white text-xs max-w-xs break-words">
        <p className="label font-bold">{data.name}</p>
        <p className="intro" style={{color: '#8884d8'}}>{`艺人热度: ${data.artistPopularity}`}</p>
        <p className="intro" style={{color: '#82ca9d'}}>{`曲目热度: ${data.trackPopularity}`}</p>
      </div>
    );
  }
  return null;
};

interface PopularityCorrelationScatterPlotProps {
    data: any[];
}

const PopularityCorrelationScatterPlot: React.FC<PopularityCorrelationScatterPlotProps> = ({ data }) => {
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
        <CartesianGrid stroke="#4A5568" />
        <XAxis type="number" dataKey="artistPopularity" name="艺人热度" unit="" stroke="#A0AEC0" />
        <YAxis type="number" dataKey="trackPopularity" name="曲目热度" unit="" stroke="#A0AEC0"/>
        <Tooltip cursor={{ strokeDasharray: '3 3' }} content={<CustomTooltip />} />
        <Scatter name="曲目" data={data} fill="#1DB954" shape="circle" />
      </ScatterChart>
    </ResponsiveContainer>
  );
};

export default PopularityCorrelationScatterPlot;
