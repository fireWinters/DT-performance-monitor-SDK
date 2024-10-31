/*
 * @Author: Diana Tang
 * @Date: 2024-10-31 17:34:27
 * @LastEditors: Diana Tang
 * @Description: some description
 * @FilePath: /DT-performance-monitor-SDK/src/data/analyticsTracker.ts
 */
import { IAnalyticsTrackerOptions } from '../typings/types';
const analyticsTracker = (options: IAnalyticsTrackerOptions): void => {
  //   console.log(Math.random());
  //   console.log('-------');
  const {
    metricName,
    eventProperties,
    data,
    navigatorInformation,
    vitalsScore,
  } = options;
  console.log(options);
};
export default analyticsTracker;
