
import React from 'react';
import { exportToCsv } from '../utils/export';
import { DownloadIcon } from './icons';

interface DashboardCardProps {
  title: string;
  description: string;
  children: React.ReactNode;
  data?: any[];
  filename?: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, description, children, data, filename }) => {
  const handleExport = () => {
    if (data && filename) {
      exportToCsv(data, filename);
    }
  };

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-gray-700/50 flex flex-col h-full">
      <div className="flex justify-between items-start mb-1">
        <h3 className="text-lg font-semibold text-green-300">{title}</h3>
        {data && filename && (
          <button
            onClick={handleExport}
            className="text-gray-400 hover:text-white transition-colors duration-200"
            aria-label={`Export ${title} to CSV`}
            title={`Export ${title} to CSV`}
          >
            <DownloadIcon className="w-5 h-5" />
          </button>
        )}
      </div>
      <p className="text-sm text-gray-400 mb-4 flex-shrink-0">{description}</p>
      <div className="flex-grow min-h-[300px] text-xs">
        {children}
      </div>
    </div>
  );
};

export default DashboardCard;
