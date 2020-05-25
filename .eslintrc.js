module.exports = {
  "parser": "vue-eslint-parser",
  "parserOptions": {
    "parser": "babel-eslint",
    "sourceType": "module",
    "allowImportExportEverywhere": false,
  },
  "extends": [
    require.resolve('dev-hook-utils/dist/hooks/eslintrc.js')
  ],
  "globals": {
    "APP_VERSION": true,
    "$": true,
    "Cropper": true,
    "angular": true,
    "describe": true,
    "it": true,
    "expect": true,
    "beforeEach": true,
    "afterEach": true
  },
  "rules": {
    "no-param-reassign": [
      "error",
      {
        "props": false
      }
    ],
    "quotes": [
      2,
      "single",
      {
        "avoidEscape": true,
        "allowTemplateLiterals": true
      }
    ],
    "import/no-unresolved": [
      "off"
    ],
    "angular/angularelement": 0,
    "angular/document-service": 0,
    "angular/window-service": 0,
    "no-underscore-dangle": 0,
    "global-require": 0,
    "import/extensions": ['off', 'never'],
    "comma-dangle": [
      "error",
      "only-multiline"
    ],
    "indent": ["error", 2, { "SwitchCase": 1 }],
    "class-methods-use-this": 0,
  }
};
