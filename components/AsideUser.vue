<template>
  <section class="el-user">
    <div class="el-user_avatar">
      <img src="https://dummyimage.com/400x400/548af0/fff" alt="Avatar">
    </div>
    <div class="el-user_name">
      John Doe
    </div>
    <div class="el-user_task">
      <span>Current Task:</span>
      <el-progress :percentage="70"></el-progress>
    </div>
  </section>
</template>
