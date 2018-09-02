<template>
  <el-menu>
    <el-menu-item index="0"><i class="el-icon-menu"></i>Feed</el-menu-item>
    <el-submenu index="1">
      <template slot="title"><i class="el-icon-date"></i>Calendar</template>
      <el-menu-item index="1-3">Today</el-menu-item>
      <el-menu-item index="1-3">Weekly</el-menu-item>
      <el-menu-item index="1-3">Monthly</el-menu-item>
      <el-menu-item index="1-3">Yearly</el-menu-item>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title"><i class="el-icon-star-on"></i>Events Label</template>
      <el-menu-item index="2-3">Option 3</el-menu-item>
      <el-menu-item index="2-3">Option 3</el-menu-item>
      <el-menu-item index="2-3">Option 3</el-menu-item>
      <el-menu-item index="2-3">Option 3</el-menu-item>
    </el-submenu>
    <el-submenu index="3">
      <template slot="title"><i class="el-icon-setting"></i>Settings</template>
      <el-menu-item index="3-3">Option 3</el-menu-item>
      <el-menu-item index="3-3">Option 3</el-menu-item>
      <el-menu-item index="3-3">Option 3</el-menu-item>
      <el-menu-item index="3-3">Option 3</el-menu-item>
    </el-submenu>
  </el-menu>
</template>
