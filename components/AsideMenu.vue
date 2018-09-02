<template>
  <el-menu :router="true">
    <el-menu-item index="/"><i class="el-icon-menu"></i>Feed</el-menu-item>
    <el-menu-item index="/calendar"><i class="el-icon-date"></i>Calendar</el-menu-item>
    <el-submenu index="disable-1">
      <template slot="title"><i class="el-icon-star-on"></i>Events Label</template>
      <el-menu-item index="/">Tags 1</el-menu-item>
      <el-menu-item index="/">Tags 2</el-menu-item>
      <el-menu-item index="/">Tags 3</el-menu-item>
    </el-submenu>
    <el-submenu index="disable-2">
      <template slot="title"><i class="el-icon-setting"></i>Settings</template>
      <el-menu-item index="/">Option 3</el-menu-item>
      <el-menu-item index="/">Option 3</el-menu-item>
      <el-menu-item index="/">Option 3</el-menu-item>
      <el-menu-item index="/">Option 3</el-menu-item>
    </el-submenu>
  </el-menu>
</template>
