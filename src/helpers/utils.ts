/*
 * @Author: Diana Tang
 * @Date: 2024-10-29 21:45:15
 * @LastEditors: Diana Tang
 * @Description: some description
 * @FilePath: /DT-performance-monitor-SDK/src/helpers/utils.ts
 */
import { W } from "../data/constants";

export const roundByTwo = (num: number) => {
  // Round the given number to two decimal places (将给定的数字保留小数点后两位)
  return parseFloat(num.toFixed(2));
};

export const convertToKB = (bytes: number): number | null => {
  // Convert bytes to kilobytes, rounded to two decimal places (将字节转换为千字节，并保留两位小数)
  if (typeof bytes !== "number") {
    return null;
    // Return null if the input is not a number (如果输入不是数字，则返回 null)
  }
  // Convert bytes to kilobytes and round to two decimal places (将字节转换为千字节并保留两位小数)
  return roundByTwo(bytes / Math.pow(1024, 2));
};

/**
 * PushTask to requestIdleCallback
 * 高效利用每一帧进行数据的收集
 */
export const pushTask = (cb: any): void => {
  if ("requestIdleCallback" in W) {
    // If requestIdleCallback is available, use it to run the callback with a timeout of 3000 milliseconds (如果 requestIdleCallback 可用，使用它运行回调并设置 3000 毫秒的超时)
    (W as any).requestIdleCallback(cb, { timeout: 3000 });
  } else {
    // If requestIdleCallback is not available, run the callback immediately (如果 requestIdleCallback 不可用，则立即运行回调)
    cb();
  }
};
