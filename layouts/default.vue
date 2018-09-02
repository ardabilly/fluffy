<template>
  <el-container>
    <el-aside width="250px">
      <aside-user />
      <aside-menu />
    </el-aside>
    <el-container>
      <el-header>Calendar</el-header>
      <el-main>
        <div class="el-main__content">
          <nuxt/>
        </div>
      </el-main>
    </el-container>
    <el-aside width="350px" v-if="isEnable">
      <aside-event />
    </el-aside>
  </el-container>
</template>

<script>
import AsideEvent from '~/components/AsideEvent.vue'
import AsideUser from '~/components/AsideUser.vue'
import AsideMenu from '~/components/AsideMenu.vue'

export default {
  components: {
    'aside-event': AsideEvent,
    'aside-user': AsideUser,
    'aside-menu': AsideMenu
  },
  data () {
    return {
      isEnable: true
    }
  }
}
</script>

