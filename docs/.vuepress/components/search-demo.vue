<template>
  <component :is="name" />
</template>

<script>
const componentList = ['basic', 'search-table'];
/* eslint-disable import/no-dynamic-require */
const _import = x => require(`./search/${x}.vue`).default;

const components = componentList.reduce((result, name) => {
  result[name] = _import(name);
  return result;
}, {});

export default {
  components,
  props: {
    name: {
      type: String,
      default: 'basic'
    }
  }
};
</script>
