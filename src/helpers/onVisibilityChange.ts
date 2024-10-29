/*
 * @Author: Diana Tang
 * @Date: 2024-10-29 21:58:27
 * @LastEditors: Diana Tang
 * @Description: From visibilitychange listener it saves only when
 * the page gets hidden, because it's important to not
 * use the wrong "hidden" value when send timing or logging.
 * @FilePath: /DT-performance-monitor-SDK/src/helpers/onVisibilityChange.ts
 */
import { D } from '../data/constants';

export const visibility = {
  isHidden: false,
};

/**
 * From visibilitychange listener it saves only when
 * the page gets hidden, because it's important to not
 * use the wrong "hidden" value when send timing or logging.
 */
export const didVisibilityChange = function (cb: Function) {
  if (D.hidden) {
    cb();
    visibility.isHidden = D.hidden;
  }
};
