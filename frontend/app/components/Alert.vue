<template>
  <transition>
    <div :class="`alert ${this.data.classes}`" v-if="this.data.display">
      <div class="alert-box">
        {{ this.data.message }}
        <button class="alert-close" type="button" @click="closeAlert"><span class="close"></span></button>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    props: {
      data: {
        classes: String,
        display: Boolean,
        message: String,
      },
    },
    methods: {
      closeAlert() {
        this.data.display = !this.data.display;
      }
    },
  }
</script>

<style lang="scss" scoped>
  @use "sass:math";

  $alert-bg-color: #fff;

  $alert-success-bg-color: #C5F7DC;
  $alert-success-border-color: #3AC279;
  $alert-error-bg-color: #FFCFCB;
  $alert-error-border-color: #E9594C;

  $alert-padding: 16px;
  $alert-border-radius: 6px;
  $alert-border-left-width: 8px;

  $alert-close-button-width: 16px;
  $alert-close-button-height: $alert-close-button-width;

  .alert {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: max-content;
    padding: $alert-padding;
    z-index: 100;
    &-box {
      color: #403F3D;
      font-size: 14px;
      padding: $alert-padding ($alert-padding + $alert-close-button-width) $alert-padding ($alert-padding + $alert-border-left-width);
      background: $alert-bg-color;
      border-radius: $alert-border-radius;
      overflow: hidden;
      box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.04);
      position: relative;
      &:before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: $alert-border-left-width;
      }
      .alert__success & {
        background: $alert-success-bg-color;
        &:before {
          background: $alert-success-border-color;
        }
      }
      .alert__error & {
        background: $alert-error-bg-color;
        &:before {
          background: $alert-error-border-color;
        }
      }
    }
    &-close {
      position: absolute;
      top: 6px;
      right: 6px;
      width: $alert-close-button-width;
      height: $alert-close-button-height;
      border: 0 none;
      background: transparent;
      cursor: pointer;
      .close {
        display: block;
        position: relative;
        width: 100%;
        height: 100%;
        &:before, &:after {
          content: "";
          display: block;
          width: 1px;
          height: $alert-close-button-height;
          background: #000;
        }
        &:before {
          transform: translateX(math.div($alert-close-button-width, 2)) rotate(45deg);
        }
        &:after {
          transform: translate(math.div($alert-close-button-width, 2), -$alert-close-button-height) rotate(-45deg);
        }
      }
    }
  }
</style>