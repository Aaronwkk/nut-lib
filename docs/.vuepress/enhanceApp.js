import Element from 'element-ui';
import UntLib from '../../src/index';
import 'element-ui/lib/theme-chalk/index.css';
import enLocale from '../../src/locale/lang/en'
import zhLocale from '../../src/locale/lang/zh-CN'
import ElementLocale from '../../src/locale'
import VueI18n from 'vue-i18n'

const messages = {
  en: {
    ...enLocale
  },
  zh: {
    ...zhLocale
  }
}

export default ({
  Vue,
}) => {

  Vue.use(VueI18n)

  const i18n = new VueI18n({
    locale: 'en',
    messages // set locale messages
  })

  ElementLocale.i18n((key, value) => i18n.t(key, value))

  Vue.use(Element, { size: 'mini' });
  Vue.use(UntLib);

};
