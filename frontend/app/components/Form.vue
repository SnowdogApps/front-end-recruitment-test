<template>
  <form class="form" @submit.prevent="submitOrder">
    <div class="form-box">
      <div class="form-col w-100 tablet-w-66 mb-0">
        <div class="form-block">
          <Title :text="'Personal Information'" :counter="1" />
          <div class="form-box">
            <div class="form-col w-100 tablet-w-50">
              <BaseInput v-model="form.firstName.value" :placeholder="'First Name'" :label="'First Name'" :isSubmitted="isSubmitted" :validation="{ required: true }" v-model:isValid="form.firstName.isValid" />
            </div>
            <div class="form-col w-100 tablet-w-50">
              <BaseInput v-model="form.lastName.value" :placeholder="'Last Name'" :label="'Last Name'" :isSubmitted="isSubmitted"  :validation="{ required: true }" v-model:isValid="form.lastName.isValid" />
            </div>
          </div>
          <div class="form-box">
            <div class="form-col w-100">
              <BaseInput v-model="form.email.value" :placeholder="'email@email.com'" :label="'Email'" :isSubmitted="isSubmitted" :validation="{ required: true, type: 'email' }" v-model:isValid="form.email.isValid" />
            </div>
          </div>
          <div class="form-box">
            <div class="form-col w-100 tablet-w-50">
              <Select
                v-model="form.country.value"
                :label="'Country'"
                :options="countries"
                :default="'Select the country'"
                :isSubmitted="isSubmitted"
                :validation="{ required: true }" v-model:isValid="form.country.isValid"
              />
            </div>
            <div class="form-col w-100 tablet-w-50">
              <BaseInput v-model="form.postalCode.value" :placeholder="'00000'" :label="'Postal Code'" v-maska="'#####'" :isSubmitted="isSubmitted" :validation="{ required: true, type: 'postalCode' }" v-model:isValid="form.postalCode.isValid" />
            </div>
          </div>
          <div class="form-box">
            <div class="form-col w-100">
              <BaseInput v-model="form.phoneNumber.value" :placeholder="'000-000-000'" :label="'Phone Number'" v-maska="'###-###-###'" :isSubmitted="isSubmitted" :validation="{ required: true, type: 'phoneNumber' }" v-model:isValid="form.phoneNumber.isValid" />
            </div>
          </div>
        </div>
        <div class="form-block mb-0">
          <Title :text="'Payments Details'" :counter="2" :icon="'lock'" />
          <div class="form-box">
            <div class="form-col w-100">
              <div class="form-box">
                <div class="form-col w-100">
                  <BaseInput v-model="form.cardNumber.value" :placeholder="'0000-0000-0000-0000'" :label="'Credit Card Number'" :icon="'visa'" v-maska="'####-####-####-####'" :isSubmitted="isSubmitted" :validation="{ required: true, type: 'cardNumber' }" v-model:isValid="form.cardNumber.isValid" />
                </div>
              </div>
              <div class="form-box">
                <div class="form-col w-100 tablet-w-50">
                  <BaseInput :type="'password'" v-model="form.cvvCode.value" :placeholder="'CVV'" :label="'Security Code'" v-maska="'###'"  :isSubmitted="isSubmitted" :validation="{ required: true, type: 'cvvCode' }" v-model:isValid="form.cvvCode.isValid" :tooltip="true" :tooltipText="'Security Code'" :tooltipIcon="'question'" />
                </div>
                <div class="form-col w-100 tablet-w-50">
                  <BaseInput v-model="form.expirationDate.value" :placeholder="'MM / YY'" :label="'Expiration Date'" v-maska="'## / ##'" :isSubmitted="isSubmitted" :validation="{ required: true, type: 'expirationDate' }" v-model:isValid="form.expirationDate.isValid" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="form-block pt-32 border-top-1 border-black" v-if="!isDesktop">
          <div class="form-box">
            <div class="form-col w-100 mb-0">
              <OrderCard/>
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
      <div class="form-col pt-40 w-100 tablet-w-33 mb-0" v-if="isDesktop">
        <OrderCard/>
      </div>
    </div>
  </form>
</template>

<script>
  import axios from 'axios'

  import Title from '@/components/Title.vue'
  import BaseInput from '@/components/BaseInput.vue'
  import Button from '@/components/Button.vue'
  import Select from '@/components/Select.vue'
  import OrderCard from '@/components/OrderCard.vue'

  export default {
    name: 'Form',
    components: { Title, BaseInput, Button, Select, OrderCard },

    data() {
      return {
        countries: [
          { id: 1, name: "United States" },
          { id: 2, name: "United Kingdom" },
          { id: 3, name: "Poland" }
        ],
        form: {
          country: {
            value: "",
            isValid: false,
          },
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
          },
          cardNumber: {
            value: "",
          },
          cvvCode: {
            value: "",
          },
          expirationDate: {
            value: "",
          },
        },
        isSubmitted: false,
        isDesktop: false,
      }
    },

    methods: {
      convertData() {
        return {
          firstName: this.form.firstName.value,
          lastName: this.form.lastName.value,
          email: this.form.email.value,
          country: this.form.country.value,
          postalCode: this.form.postalCode.value,
          phoneNumber: this.form.phoneNumber.value.replace(
            /(\d{3})-(\d{3})-(\d{3})/, "$1$2$3"
          ),
          cardNumber: this.form.cardNumber.value.replace(
            /(\d{4})-(\d{4})-(\d{4})-(\d{4})/,
            "$1$2$3$4"
          ),
          cvvCode: this.form.cvvCode.value,
          expirationDate: this.form.expirationDate.value,
        }
      },
      submitOrder() {
        this.isSubmitted = true;

        if (this.isFormValid()) {
          const url = '/order'
          const postData = this.convertData();

          console.log(postData);
          axios.post(
            url,
            postData,
            {
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json, text-plain, */*",
                "X-Requested-With": "XMLHttpRequest",
                "Access-Control-Allow-Origin": "*",
              },
            }
          )
          .catch(error => {
            console.log(error);
          })
        } else {
          console.log("Form is NOT valid", this.form);
        }
      },
      isFormValid() {
        const validationFields = Object.values(this.form).map(field => field.isValid);
        return validationFields.includes(false) ? false : true;
      },
      onBreakpoint() {
        this.$nextTick(function () {
          const checkBreakpoint = () => {
            if (matchMedia('only screen and (min-width: 768px)').matches) {
              this.isDesktop = true;
            } else {
              this.isDesktop = false;
            }
          }
          window.addEventListener('load', checkBreakpoint);
          window.addEventListener('resize', checkBreakpoint);
        })
      }
    },

    mounted() {
      this.onBreakpoint();
    }
  }
</script>

<style lang="scss">
  @use "sass:math";

  $form-padding: 24px;
  $form-block-margin: 36px;

  $form-gap: 16px;

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
      margin-left: -(math.div($form-gap, 2));
      margin-right: -(math.div($form-gap, 2));
    }
    &-col {
      padding-left: math.div($form-gap, 2);
      padding-right: math.div($form-gap, 2);
      margin-bottom: $form-gap;
    }
  }
</style>
