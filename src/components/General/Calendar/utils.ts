export function deepMerge(target: any, ...sources: any) {
  for (const source of sources) {
    for (const key in source) {
      if (source[key] instanceof Object) {
        Object.assign(source[key], deepMerge(target[key], source[key]));
      }
    }
    Object.assign(target || {}, source);
  }
  return target;
}
