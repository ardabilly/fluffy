<template>
  <el-menu :router="true">
    <el-menu-item index="/"><i class="el-icon-menu"></i>Feed</el-menu-item>
    <el-menu-item index="/todo"><i class="el-icon-tickets"></i>Todo</el-menu-item>
    <el-menu-item index="/calendar"><i class="el-icon-date"></i>Calendar</el-menu-item>
    <el-submenu index="disable-1">
      <template slot="title"><i class="el-icon-star-on"></i>Label</template>
      <el-menu-item index="/label/primary">
        <el-tag type="primary">0 — #Standard</el-tag>
      </el-menu-item>
      <el-menu-item index="/label/success">
        <el-tag type="success">1 — #Reminder</el-tag>
      </el-menu-item>
      <el-menu-item index="/label/info">
        <el-tag type="info">2 — #Information</el-tag>
      </el-menu-item>
      <el-menu-item index="/label/warning">
        <el-tag type="warning">3 — #Urgent</el-tag>
      </el-menu-item>
      <el-menu-item index="/label/danger">
        <el-tag type="danger">4 — #Danger</el-tag>
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
