<template>
  <section>
    <div class="el-detail_title">Event</div>
    <div class="el-detail_name">
      <el-card shadow="never">
        {{ event.title }}
      </el-card>
    </div>
    <div class="el-detail_title">Date</div>
    <div class="el-detail_date">
      <el-card shadow="never">
        {{ event.startDate }} - {{ event.endDate }}
      </el-card>
    </div>
    <div class="el-detail_title">Description</div>
    <div class="el-detail_description">
      <el-card shadow="never">
        {{ event.description }}
      </el-card>
    </div>
    <div class="el-detail_title">Label</div>
    <div class="el-detail_label">
      <el-tag v-for="tag in event.tags" :key="tag.key">
        {{ tag }}
      </el-tag>
    </div>
    <div class="el-detail_title">Location</div>
    <div class="el-detail_location">
      <el-card shadow="never">
        {{ event.maps }}
      </el-card>
    </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  props: [
    'event'
  ],
  watch: {
    // event (newValue) {
    //   if (newValue) {
    //     const { KEY_MAPS } = this.$store.state.api
    //     axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${newValue.location.join(',')}&key=${KEY_MAPS}`).then(({data}) => {
          
    //       newValue['maps'] = data.results ? data.results[0] : {}
    //       this.event = newValue
    //     })
    //   }
    // }
  }
}
</script>

