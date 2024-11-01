
import { config } from '../config';
import { logData } from '../data/log';
import { rt } from '../data/metrics';
import { IPerformanceEntry } from '../typings/types';
/**
 * @remarks 初始化资源时间
 * @param performanceEntries - 性能条目
 * @public
 */
export const initResourceTiming = (performanceEntries: IPerformanceEntry[]) => {
  //console.log('狗狗', performanceEntries);
  performanceEntries.forEach((entry) => {
    //console.log('狗狗', 1);
    if (config.isResourceTiming) {
      logData('resourceTiming', entry);
    }
    if (entry.decodedBodySize && entry.initiatorType) {
      const bodySize = entry.decodedBodySize / 1000;
      rt.value[entry.initiatorType] += bodySize;
      rt.value.total += bodySize;
    }
  });
};

