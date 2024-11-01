/*
 * @Author: Diana Tang
 * @Date: 2024-10-31 18:26:06
 * @LastEditors: Diana Tang
 * @Description: some description
 * @FilePath: /DT-performance-monitor-SDK/src/tools/isSupported.ts
 */

import { W, WP } from '../data/constants';

/**
 * True if the browser supports the Navigation Timing API,
 * User Timing API and the PerformanceObserver Interface.
 * In Safari, the User Timing API (performance.mark()) is not available,
 * so the DevTools timeline will not be annotated with marks.
 * Support: developer.mozilla.org/en-US/docs/Web/API/Performance/mark
 * Support: developer.mozilla.org/en-US/docs/Web/API/PerformanceObserver
 * Support: developer.mozilla.org/en-US/docs/Web/API/Performance/getEntriesByType
 */
export const isPerformanceSupported = (): boolean => {
  return WP && !!WP.getEntriesByType && !!WP.now && !!WP.mark;
};
