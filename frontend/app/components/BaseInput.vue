<template>
  <div class="input-block" :class="{'is-invalid': this.error}">
    <label class="input-box">
      <span class="input-label">{{ label }}</span>
      <input :type="type" :value="modelValue" :isValid="isValid" :placeholder="placeholder" :label="label" class="input" :class="{ 'has-icon': icon, 'has-tooltip': tooltip }" @input="updateValue($event.target.value)">
      <div class="input-icons" v-if="icon || tooltip">
        <Icon v-if="icon" :name="icon" />
        <Tooltip v-if="tooltip" :tooltipText="tooltipText" :tooltipIcon="tooltipIcon" :tooltipPosition="tooltipPosition" />
      </div>
    </label>
    <span class="error" v-if="this.error">{{ this.error }}</span>
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
        error: '',
      }
    },
    props: {
      type: {
        type: String,
        required: true,
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
      validation: Boolean,
      isValid: Boolean,
    },
    emits: ['update:modelValue', 'update:isValid'],
    methods: {
      updateValue(value) {
        this.$emit('update:modelValue', value);
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
      validate() {
        if (this.validation) {
          if (this.modelValue === "") {
            this.error = "This field is required";
          } else {
            this.error = "";
          }
        }
        return;
      }
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
  // input colors
  $input-bg-color: #fff;
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