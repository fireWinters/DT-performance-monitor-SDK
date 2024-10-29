/*
 * @Author: Diana Tang
 * @Date: 2024-10-29 21:57:36
 * @LastEditors: Diana Tang
 * @Description: some description
 * @FilePath: /DT-performance-monitor-SDK/src/helpers/getNetworkInformation.ts
 */
import { WN } from '../data/constants';
import {
  EffectiveConnectionType,
  IDianaTangNetworkInformation,
} from '../typings/types';

export let et: EffectiveConnectionType = '4g';
export let sd = false;

export const getNetworkInformation = (): IDianaTangNetworkInformation => {
  if ('connection' in WN) {
    const dataConnection = (WN as any).connection;
    if (typeof dataConnection !== 'object') {
      return {};
    }
    et = dataConnection.effectiveType;
    sd = !!dataConnection.saveData;
    return {
      downlink: dataConnection.downlink,
      effectiveType: dataConnection.effectiveType,
      rtt: dataConnection.rtt,
      saveData: !!dataConnection.saveData,
    };
  } else {
    //todo 这里我们使用多普勒测速法或者直接用图片探测法
  }
  return {};
};
