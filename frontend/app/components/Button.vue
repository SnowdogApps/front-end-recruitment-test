<template>
  <button class="button" :class="{ 'inline': inline, 'has-icon': icon }" :type="type" @click="submitForm">
    <Icon class="button-icon" v-if="icon" :name="icon" />
    <slot></slot>
  </button>
</template>

<script>
  import Icon from '@/components/Icon.vue'

  export default {
    name: 'Button',
    components: { Icon },
    props: {
      type: String,
      icon: String,
      inline: Boolean,
    }
  }
</script>

<style lang="scss">
  $button-color: #fff;
  $button-bg-color: #1AAC02;
  $button-bg-color-hover: #117102;

  $button-height: 48px;
  $button-padding-left: 16px;
  $button-padding-right: $button-padding-left;

  $button-border-radius: 6px;

  $button-icon-right-gap: 10px;

  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: $button-height;
    padding-left: $button-padding-left;
    padding-right: $button-padding-right;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.0125em;
    font-weight: 700;
    text-transform: uppercase;
    color: $button-color;
    background-color: $button-bg-color;
    border: 0 none;
    border-radius: $button-border-radius;
    cursor: pointer;
    transition: .2s ease-in-out;
    &:hover, &:active {
      font-size: 15px;
      background: $button-bg-color-hover;
    }
    &.inline {
      display: inline-flex;
    }
    &.has-icon {
      .button-icon {
        margin-right: $button-icon-right-gap;
      }
    }
  }
</style>