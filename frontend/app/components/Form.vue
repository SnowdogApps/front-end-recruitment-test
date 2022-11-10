<template>
  <div class="form-block">
    <h2>{{ title }}</h2>
    <form class="form">
      <input type="text">
    </form>
  </div>
</template>

<script>
  export default {
    name: 'Form',
    data() {
      return {
        title: 'Form Title',
      }
    }
  }
</script>

<style>
</style>