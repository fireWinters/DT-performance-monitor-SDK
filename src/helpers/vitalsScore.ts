/*
 * @Author: Diana Tang
 * @Date: 2024-10-29 21:59:24
 * @LastEditors: Diana Tang
 * @Description: some description
 * @FilePath: /DT-performance-monitor-SDK/src/helpers/vitalsScore.ts
 */
import { IDianaTangData, IVitalsScore } from '../typings/types';

//https://web.dev/vitals/
const fcpScore = [1000, 2500];
const lcpScore = [2500, 4000];
const fidcore = [100, 300];
const clsScore = [0.1, 0.25];
const tbtScore = [300, 600];

export const webVitalsScore: Record<string, number[]> = {
  fp: fcpScore,
  fcp: fcpScore,
  lcp: lcpScore,
  lcpFinal: lcpScore,
  fid: fidcore,
  fidVitals: fidcore,
  cls: clsScore,
  clsFinal: clsScore,
  tbt: tbtScore,
  tbt5S: tbtScore,
  tbt10S: tbtScore,
  tbtFinal: tbtScore,
};

export const getVitalsScore = (
  measureName: string,
  value: IDianaTangData
): IVitalsScore => {
  if (!webVitalsScore[measureName]) {
    return null;
  }
  // 增加一个类型限制，不然tsc执行不过去
  if (typeof value === 'number'&&value <= webVitalsScore[measureName][0]) {
    return 'good';
  }
  if (typeof value === 'number'&&value <= webVitalsScore[measureName][1]) {
    return 'needsImprovement';
  }else{
    return 'poor';
  }
  
  // if (value <= webVitalsScore[measureName][0]) {
  //   console.log(typeof value,'数值',value)
  //   return 'good';
  // }
  // return value <= webVitalsScore[measureName][1] ? 'needsImprovement' : 'poor';
};
