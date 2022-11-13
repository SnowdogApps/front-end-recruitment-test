<template>
  <div class="wrapper">
    <slot></slot>
  </div>
</template>

<script>

  export default {
    name: 'MainWrapper',
  }
</script>

<style lang="scss">
  $wrapper-width: 1024px;
  $horizontal-gap: 24px;
  .wrapper {
    margin: 0 auto;
    max-width: $wrapper-width;
    padding-left: $horizontal-gap;
    padding-right: $horizontal-gap;
  }
</style>