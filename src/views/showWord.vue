<!--
英语单词显示
-->
<template>
  <div>
    <el-card v-for="word in wordList" :key="word.wordId"
             shadow="hover">
      <el-descriptions :title="word.wordSelf">
        <el-descriptions-item label="单词类型:" class-name="wordInfo">
          <ul class="wordTypeList">
            <li v-for="type in word.wordTypeList" :key="type.wordTypeId">
              <el-tag size="mini">{{ type.wordTypeName }}</el-tag>
            </li>
          </ul>
        </el-descriptions-item>
        <el-descriptions-item label="中文翻译:" class-name="wordInfo">
          <ul class="chineseList">
            <li v-for="chinese in word.chineseList" :key="chinese.chineseId">
              <el-tag size="mini">{{ chinese.chineseInfo }}</el-tag>
            </li>
          </ul>
        </el-descriptions-item>
        <el-descriptions-item label="单词标签:" class-name="wordInfo">
          <ul class="tagList">
            <li v-for="tag in word.wordTagList" :key="tag.wordTagId">
              <el-tag size="mini">{{ tag.wordTagName }}</el-tag>
            </li>
          </ul>
        </el-descriptions-item>
        <el-descriptions-item label="单词备注">{{ word.wordComment }}</el-descriptions-item>
      </el-descriptions>
    </el-card>
  </div>
</template>

<script>


import { API } from '@/api'

export default {
  name: 'show-word',
  props: ['thisTagId'],
  data () {
    return {
      wordList: []
    }
  },
  methods: {
    showWord () {
      API.word.getWordByTagId({ tagId: this.thisTagId }).then((res) => {
        this.wordList = res.data
      })
    },
  },
  created () {
    this.showWord()
  },
  watch: {
    thisTagId () {
      this.showWord()
    }
  },
  $route () {
    this.showWord()
  }
}
</script>

<style scoped lang="scss">
.el-card {
  margin: 10px;
}

.wordInfo {
  ul {
    display: inline-block;

    li {
      float: left;
      line-height: 1rem;
      height: 1rem;
    }
  }
}
</style>
