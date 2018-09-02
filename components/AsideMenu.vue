<template>
  <el-menu :router="true">
    <el-menu-item index="/"><i class="el-icon-menu"></i>Feed</el-menu-item>
    <el-menu-item index="/todo"><i class="el-icon-tickets"></i>Todo</el-menu-item>
    <el-menu-item index="/calendar"><i class="el-icon-date"></i>Calendar</el-menu-item>
    <el-submenu index="disable-1">
      <template slot="title"><i class="el-icon-star-on"></i>Label</template>
      <el-menu-item :index="`/label/${label.variant}`" v-for="(label, key) in labels" :key="key">
        <el-tag :type="label.variant">{{ key }} - #{{ label.text }}</el-tag>
      </el-menu-item>
    </el-submenu>
    <el-submenu index="disable-2">
      <template slot="title"><i class="el-icon-setting"></i>Settings</template>
      <el-menu-item index="/setting/app">Application</el-menu-item>
      <el-menu-item index="/setting/account">Account</el-menu-item>
    </el-submenu>
    <el-menu-item index="/">Sign Out</el-menu-item>
  </el-menu>
</template>

<script>
export default {
  computed: {
    labels () {
      return this.$store.state.labels
    }
  }
}
</script>

