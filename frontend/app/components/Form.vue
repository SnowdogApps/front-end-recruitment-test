<template>
  <form class="form" @submit.prevent="submitForm">
    <div class="form-box">
      <div class="form-col w-100 tablet-w-66 mb-0">
        <div class="form-block">
          <Title :text="'Personal Information'" :counter="1" />
          <div class="form-box">
            <div class="form-col w-100 tablet-w-50">
              <BaseInput :type="'text'" v-model="form.firstName.value" :placeholder="'First Name'" :label="'First Name'" ref="firstName" :validation="true" :isValid="form.firstName.isValid" />
              <!-- {{ this.form.firstName.isValid }} -->
            </div>
            <div class="form-col w-100 tablet-w-50">
              <BaseInput :type="'text'" v-model="form.lastName.value" :placeholder="'Last Name'" :label="'Last Name'" ref="lastName" :validation="true" :isValid="form.lastName.isValid" />
            </div>
          </div>
          <div class="form-box">
            <div class="form-col w-100">
              <BaseInput :type="'email'" v-model="form.email.value" :placeholder="'email@email.com'" :label="'Email'" ref="email" />
            </div>
          </div>
          <div class="form-box">
            <div class="form-col w-100 tablet-w-50">
              <Select
                :label="'Country'"
                :options="['United States', 'Great Britain', 'Poland']"
                :default="'United States'"
                class="select"
              />
            </div>
            <div class="form-col w-100 tablet-w-50">
              <BaseInput :type="'text'" v-model="form.postalCode.value" :placeholder="'00000'" :label="'Postal Code'"/>
            </div>
          </div>
          <div class="form-box">
            <div class="form-col w-100">
              <BaseInput :type="'text'" v-model="form.phoneNumber.value" :placeholder="'000-000-000'" :label="'Phone Number'" />
            </div>
          </div>
        </div>
        <div class="form-block mb-0">
          <Title :text="'Payments Details'" :counter="2" :icon="'lock'" />
          <div class="form-box">
            <div class="form-col w-100">
              <div class="form-box">
                <div class="form-col w-100">
                  <BaseInput :type="'text'" v-model="form.cardNumber.value" :placeholder="'000-0-00-0000-0000'" :label="'Credit Card Number'" :icon="'visa'" />
                </div>
              </div>
              <div class="form-box">
                <div class="form-col w-100 tablet-w-50">
                  <BaseInput :type="'text'" v-model="form.cvvCode.value" :placeholder="'CVV'" :label="'Security Code'" :tooltip="true" :tooltipText="'Security Code'" :tooltipIcon="'question'" />
                </div>
                <div class="form-col w-100 tablet-w-50">
                  <BaseInput :type="'text'" v-model="form.postalCode.value" :placeholder="'MM / YY'" :label="'Expiration Date'"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="form-block mb-0">
          <div class="form-box">
            <div class="form-col w-100 mb-0">
              <Button type="submit" :icon="'cart'">Complete Purchase</Button>
            </div>
          </div>
        </div>
      </div>
      <div class="form-col pt-40 w-100 tablet-w-33">
        YOUR ORDER
        <br>
        Apple Watch Sport $ 580
        <br>
        Total Modern Buckle $ 380
        <br><br>
        Total purchases $ 960.00
        <br>
        Estimated tax $ 0
        <br><br>
        Total $ 960
      </div>
    </div>
  </form>
</template>

<script>
  import Title from '@/components/Title.vue'
  import BaseInput from '@/components/BaseInput.vue'
  import Button from '@/components/Button.vue'
  import Select from '@/components/Select.vue'

  export default {
    name: 'Form',
    components: { Title, BaseInput, Button, Select },

    data() {
      return {
        form: {
          firstName: {
            value: "",
            isValid: false,
          },
          lastName: {
            value: "",
            isValid: false,
          },
          email: {
            value: "",
            isValid: false,
          },
          postalCode: {
            value: "",
            isValid: false,
          },
          phoneNumber: {
            value: "",
            isValid: false,
          },
          cardNumber: {
            value: "",
            isValid: false,
          },
          cvvCode: {
            value: "",
            isValid: false,
          },
        }
      }
    },

    methods: {
      submitForm() {
        this.$refs.firstName.validate();
        this.$refs.lastName.validate();

        console.log("Form submitted", this.form);
      }
    }
  }
</script>

<style lang="scss">
  .form {
    padding: 24px 0;
    @media (min-width: 768px) {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    &-block {
      margin-bottom: 36px;
    }
    &-box {
      display: flex;
      flex-wrap: wrap;
      margin-left: -8px;
      margin-right: -8px;
    }
    &-col {
      padding-left: 8px;
      padding-right: 8px;
      margin-bottom: 16px;
    }
  }
</style>