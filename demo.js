/*
 * @Author: Diana Tang
 * @Date: 2024-10-29 19:46:25
 * @LastEditors: Diana Tang
 * @Description: some description
 * @FilePath: /DT-performance-monitor-SDK/demo.js
 */
// rx.js
console.log('监控数据指标');
const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    console.log(entry,'entry');
  }
});

observer.observe({ entryTypes: ['longtask'] });
