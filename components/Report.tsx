
import React from 'react';

const Report: React.FC = () => {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-gray-700/50 mb-12 prose prose-invert prose-p:text-gray-300 prose-headings:text-green-300 max-w-none">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-white">数据故事：探索 Spotify 最新发布</h2>
        <p className="text-gray-400">React 工程师分析报告</p>
        <p className="text-sm text-gray-500">日期: {new Date().toLocaleDateString()}</p>
      </div>

      <h3 className="font-semibold text-xl">1. 背景与研究问题</h3>
      <p>
        数字音乐领域由 Spotify 等平台主导，并处于不断变化的状态。每天都有新曲目发布，争夺听众的注意力。本项目旨在通过可视化和分析最近发布的音乐数据集来揭示模式和趋势。我们的中心主题是理解与音乐流行度相关的关键因素。
      </p>
      <p>
        <strong>核心问题：</strong>
      </p>
      <ul>
        <li>此数据集中最受欢迎的艺人是谁？</li>
        <li>近年来，曲目的受欢迎程度是如何演变的？</li>
        <li>艺人的整体受欢迎程度、粉丝数量及单曲受欢迎程度之间有何关系？</li>
        <li>露骨内容在新发布的音乐中是否占有重要地位？</li>
        <li>最主要音乐流派的决定性特征是什么？</li>
      </ul>

      <h3 className="font-semibold text-xl mt-6">2. 数据来源与预处理</h3>
      <p>
        数据来源于一个包含 Spotify 曲目信息的 CSV 文件。它包括曲目和艺人受欢迎程度、粉丝数、专辑详情和流派信息等指标。
      </p>
      <p>
        <strong>预处理步骤：</strong>
      </p>
      <ol>
        <li>将原始 CSV 数据解析为结构化的 JSON 格式。</li>
        <li>将数字字段从字符串转换为数字。</li>
        <li>解析了“explicit”（露骨）内容的布尔值。</li>
        <li>将逗号分隔的 `artist_genres` 字段转换为字符串数组，并将 'N/A' 值处理为空数组。</li>
        <li>使用 `album_release_date` 提取发行年份用于趋势分析。注意：数据集中包含许多未来日期的发布（例如 2025 年），这些数据按原样包含在分析中，可能表示它们是预定发布的曲目。</li>
      </ol>

      <h3 className="font-semibold text-xl mt-6">3. 可视化分析与洞察</h3>
      <p>
        以下图表提供了一个可视化的叙事。我们首先识别顶尖艺人，然后深入研究时间趋势、内容特征以及不同受欢迎程度指标之间的相互作用。
      </p>
      <ul>
        <li><strong>顶级艺人：</strong> 条形图显示，像 Taylor Swift 这样的流行偶像和 David Guetta 这样的主流电音艺人主导了热度榜，证实了他们巨大的市场影响力。</li>
        <li><strong>热度趋势：</strong> 折线图显示了平均曲目热度的波动，近年来出现显著高峰，这可能表明数据中存在近期偏好，或是热度评分方式发生了变化。</li>
        <li><strong>内容分析：</strong> 饼图显示，有相当一部分音乐包含露骨歌词，反映了现代音乐制作中的一个更广泛的趋势。</li>
        <li><strong>相关性：</strong> 散点图和气泡图探讨了艺人与曲目热度之间的复杂关系。虽然存在普遍的正相关，但许多来自高热度艺人的曲目并未达到同等热度，反之亦然。艺人的粉丝数（气泡大小）显然与其整体热度得分相关。</li>
        <li><strong>流派深入分析：</strong> 雷达图对顶级流派进行了有趣的比较。例如，“流行音乐”在艺人热度方面表现出色，而其他流派可能拥有更忠实（粉丝数高）但热度不那么广泛的艺人。</li>
      </ul>

      <h3 className="font-semibold text-xl mt-6">4. 主要发现与结论</h3>
      <p>
        本仪表板提供了对音乐热度的多方面观察。我们的分析表明，虽然艺人的品牌（热度和粉丝数）是一个强有力的指标，但它并不能保证一首歌曲会大火。热度是艺人认知度、流派吸引力、时间趋势和内容之间复杂相互作用的结果。数据表明，这是一个多元化的生态系统，既有功成名就的超级巨星，也有拥有忠实追随者的小众艺人。未来的分析可以通过包含音频特征数据（如舞曲性、能量）来进一步丰富，从而构建一个更全面的模型来解释什么使一首歌受欢迎。
      </p>
    </div>
  );
};

export default Report;
