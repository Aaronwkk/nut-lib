const componentList = [
  'SearchPage',
  'FormDialog',
  'FormPage',
  'FormGroup',
  'DetailDialog',
  'DetailPage',
  'TableContainer',
];

const _import = x => require(`./${x}/index.vue`).default;

const components = [];
componentList.forEach((x) => {
  const component = _import(x);
  component.name = x;
  components.push(component);
});

const install = (Vue) => {
  if (install.installed) return;
  components.map(component => Vue.component(component.name, component));
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  ...components
};
