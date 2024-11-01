/*
 * @Author: Diana Tang
 * @Date: 2024-11-01 14:55:00
 * @LastEditors: Diana Tang
 * @Description: some description
 * @FilePath: /DT-performance-monitor-SDK/src/performance/observe.ts
 */
import { config } from '../config';
import { logMetric } from '../data/log';
import { cls, lcp, tbt } from '../data/metrics';
import { initLayoutShift } from './cumulativeLayoutShift';
import { initFirstInputDelay } from './firstInput';
import { perfObservers } from './observeInstances';
import {
  initElementTiming,
  initFirstPaint,
  initLargestContentfulPaint,
} from './paint';
import { po, poDisconnect } from './performanceObserver';
import { initResourceTiming } from './resourceTiming';
export const initPerformanceObserver = (): void => {
  console.log('性能收集开始', Math.random());
  perfObservers[0] = po('paint', initFirstPaint);
  perfObservers[1] = po('first-input', initFirstInputDelay);
  perfObservers[2] = po('largest-contentful-paint', initLargestContentfulPaint);
  //收集页面全部资源性能数据
  if (config.isResourceTiming) {
    console.log('📚 收集页面性能数据');
    po('resource', initResourceTiming);
  }
  perfObservers[3] = po('layout-shift', initLayoutShift);
  if (config.isElementTiming) {
    po('element', initElementTiming);
  }
};

export const disconnectPerfObserversHidden = (): void => {
  if (perfObservers[2]) {
    logMetric(lcp.value, `lcpFinal`);
    poDisconnect(2);
  }
  if (perfObservers[3]) {
    if (typeof perfObservers[3].takeRecords === 'function') {
      perfObservers[3].takeRecords();
    }
    logMetric(cls.value, `clsFinal`);
    poDisconnect(3);
  }
  if (perfObservers[4]) {
    logMetric(tbt.value, `tbtFinal`);
    poDisconnect(4);
  }
};
