const directiveList = [
  'actions',
  'inputReg',
]

const _import = x => require(`./${x}/index.js`).default;

const directives = [];
directiveList.forEach((x) => {
  const directive = _import(x);
  directive.name = x;
  directives.push(directive);
});

export default directives
