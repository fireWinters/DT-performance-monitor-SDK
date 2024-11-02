/*
 * @Author: Diana Tang
 * @Date: 2024-10-29 21:42:15
 * @LastEditors: Diana Tang
 * @Description: logData
 * @FilePath: /DT-performance-monitor-SDK/src/data/log.ts
 */
import { reportPerf } from '../data/reportPerf';
import { roundByTwo } from '../helpers/utils';
import { config } from '../config';

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
  /**
 * Dispatches the metric duration into internal logs
 * and the external time tracking service.
 */
export const logMetric = (
  duration: number,
  measureName: string,
  customProperties?: object
): void => {
  const duration2Decimal = roundByTwo(duration);
  if (duration2Decimal <= config.maxTime && duration2Decimal >= 0) {
    // 从内部或者外部的报告工具报告指标数据
    reportPerf(measureName, duration2Decimal, customProperties);
  }
};
