<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

  @Component
export default class SvgInon extends Vue {
    @Prop({ type: String, required: true })
    iconClass: any;

    @Prop({ type: String })
    className: any;

    get iconName() {
      return `#icon-${this.iconClass}`
    }

    get svgClass() {
      if (this.className) {
        return 'svg-icon ' + this.className
      } else {
        return 'svg-icon'
      }
    }
}
</script>

<style scoped>
  .svg-icon {
    width: 1.2em;
    height: 1.2em;
    vertical-align: -0.18em;
    fill: currentColor;
    overflow: hidden;
  }
</style>
