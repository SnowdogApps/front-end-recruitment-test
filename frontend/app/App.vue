<template>
  <MainWrapper>
    <Form/>
  </MainWrapper>
</template>

<script>
  import MainWrapper from '@/components/MainWrapper.vue'
  import Form from '@/components/Form.vue'

  export default {
      name:'app',
      components: { MainWrapper, Form }
  }
</script>

<style lang="scss">
  @import "../assets/css/app.scss";
</style>