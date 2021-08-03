<template>
  <div class="control">
    <el-container>
      <el-header>
        <sell-header></sell-header>
      </el-header>
      <el-container>
        <el-aside width="auto">
          <sell-left :setThisTagGroup="setThisTagGroup" :setThisTagId="setThisTagId"></sell-left>
        </el-aside>
        <el-container>
          <el-main>
            <router-view :thisTagGroup="thisTagGroup"
                         :setThisTagId="setThisTagId"
                         :thisTagId="thisTagId"></router-view>
          </el-main>
          <el-footer height="6vh">
            <sell-footer></sell-footer>
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>

import sellLeft from '@/components/contrl/sell-left'
import sellFooter from '@/components/contrl/sell-footer'
import sellHeader from '@/components/contrl/sell-header'

export default {
  name: 'Control',
  components: {
    sellLeft,
    sellFooter,
    sellHeader
  },
  data () {
    return {
      thisTagGroup: {},
      thisTagId: '',
    }
  },
  methods: {
    setThisTagGroup (tagGroup) {
      this.thisTagGroup = tagGroup
    },
    setThisTagId (tagId) {
      this.thisTagId = tagId
    }
  },
}
</script>

<style scoped lang="scss">
.control {
  height: 100vh;

  .el-header {
    height: 8vh;
    border-bottom: 1px solid rgba(48, 46, 49, 0.03);
    line-height: 8vh;
  }

  .el-aside {
    height: 92vh;
  }

  .el-main {
    height: 80vh;
  }

  .el-footer {

  }
}
</style>
