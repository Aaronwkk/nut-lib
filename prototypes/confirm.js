import { MessageBox } from 'element-ui';

const fun = (msg = '', title = '提示', confirmDesc = '确定', cancleDesc = '取消', type) => {
  return MessageBox.confirm(msg, title, {
    confirmButtonText: confirmDesc,
    cancelButtonText: cancleDesc,
    type
  })
}

export default {
  name: '$$confirm',
  fun
}
