const protos = ['confirm'];

const _import = x => require(`./${x}.js`).default;

const protoList = [];
protos.forEach((x) => {
  const obj = _import(x);
  protoList.push(obj);
});

const install = (Vue) => {
  if (install.installed) return;
  protoList.map(obj => Vue.prototype[obj.name] = obj.fun);
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  protoList
};
