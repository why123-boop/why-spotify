
import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const subjects = [
    { name: '艺人热度', key: 'A'},
    { name: '曲目热度', key: 'B'},
    { name: '粉丝基础', key: 'C'},
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const dataPoint = payload[0];
    const subjectName = subjects.find(s => s.key === dataPoint.dataKey)?.name || 'Metric';
    return (
      <div className="bg-gray-700 p-2 border border-gray-600 rounded-md text-white">
        <p className="label font-bold">{`${dataPoint.payload.subject}`}</p>
        <p style={{color: dataPoint.color}}>{`${subjectName}: ${dataPoint.value.toFixed(2)}`}</p>
      </div>
    );
  }
  return null;
};

interface GenreRadarChartProps {
    data: any[];
}

const GenreRadarChart: React.FC<GenreRadarChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid stroke="#4A5568" />
        <PolarAngleAxis dataKey="subject" tick={{ fill: '#A0AEC0', fontSize: 10 }} />
        <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fill: 'transparent' }}/>
        <Tooltip content={<CustomTooltip/>}/>
        {/* FIX: Set name prop for each Radar to be used by the Legend component. */}
        <Radar name="艺人热度" dataKey="A" stroke="#1DB954" fill="#1DB954" fillOpacity={0.6} />
        <Radar name="曲目热度" dataKey="B" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        <Radar name="粉丝基础" dataKey="C" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
        {/* FIX: The `payload` prop on Legend is no longer supported for custom legends. The legend is now generated from the Radar components' `name` props. */}
        <Legend />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default GenreRadarChart;
