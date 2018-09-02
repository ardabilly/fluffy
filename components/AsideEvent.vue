<template>
  <section class="el-detail">
    <div v-if="event">
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
    </div>
    <div class="el-card" v-else>
      <div class="el-card__body" align="center">
        <p>This date doesn't have any events</p>
        <el-button type="primary" size="small">Create One <i class="el-icon-plus"></i></el-button>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  computed: {
    event () {
      return this.$store.state.eventDetail
    }
  },
  data () {
    return {
      value7: ''
    }
  },
  watch: {
    event (newValue) {
      if (newValue) {
        const { KEY_MAPS } = this.$store.state.api
        axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${newValue.location.join(',')}&key=${KEY_MAPS}`).then(({data}) => {
          
          newValue['maps'] = data.results ? data.results[0] : {}
          this.event = newValue
        })
      }
    }
  }
}
</script>

