
import React from 'react';
import Report from './components/Report';
import DashboardCard from './components/DashboardCard';
import PopularArtistsBarChart from './components/charts/PopularArtistsBarChart';
import PopularityTrendLineChart from './components/charts/PopularityTrendLineChart';
import ExplicitPieChart from './components/charts/ExplicitPieChart';
import PopularityCorrelationScatterPlot from './components/charts/PopularityCorrelationScatterPlot';
import GenreRadarChart from './components/charts/GenreRadarChart';
import PopularityBubbleChart from './components/charts/PopularityBubbleChart';
import { MusicIcon } from './components/icons';
import { 
  getTopArtistsByPopularity,
  getPopularityByYear,
  getExplicitDistribution,
  getPopularityBubbleData,
  getArtistTrackPopularityData,
  getGenreStats
} from './data/spotifyData';

const App: React.FC = () => {

  const popularArtistsData = getTopArtistsByPopularity(10);
  const popularityByYearData = getPopularityByYear().filter(d => d.year > 2010);
  const explicitDistributionData = getExplicitDistribution();
  const popularityBubbleData = getPopularityBubbleData();
  const artistTrackPopularityData = getArtistTrackPopularityData();
  const genreStatsData = getGenreStats();


  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen font-sans">
      <div className="container mx-auto p-4 sm:p-6 lg:p-8">
        <header className="mb-8 text-center">
          <div className="flex justify-center items-center gap-4 mb-4">
            <MusicIcon className="w-10 h-10 text-green-400" />
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Spotify 音乐趋势仪表板
            </h1>
          </div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            分析 Spotify 上最新发布的曲目，探索艺人热度、曲目特征和流派趋势。
          </p>
        </header>

        <main>
          <Report />

          <div className="mt-12">
            <h2 className="text-3xl font-bold text-white mb-6 border-b-2 border-green-500 pb-2">可视化图表</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              
              <div className="xl:col-span-1">
                 <DashboardCard 
                    title="十大最受欢迎艺人"
                    description="此图表突出了平均受欢迎程度得分最高的艺人，显示了当前市场的领导者和潮流引领者。"
                    data={popularArtistsData}
                    filename="top_10_popular_artists.csv"
                >
                    <PopularArtistsBarChart data={popularArtistsData} />
                </DashboardCard>
              </div>

              <div className="xl:col-span-2">
                 <DashboardCard 
                    title="曲目平均热度随时间变化趋势"
                    description="此折线图根据发行年份追踪歌曲的平均热度，展示了热度趋势的演变。"
                    data={popularityByYearData}
                    filename="popularity_over_time.csv"
                >
                    <PopularityTrendLineChart data={popularityByYearData} />
                </DashboardCard>
              </div>

              <div className="xl:col-span-1">
                <DashboardCard 
                    title="“露骨”与“非露骨”内容曲目对比"
                    description="按内容分级对数据集进行细分。这揭示了包含露骨歌词的曲目比例。"
                    data={explicitDistributionData}
                    filename="explicit_distribution.csv"
                >
                    <ExplicitPieChart data={explicitDistributionData} />
                </DashboardCard>
              </div>
              
              <div className="xl:col-span-2">
                <DashboardCard 
                    title="艺人粉丝数与热度关系"
                    description="此气泡图探讨了艺人粉丝数、其热度得分以及其曲目热度之间的关系。"
                    data={popularityBubbleData}
                    filename="artist_followers_vs_popularity.csv"
                >
                    <PopularityBubbleChart data={popularityBubbleData} />
                </DashboardCard>
              </div>

              <div className="xl:col-span-2">
                 <DashboardCard 
                    title="艺人热度与曲目热度关系"
                    description="此散点图研究了艺人热度与其单曲热度之间的相关性。"
                    data={artistTrackPopularityData}
                    filename="artist_vs_track_popularity.csv"
                >
                    <PopularityCorrelationScatterPlot data={artistTrackPopularityData} />
                </DashboardCard>
              </div>
              
               <div className="xl:col-span-1">
                 <DashboardCard 
                    title="热门流派特征分析"
                    description="雷达图，比较数据集中前三大最常见流派的平均指标（艺人热度、粉丝数、曲目热度）。"
                    data={genreStatsData}
                    filename="top_genres_characteristics.csv"
                >
                    <GenreRadarChart data={genreStatsData} />
                </DashboardCard>
              </div>
              
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
