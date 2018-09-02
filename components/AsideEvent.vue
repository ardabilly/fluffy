<template>
  <section class="el-detail">
    <div v-if="event">
      <div class="el-detail_title">el-detail_title</div>
      <div class="el-detail_name">
        <el-card shadow="never">
          {{ event.title }}
        </el-card>
      </div>
      <div class="el-detail_title">el-detail_date</div>
      <div class="el-detail_date">
        <el-card shadow="never">
          {{ event.startDate }} - {{ event.endDate }}
        </el-card>
      </div>
      <div class="el-detail_title">el-detail_description</div>
      <div class="el-detail_description">
        <el-card shadow="never">
          {{ event.description }}
        </el-card>
      </div>
      <div class="el-detail_title">el-detail_label</div>
      <div class="el-detail_label">
        <el-tag v-for="tag in event.tags" :key="tag.key">
          {{ tag }}
        </el-tag>
      </div>
      <div class="el-detail_title">el-detail_location</div>
      <div class="el-detail_location">
        <el-card shadow="never">
          {{ event.location }}
        </el-card>
      </div>
    </div>
    <div v-else>
      Select event on calendar
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    event () {
      return this.$store.state.eventDetail
    }
  }
}
</script>

