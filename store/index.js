import axios from '~/plugins/axios'

export const actions = {
  async nuxtServerInit ({ commit }) {
    try {
      const config = await axios.get('/api/config')
      const events = await axios.get('/api/events')
      const labels = await axios.get('/api/labels')

      commit('SET_CONFIG', config.data)
      
      events.data.map(item => {
        commit('SET_EVENT', item)
      })
      
      labels.data.map(item => {
        commit('SET_LABEL', item)
      })
    } catch (error) {
      throw error
    }
  }
}

export const state = () => ({
  api: {},
  page: {},
  aside: false,
  labels: [],
  events: [],
  eventList: null,
  eventDetail: null
})

export const mutations = {
  SET_CONFIG (state, data) {
    state.api = data
  },
  SET_PAGE (state, data) {
    state.page = data
  },
  SET_ASIDE (state, data) {
    state.aside = data
  },
  SET_LABEL (state, data) {
    state.labels.push(data)
  },
  SET_EVENT (state, data) {
    state.events.push(data)
  },
  SET_EVENT_LIST (state, data) {
    state.aside = true
    state.eventList = data
    state.eventDetail = null
  },
  SET_EVENT_DETAIL (state, data) {
    state.aside = true
    state.eventDetail = data
  },
}
