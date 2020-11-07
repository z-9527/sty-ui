/**
 * 获取变量类型
 * @param {*} v
 */
export function getType(v) {
  const string = Object.prototype.toString.call(v);
  const regexp = /(?<= ).*(?=\]$)/;
  return string.match(regexp)[0];
}

/**
 * 类似classnames库的功能
 * @param  {...any} arg
 */
export function classnames(...arg) {
  const classes = [];
  for (const item of arg) {
    const itemType = getType(item);
    switch (itemType) {
      case 'Object': {
        for (const [key, value] of Object.entries(item)) {
          if (value) {
            classes.push(key);
          }
        }
        break;
      }
      case 'Array': {
        const str = classnames(...item);
        classes.push(str);
        break;
      }
      default: {
        if (item) {
          classes.push(item);
        }
      }
    }
  }
  return classes.join(' ');
}

// 简易的防抖函数
export function throttle(func, interval = 100) {
  let timeout;
  let startTime = Date.now();
  return function (event) {
    event.persist && event.persist(); // 保留对事件的引用
    clearTimeout(timeout);
    const curTime = Date.now();
    if (curTime - startTime <= interval) {
      // 小于规定时间间隔时，用setTimeout在指定时间后再执行
      timeout = setTimeout(() => {
        func(event);
      }, interval);
    } else {
      // 重新计时并执行函数
      startTime = curTime;
      func(event);
    }
  };
}
