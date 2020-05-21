const deepCopy = (obj) => {
  if (obj === null || typeof (obj) !== 'object') {
    return obj;
  }
  if ('isActiveClone' in obj) {
    throw new Error('循环引用警告⚠️');
  }
  let temp;
  if (obj instanceof Date) {
    temp = new obj.constructor(obj);
  } else {
    temp = obj.constructor();
  }
  Object.keys(obj).forEach((key) => {
    obj.isActiveClone = null;
    temp[key] = deepCopy(obj[key]);
    delete obj.isActiveClone;
  });
  return temp;
};

export default deepCopy;
