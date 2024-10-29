/*
 * @Author: Diana Tang
 * @Date: 2024-10-29 21:42:15
 * @LastEditors: Diana Tang
 * @Description: logData
 * @FilePath: /DT-performance-monitor-SDK/src/data/log.ts
 */
import { reportPerf } from '../data/reportPerf';
import { roundByTwo } from '../helpers/utils';

  export const logData = (
    measureName: string,
    metric: any,
    customProperties?: object
  ): void => {
    // 遍历 metric 对象的所有键，将所有数值类型的数据保留小数点后两位
    Object.keys(metric).forEach((key) => {
      if (typeof metric[key] === 'number') {
        metric[key] = roundByTwo(metric[key]);  // 调用 roundByTwo 函数来将数值保留到小数点后两位
      }
    });
    // 将性能度量数据发送到外部跟踪服务
     // Sends the metric to an external tracking service
    reportPerf(measureName, metric, customProperties);
  };