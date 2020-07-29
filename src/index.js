import components from '../packages'
import directives from '../directives'
import locale from './locale'

const install = (Vue, opts = {}) => {
  if (install.installed) return;

  locale.use(opts.locale)
  locale.i18n(opts.i18n)

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