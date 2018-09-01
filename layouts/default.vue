<template>
  <el-container>
    <el-aside width="100px">Aside</el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <nuxt/>
      </el-main>
    </el-container>
    <el-aside width="200px" v-if="isEnable">Aside</el-aside>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      isEnable: false
    }
  }
}
</script>

