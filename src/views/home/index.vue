<template>
  <div id="home" style="background: red;width: 100px;height: 300px;">
   {{ vfdd }}
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Home extends Vue {
  vfdd:any = 'sdsdf';
}
</script>

<style scoped>

</style>
