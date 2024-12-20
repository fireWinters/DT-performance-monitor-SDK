/*
 * @Author: Diana Tang
 * @Date: 2024-10-31 17:36:36
 * @LastEditors: Diana Tang
 * @Description: some description
 * @FilePath: /DT-performance-monitor-SDK/src/data/storageEstimate.ts
 */
import { logData } from './log';
import { convertToKB } from '../helpers/utils';

/**
 * The estimate() method of the StorageManager interface asks the Storage Manager
 * for how much storage the app takes up (usage),
 * and how much space is available (quota).
 */
export const reportStorageEstimate = (storageInfo: StorageEstimate) => {
  const estimateUsageDetails =
    'usageDetails' in storageInfo ? (storageInfo as any).usageDetails : {};
  logData('storageEstimate', {
    quota: convertToKB((storageInfo as any).quota),
    usage: convertToKB((storageInfo as any).usage),
    caches: convertToKB(estimateUsageDetails.caches),
    indexedDB: convertToKB(estimateUsageDetails.indexedDB),
    serviceWorker: convertToKB(estimateUsageDetails.serviceWorkerRegistrations),
  });
};
