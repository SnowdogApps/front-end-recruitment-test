<template>
  <div class="form-block">
    <form class="form">
      <Title :text="'Personal Information'" :counter="1" />
      <input type="text">

      <Title :text="'Payments Details'" :counter="2" :icon="'lock'" />
    </form>
  </div>
</template>

<script>
  import Title from '@/components/Title.vue'

  export default {
    name: 'Form',
    components: { Title },
  }
</script>