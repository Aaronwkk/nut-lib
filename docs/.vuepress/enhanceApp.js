import Element from 'element-ui';
import UntLib from '../../src/index';
// eslint-disable-next-line
import 'element-ui/lib/theme-chalk/index.css';
import enLocale from '../../src/locale/lang/en'
import zhLocale from '../../src/locale/lang/zh-CN'
import ElementLocale from '../../src/locale'

// const messages = {
//   en: {
//     ...enLocale
//   },
//   zh: {
//     ...zhLocale
//   }
// }

// ElementLocale.i18n((key, value) => i18n.t(key, value))

export default ({
  Vue,
}) => {

  // Vue.use(VueI18n)

  // const i18n = new VueI18n({
  //   locale: 'en',
  //   messages // set locale messages
  // })

  Vue.use(Element, { size: 'mini' });
  Vue.use(UntLib);

};
