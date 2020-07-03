import componentList from './const'

const _import = x => require(`./${x}/index.vue`).default;

const components = [];
componentList.forEach((x) => {
  const component = _import(x);
  component.name = x;
  components.push(component);
});

export default components
