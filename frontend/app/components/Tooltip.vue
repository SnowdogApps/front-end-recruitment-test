<template>
  <div class="tooltip">
    <Icon :name="tooltipIcon" />
    <div class="tooltip-box" :class="{ 'tooltip-right': tooltipPosition == 'right', 'tooltip-center': tooltipPosition == 'center' }">
      <div class="tooltip-text">
        {{ tooltipText }}
        {{ tooltipPosition }}
      </div>
    </div>
  </div>
</template>

<script>
  import Icon from '@/components/Icon.vue'

  export default {
    name: 'Tooltip',
    components: { Icon },
    props: {
      tooltipText: String,
      tooltipIcon: String,
      tooltipPosition: {
        type: String,
        validator(value) {
          return [ "left", "center", "right" ].includes(value)
        }
      },
    }
  }
</script>

<style lang="scss">
  .tooltip {
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;
    &-box, .icon {
      transition: .3s ease-in-out;
    }
    &-box {
      opacity: 0;
      visibility: hidden;
      position: absolute;
      left: 0;
      bottom: calc(100% + 5px);
      background: #fff;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
      border-radius: 4px;
      cursor: default;
      font-size: 12px;
      padding: 8px;
      width: max-content;
      max-width: 250px;
      &:after {
        content: "";
        position: absolute;
        top: calc(100% - 4px);
        left: 7px;
        width: 8px;
        height: 8px;
        background-color: #fff;
        transform: rotate(45deg);
      }
      &.tooltip-right {
        left: auto;
        right: 0;
        &:after {
          left: auto;
          right: 7px;
        }
      }
      &.tooltip-center {
        left: 50%;
        transform: translateX(-50%);
        &:after {
          left: 50%;
          transform: translateX(-50%) rotate(45deg);
        }
      }
    }
    &:hover {
      .icon {
        color: #000;
      }
      .tooltip-box {
        opacity: 1;
        visibility: visible;
      }
    }
  }
</style>