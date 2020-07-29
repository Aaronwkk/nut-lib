import { hasOwn } from 'element-ui/src/utils/util';

const RE_NARGS = /(%|)\{([0-9a-zA-Z_]+)\}/g;
/**
 *  String format template
 *  - Inspired:
 *    https://github.com/Matt-Esch/string-template/index.js
 */
export default function(Vue) {

  /**
   * template
   *
   * @param {String} string
   * @param {Array} ...args
   * @return {String}
   */

  function template(string, ...args) {
    let new_args = args
    if (args.length === 1 && typeof args[0] === 'object') {
      new_args = args[0];
    }

    if (!args || !args.hasOwnProperty) {
      new_args = {};
    }

    return string.replace(RE_NARGS, (match, prefix, i, index) => {
      let result;

      if (string[index - 1] === '{' &&
        string[index + match.length] === '}') {
        return i;
      } else {
        result = hasOwn(new_args, i) ? new_args[i] : null;
        if (result === null || result === undefined) {
          return '';
        }

        return result;
      }
    });
  }

  return template;
}
