<!--
上方菜单
-->
<template>
  <div>
    <el-affix :offset="50" v-show="title">
      标签组名称: {{ title }}
    </el-affix>
    <br>
    <br>
  </div>
</template>

<script>
export default {
  name: 'showInfoTop',
  props: ['title'],
  methods: {},
  created () {
  }
}
</script>

<style scoped lang="scss">

</style>
