export const Local = {
  get: (key: string): any => {
    const value = localStorage.getItem(key);
    if (value === null || value === '') {
      return null;
    }
    try {
      // 尝试将字符串解析为JSON对象/数组
      return JSON.parse(value);
    } catch (e) {
      console.error(e);
      // 如果解析失败，则按原样返回字符串
      // 这里也可以添加更多的逻辑来处理其他可能的类型，如数字、布尔值等
      if (value === 'true') return true;
      if (value === 'false') return false;
      if (!isNaN(Number(value))) return Number(value);
      return value; // 默认返回字符串
    }
  },
  set: (key: string, value: any): void => {
    // 在存储之前，始终将值转换为字符串
    if (typeof value === 'object' && value !== null) {
      localStorage.setItem(key, JSON.stringify(value));
    } else {
      localStorage.setItem(key, String(value));
    }
  },
  remove: (key: string | string[]): void => {
    if (Array.isArray(key)) {
      key.forEach((k) => {
        localStorage.removeItem(k);
      });
    } else {
      localStorage.removeItem(key);
    }
  },
  clear: (): void => {
    localStorage.clear();
  },
};
