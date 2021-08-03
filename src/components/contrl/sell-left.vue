<template>
  <div class="left">
    <el-tree :data="tagGroupList"
             :props="defaultProps"
             @node-click="handleNodeClick"
    ></el-tree>
  </div>
</template>

<script>
import { API } from '@/api'

export default {
  name: 'sell-left',
  props: ['setThisTagGroup', 'setThisTagId'],
  data () {
    return {
      tagGroupList: [],
      defaultProps: {
        children: 'childTagGroupSet',
        label: 'tagGroupName'
      }
    }
  },
  methods: {
    handleNodeClick (thisTagGroup) {
      if (!thisTagGroup.tagGroupId) {
        this.setThisTagId('')
        this.$router.replace({ name: 'showWord' })
      } else {
        this.setThisTagGroup(thisTagGroup)
        this.$router.replace({ name: 'showTag' })
      }
    }
  },
  created () {
    API.wordTagGroup.list().then((res) => {
      this.tagGroupList = res.data
      this.tagGroupList.push({ tagGroupName: '无标签单词' })
    })
  }
}
</script>

<style scoped lang="scss">
.left {
  height: 100%;
  min-width: 150px;

  .el-tree {
    border-right: 0;
    height: 100%;
    padding-left: 20px;
    background-color: $body-background;

    .el-tree-node__label {
      padding-right: 20px;
    }
  }
}
</style>
