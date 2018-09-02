<template>
  <div class="el-detail">
    <el-button icon="el-icon-back">Back</el-button>
    <div class="line"></div>
    
    <!-- Detail events -->
    <section v-if="detail">
      <event-detail :event="detail"/>
    </section>

    <section v-else>

      <!-- Have events -->
      <section v-if="events.length > 0">
        <el-card v-for="event in events" :key="event.key">
          <p>{{ event.title }}</p>
          <p>{{ event.startDate }}</p>
        </el-card>
      </section>
      
      <!-- Add events -->
      <section v-else>
        Add events
      </section>

    </section>
  </div>
</template>

<script>
import EventDetail from '~/components/EventDetail.vue'

export default {
  components: {
    'event-detail': EventDetail
  },
  computed: {
    events () {
      return this.$store.state.eventList
    },
    detail () {
      return this.$store.state.eventDetail
    }
  }
}
</script>

