<!--
标签显示
-->
<template>
  <div class="showTag">
    <showInfoTop :title="thisTagGroup.tagGroupName"></showInfoTop>
    <el-card v-for="tag in tagList" :key="tag.wordTagId"
             shadow="hover">
      <template #header>
        <div class="card-header">
          <span>单词标签</span>
          <el-button class="button" type="text" @click="getWordByTagId(tag.wordTagId)">相关单词</el-button>
        </div>
      </template>
      <ul>
        <li>标签名称: {{ tag.wordTagName }}</li>
        <li>标签备注: {{ tag.tagComment }}</li>
      </ul>
    </el-card>
  </div>
</template>

<script>


import { API } from '@/api'
import showInfoTop from '@/views/showInfoTop'

export default {
  name: 'showTag',
  props: ['thisTagGroup', 'setThisTagId'],
  components: { showInfoTop },
  data () {
    return {
      tagList: []
    }
  },
  methods: {
    //根据标签组Id查询标签
    getTagByGroupId () {
      API.wordTag.getTagByGroupId({ groupId: this.thisTagGroup.tagGroupId }).then((res) => {
        this.tagList = res.data
      })
    },
    getWordByTagId (tagId) {
      this.setThisTagId(tagId)
      this.$router.replace({ name: 'showWord' })
    }
  },
  watch: {
    thisTagGroup () {
      this.getTagByGroupId()
    },
    $route () {
      this.getTagByGroupId()
    },
  },
  created () {
    this.getTagByGroupId()
  }
}
</script>

<style scoped lang="scss">
.showTable {
  height: 75vh;
}

.el-card {
  width: 20%;
  float: left;
  margin: 10px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
}
</style>
