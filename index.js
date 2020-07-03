import components from './packages'
import directives from './directives'

const install = (Vue) => {
  if (install.installed) return;
  components.map(component => Vue.component(component.name, component));
  directives.map(directive => Vue.directive(directive.name, directive));
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  ...components,
  ...directives
};