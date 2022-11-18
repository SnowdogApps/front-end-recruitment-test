<template>
  <div class="select-block" :class="{'is-invalid': isSubmitted && this.error}">
    <div class="select" :tabindex="tabindex" @blur="open = false">
      <div class="selected" :class="{ open: this.open }" @click="open = !this.open">
        <span class="select-label">{{ label }}</span>
        {{ selected }}
      </div>
      <div class="items" :class="{ 'select-hide': !this.open }">
        <div
          v-for="option in options"
          :key="option.id"
          :isValid="isValid"
          @click="onSelect(option)"
        >
          {{ option.name }}
        </div>
      </div>
    </div>
    <span class="error" v-if="isSubmitted && this.error">{{ this.error }}</span>
  </div>
</template>

<script>
  export default {
    props: {
      label: String,
      modelValue: String,
      options: {
        type: Array,
        required: true,
      },
      default: {
        type: String,
        required: false,
        default: null,
      },
      tabindex: {
        type: Number,
        required: false,
        default: 0,
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
    },
    data() {
      return {
        selected: this.default
          ? this.default
          : this.options.length > 0
          ? this.options[0]
          : null,
        open: false,
        error: "Please, select the country",
      };
    },
    methods: {
      onSelect(option) {
        const isValid = this.checkValid(option);

        this.selected = option.name;
        this.open = false;

        this.$emit("update:modelValue", option.name);
        this.$emit("update:isValid", isValid);
      },
      
      checkValid(value) {
        if (this.validation.required && value === "") {
          this.error = "Please, select the country";
          return false;
        }

        this.error = "";
        return true;
      },
    }
  };
</script>

<style lang="scss" scoped>
  // select colors
  $select-bg-color: #fff;
  $select-border-width: 1px;
  $select-border-radius: 4px;
  $select-padding-left: 16px;
  
  $error-color: #E0535E;

  .select {
    position: relative;
    width: 100%;
    text-align: left;
    outline: none;
    &-block {
      &.is-invalid {
        .selected {
          border-color: $error-color;
        }
        .select-label, .selected, .error {
          color: $error-color;
        }
        .error {
          font-size: 12px;
          padding-top: 5px;
        }
      }
    }
    
    &-label {
      position: absolute;
      top: 5px + $select-border-width;
      left: $select-padding-left + $select-border-width;
      font-weight: 600;
      font-size: 10px;
      line-height: 16px;
      letter-spacing: 0.0015em;
    }

    .selected {
      background-color: $select-bg-color;
      box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.04);
      border-radius: $select-border-radius;
      color: #000;
      padding-left: 1em;
      cursor: pointer;
      user-select: none;
      border: $select-border-width solid transparent;
      padding-top: 16px;
      padding-left: 16px;
      padding-right: 16px;
      font-size: 14px;
      line-height: 30px;
      font-weight: 400;
      height: 48px;
      &.open {
        border-radius: $select-border-radius $select-border-radius 0px 0px;
        box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.08);
        border-color: #B9B9B9;
        &:after {
          transform: translateY(-50%) rotate(180deg);
        }
      }
      &:after {
        position: absolute;
        content: "";
        top: 50%;
        right: 16px;
        transform: translateY(-50%);
        width: 24px;
        height: 24px;
        transition: .2s ease-in-out;
        background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16.8546 8.35535L11.9937 13.0691L7.13289 8.35535C6.6443 7.88155 5.85503 7.88155 5.36644 8.35535C4.87785 8.82916 4.87785 9.59453 5.36644 10.0683L11.1168 15.6446C11.6054 16.1185 12.3946 16.1185 12.8832 15.6446L18.6336 10.0683C19.1221 9.59453 19.1221 8.82916 18.6336 8.35535C18.145 7.8937 17.3432 7.88155 16.8546 8.35535Z' fill='%236C7689'/%3E%3C/svg%3E%0A");
      }
    }
    .items {
      color: #000;
      border-radius: 0px 0px $select-border-radius $select-border-radius;
      overflow: hidden;
      box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.08);
      border: solid #B9B9B9;
      border-width: 0 $select-border-width $select-border-width;
      position: absolute;
      background-color: #fff;
      left: 0;
      right: 0;
      z-index: 1;
      div {
        color: #000;
        padding: 0 16px;
        cursor: pointer;
        user-select: none;
        font-size: 14px;
        height: 35px;
        line-height: 35px;
        &:hover {
          background-color: #e3e3e3;
        }
      }
    }
    &-hide {
      display: none;
    }
  }
</style>
