<template>
  <div class="el-detail">
    <el-button icon="el-icon-back" @click="hideDetail">Close</el-button>
    <div class="line"></div>
    
    <!-- Detail events -->
    <section v-if="detail">
      <event-detail :event="detail"/>
    </section>

    <section v-else>

      <!-- Have events -->
      <div v-if="events.length > 0">
        <el-card
          class="card-item"
          shadow="never"
          v-for="event in events"
          :key="event.key"
          :style="setGradient(event.tags)"
          @click.native="openDetail(event)"
        >
          <p>{{ event.title }}</p>
          <p>{{ event.startDate }}</p>
        </el-card>
        <div class="line"></div>
        <el-button type="primary" icon="el-icon-plus" @click="openDialog">Create New</el-button>
      </div>
      
      <!-- Add events -->
      <section v-else>
        <el-card align="center" shadow="never">
          <p>This date doesn't have any Events</p>
          <el-button type="primary" icon="el-icon-plus" @click="openDialog">Create One</el-button>
        </el-card>
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
  },
  methods: {
    hideDetail (event) {
			this.$store.commit('SET_ASIDE', false)
    },
    openDetail (event) {
			this.$store.commit('SET_EVENT_DETAIL', event)
    },
    openDialog () {
			this.$store.commit('SET_EVENT_DIALOG', true)
    },
    setGradient (tags) {
      const color = {
        primary: 'rgba(64, 158, 255, .8)',
        success: 'rgba(103, 194, 58, .8)',
        info: 'rgba(153, 186, 253, .8)',
        warning: 'rgba(230, 162, 60, .8)',
        danger: 'rgba(245, 108, 108, .8)'
      }
      const grad = []
      
      tags.map(item => {
        if (color[item.variant]) {
          grad.push(color[item.variant])
        }
      })

      if (grad.length > 1) {
        return `
          background: ${grad[0]};
          background: -webkit-linear-gradient(to left, ${grad[1]}, ${grad[0]});
          background: linear-gradient(to left, ${grad[1]}, ${grad[0]});
          color: #FFFFFF;
        `
      } else {
        return `
          background-color: ${grad[0]};
          color: #FFFFFF;
        `
      }
    }
  }
}
</script>

<style>
.el-card.card-item {
  margin-bottom: .5rem;
  border: 0;
  cursor: pointer;
  user-select: none;
}
</style>

