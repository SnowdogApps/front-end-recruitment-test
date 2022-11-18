<template>
  <div class="input-block" :class="{'is-invalid': isSubmitted && this.error}">
    <label class="input-box">
      <span class="input-label">{{ label }}</span>
      <input
        :type="type"
        :value="modelValue"
        :isValid="isValid"
        :placeholder="placeholder"
        :label="label"
        class="input"
        :class="{ 'has-icon': icon, 'has-tooltip': tooltip }"
        @input="onInput($event.target.value)"
      >
      <div class="input-icons" v-if="icon || tooltip">
        <Icon v-if="icon" :name="icon" />
        <Tooltip v-if="tooltip" :tooltipText="tooltipText" :tooltipIcon="tooltipIcon" :tooltipPosition="tooltipPosition" />
      </div>
    </label>
    <span class="error" v-if="isSubmitted && this.error">{{ this.error }}</span>
  </div>
</template>

<script>
  import Icon from '@/components/Icon.vue'
  import Tooltip from '@/components/Tooltip.vue'

  export default {
    name: 'BaseInput',
    components: { Icon, Tooltip },
    data() {
      return {
        error: "This field is required",
      };
    },
    props: {
      type: {
        type: String,
        default: "text",
      },
      modelValue: String,
      placeholder: String,
      label: String,
      icon: String,
      tooltip: Boolean,
      tooltipText: String,
      tooltipIcon: String,
      tooltipPosition: {
        type: String,
        default: "right",
      },
      validation: {
        type: Object,
        default: () => ({
          required: Boolean,
          type: String,
        }),
      },
      isValid: Boolean,
      isSubmitted: Boolean,
      mask: String,
    },
    emits: ['update:modelValue', 'update:isValid'],
    methods: {
      onInput(value) {
        const isValid = this.checkValid(value);

        this.$emit("update:modelValue", value);
        this.$emit("update:isValid", isValid);
      },
      validateTooltipProps() {
        if (this.tooltip) {
          if (!this.tooltipText) {
            console.error('Tooltip text should not be empty');
          }
          if (!this.tooltipIcon) {
            console.error('Tooltip icon name should not be empty');
          }
        }
      },
      checkValid(value) {
        const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (this.validation.required && value === "") {
          this.error = "This field is required";
          return false;
        }

        if (this.validation.required && this.validation?.type === "" && value.length < 3) {
          this.error = "The field should have at least 3 characters";
          return false;
        }

        if (this.validation.type === "email" && !emailRegex.test(value)) {
          this.error = "Please enter a valid email address";
          return false;
        }

        if (this.validation.type === "postalCode" && value.length < 5) {
          this.error = "Please enter a valid post code that contains 5 digits";
          return false;
        }

        if (this.validation.type === "phoneNumber" && value.length < 11) {
          this.error = "Please enter a phone number code that contains 9 digits";
          return false;
        }

        if (this.validation.type === "cardNumber" && value.length < 14) {
          this.error = "Please enter a valid phone number that contains 16 digits";
          return false;
        }

        if (this.validation.type === "cvvCode" && value.length < 3) {
          this.error = "Please enter a valid CVV code that contains 3 digits";
          return false;
        }

        if (this.validation.type === "expirationDate" && value.length < 7) {
          this.error = "Please enter a valid expiration date that contains 4 digits MM/YY";
          return false;
        }

        this.error = "";
        return true;
      },
    },
    watch: {
      $props: {
        immediate: true,
        handler() {
          this.validateTooltipProps();
        }
      },
    }
  }
</script>

<style lang="scss">
  // input background-color
  $input-bg-color: #fff;

  // input border settings
  $input-border-width: 1px;
  $input-border-radius: 4px;

  // input and label height
  $input-height: 48px;
  $input-label-line-height: 16px;

  // input paddings
  $input-padding-left: 16px;
  $input-padding-right: $input-padding-left;
  $input-padding-top: $input-label-line-height;

  // input icon settings
  $input-icon-color: #6C7689;
  $input-icon-width: 24px;
  $input-icon-height: $input-icon-width;
  $input-icons-gap: 5px;

  $error-color: #E0535E;
  
  .input {
    background: $input-bg-color;
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.04);
    border: $input-border-width solid transparent;
    border-radius: $input-border-radius;
    height: $input-height;
    padding-top: $input-padding-top;
    padding-left: $input-padding-left;
    padding-right: $input-padding-right;
    font-size: 14px;
    line-height: 24px;
    font-weight: 400;
    width: 100%;
    &, &::placeholder {
      color: #000;
    }

    &:focus {
      outline: 0;
      box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.08);
      border-color: #B9B9B9;
    }

    &-block {
      &.is-invalid {
        .input {
          border-color: $error-color;
          &::placeholder,
          &-label {
            color: $error-color;
          }
        }

        .error {
          font-size: 12px;
          padding-top: 5px;
          color: $error-color;
        }
      }
    }

    &-box {
      display: flex;
      align-items: center;
      position: relative;

      .icon {
        color: $input-icon-color;
        width: $input-icon-width;
        height: $input-icon-height;
        & + .tooltip {
          margin-left: $input-icons-gap;
        }
      }
    }

    &-label {
      position: absolute;
      top: 5px + $input-border-width;
      left: $input-padding-left + $input-border-width;
      font-weight: 600;
      font-size: 10px;
      line-height: $input-label-line-height;
      letter-spacing: 0.0015em;
    }

    &-icons {
      display: flex;
      align-items: center;
      position: absolute;
      right: $input-padding-right;
    }
    &.has-icon,
    &.has-tooltip {
      padding-right: $input-padding-left + $input-padding-right + $input-icon-width;
    }
    &.has-icon.has-tooltip {
      padding-right: $input-padding-left + $input-padding-right + ($input-icon-width * 2 + $input-icons-gap);
    }
  }
</style>
