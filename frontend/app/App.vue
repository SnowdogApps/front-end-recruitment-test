<template>
  <section class="page-wrap">
    <Form/>
  </section>
</template>

<script>
  import Form from '@/components/Form.vue'

  export default {
      name:'app',
      components: { Form }
  }
</script>

<style>
  @import "../assets/css/app.css";
</style>