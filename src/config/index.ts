/*
 * @Author: Diana Tang
 * @Date: 2024-10-29 20:53:55
 * @LastEditors: Diana Tang
 * @Description: 有关性能指标和日志记录的设置。
 * @FilePath: /DT-performance-monitor-SDK/src/config/index.ts
 */
import ReportData from '../data/ReportData';
import { IDianaTangConfig, IReportData } from '../typings/types';

export const config: IDianaTangConfig = {
  // Metrics
  reportData: new ReportData({ logUrl: 'hole' }),  // 实例化报告数据，指定日志的 URL 作为 'hole'
  isResourceTiming: false,  // 是否启用资源加载时间的收集，默认为 false
  isElementTiming: false,   // 是否启用元素加载时间的收集，默认为 false
  
  // Logging - 配置有关日志记录的部分
  maxTime: 15000,  // 最大时间限制，设置为 15000 毫秒（15 秒）
};
