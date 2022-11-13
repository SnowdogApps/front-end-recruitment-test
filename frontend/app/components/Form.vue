<template>
  <div class="form-block">
    <form class="form">
      <Title :text="'Personal Information'" :counter="1" />
      <Input :type="'text'" v-model="form.name" :placeholder="'First name'" :label="'First name'" />
      <Input :type="'text'" v-model="form.surname" :placeholder="'Last name'" :label="'Last name'"/>
      <Input :type="'text'" v-model="form.email" :placeholder="'Email'" :label="'Email'" :icon="'visa'" :tooltip="true" :tooltipText="'Test text of tooltip'" tooltipIcon="question" />

      <Button type="button" @click="submitForm" :icon="'cart'">Complete Purchase</Button>
      
      <!-- <Title :text="'Payments Details'" :counter="2" :icon="'lock'" /> -->
    </form>
  </div>
</template>

<script>
  import Title from '@/components/Title.vue'
  import Input from '@/components/Input.vue'
  import Button from '@/components/Button.vue'

  export default {
    name: 'Form',
    components: { Title, Input, Button },

    data() {
      return {
        form: {
          name: '',
          surname: '',
          email: '',
        }
      }
    },

    methods: {
      submitForm() {
        console.log("Form submitted", this.form);
      }
    }
  }
</script>