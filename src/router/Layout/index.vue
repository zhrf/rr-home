<template>
  <div class="layout">
    <router-view></router-view>
    <div class="layout-footer">
      <rr-footer></rr-footer>
    </div>
  </div>
</template>

<script>
import rrFooter from '@/components/Footer'

export default {
  components: {
    rrFooter
  }
}
</script>

<style lang="less" scoped>
  .layout {
    padding: 0px 12px;
    .layout-footer {
      // width: 100%;
      position:absolute;
      bottom: 0px;
      left: 12px;
      right: 12px;
    }
  }
</style>
