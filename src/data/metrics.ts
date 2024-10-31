/*
 * @Author: Diana Tang
 * @Date: 2024-10-31 17:35:12
 * @LastEditors: Diana Tang
 * @Description: some description
 * @FilePath: /DT-performance-monitor-SDK/src/data/metrics.ts
 */
import { IMetricMap, IDianaTangDataConsumption } from '../typings/types';

export const metrics: IMetricMap = {};
export const cls = {
  value: 0,
};
export const fcp = {
  value: 0,
};
export const lcp = {
  value: 0,
};
export const fcpEntryName = 'first-contentful-paint';
export const rt: { value: IDianaTangDataConsumption } = {
  value: {
    beacon: 0,
    css: 0,
    fetch: 0,
    img: 0,
    other: 0,
    script: 0,
    total: 0,
    xmlhttprequest: 0,
  },
};
//主线程总阻塞时间
export const tbt = {
  value: 0,
};
