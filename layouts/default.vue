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
    <el-aside width="400px" v-if="hasAside">
      <aside-detail />
    </el-aside>
  </el-container>
</template>

<script>
import AsideDetail from '~/components/AsideDetail.vue'
import AsideUser from '~/components/AsideUser.vue'
import AsideMenu from '~/components/AsideMenu.vue'

export default {
  components: {
    'aside-detail': AsideDetail,
    'aside-user': AsideUser,
    'aside-menu': AsideMenu
  },
  computed: {
    hasAside () {
      return this.$store.state.aside
    }
  }
}
</script>

