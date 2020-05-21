import Element from 'element-ui';
import UntLib from '../../packages/index';
// eslint-disable-next-line
import 'element-ui/lib/theme-chalk/index.css';

export default ({
  Vue,
}) => {
  Vue.use(Element, { size: 'mini' });
  Vue.use(UntLib);
};
