/**
 * eg: '[^a-zA-Z]+'
 */
export default {
  inserted(el, binding) {
    const { value } = binding

    const regMethod = (event) => {
      const self = event.target
      const _value = self.value.toString()

      if (!window.isPinyin) {
        self.value = _value.replace(new RegExp(value), '')
      }

      self.dispatchEvent(new Event('input'))
    }

    el.addEventListener('compositionstart', () => { window.isPinyin = true })
    el.addEventListener('compositionend', () => { window.isPinyin = false })
    el.addEventListener('keyup', regMethod)
  }
}
