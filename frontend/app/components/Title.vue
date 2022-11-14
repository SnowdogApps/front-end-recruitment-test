<template>
  <div class="title-box">
    <span class="title-counter">{{ counter }}</span>
    <h2 class="title">{{ text }}</h2>
    <Icon v-if="icon" :name="icon" />
  </div>
</template>

<script>
  import Icon from '@/components/Icon.vue'

  export default {
    name: 'Title',
    components: { Icon },
    props: {
      text: {
        type: String,
        required: true,
      },
      counter: {
        type: Number,
        required: true,
        default: 0,
        validator(value) {
            return value >= 0;
        }
      },
      icon: String,
    }
  }
</script>

<style lang="scss">
  $font-size: 14px;
  $font-size-desktop: 16px;

  $counter-width: 24px;
  $counter-height: $counter-width;
  $counter-gap: 8px;

  .title {
    font-size: $font-size;
    line-height: 16px;
    text-transform: uppercase;
    font-weight: 900;
    letter-spacing: 0.06em;
    @media (min-width: 768px) {
      font-size: $font-size-desktop;
    }
    &-box {
      display: flex;
      align-items: center;
      margin-bottom: 16px;
      height: 24px;
      .icon {
        margin-left: 10px;
      }
    }
    &-counter {
      color: #fff;
      font-size: 16px;
      line-height: 1;
      background: #000;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: $counter-gap;
      width: $counter-width;
      height: $counter-height;
      @media (min-width: 1200px) {
        margin-left: -($counter-width + $counter-gap);
      }
    }
  }

</style>