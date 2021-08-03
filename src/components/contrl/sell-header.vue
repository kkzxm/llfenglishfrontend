<template>
  <div class="heater">
    <div class="left">
      <ul>
        <li>
          <el-image
            style="height: 7vh;width: 150px"
            :src="require(`@/assets/img/llfEnglish.png`)"
            alt="llfEnglish"
            title="个人英语单词数据库"
          ></el-image>
        </li>
        <li>
          <span style="height: 1rem;background-color: #ef9e8f;">
            <i class="el-icon-bell">
            </i>这里写一个滚动公告</span>
        </li>
      </ul>
    </div>
    <div class="right">
      <ul>
        <li>
          <span> <el-input
            placeholder="请输入需要查找的内容"
            prefix-icon="el-icon-search"
            v-model="search"></el-input>
          </span>
        </li>
        <li>
          <span><el-link type="info" href="#/about">关于本站</el-link></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sell-heater',
  data () {
    return {
      search: '',
    }
  },
  // 创建完毕状态(里面是操作)
  methods: {},

}
</script>

<style scoped lang="scss">
.heater {
  ul {
    list-style: none;

    li {
      float: left;
    }
  }

  .left {
    float: left;

    li {
      margin-right: 1.5rem;
    }
  }

  .right {
    float: right;
    margin-right: 1.5rem;

    li {
      margin-left: 2rem;
    }
  }
}
</style>
