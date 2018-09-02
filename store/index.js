import axios from '~/plugins/axios'

export const actions = {
  async nuxtServerInit ({ commit }) {
    try {
      const { data } = await axios.get('/api/config')
      commit('SET_CONFIG', data)
    } catch (error) {
      throw error
    }
  }
}

export const state = () => ({
  api: {},
  aside: false,
  labels: [{
    text: 'Standard',
    variant: 'primary'
  }, {
    text: 'Reminder',
    variant: 'success'
  }, {
    text: 'Information',
    variant: 'info'
  }, {
    text: 'Urgent',
    variant: 'warning'
  }, {
    text: 'Danger',
    variant: 'danger'
  }],
  events: [{
    id: 1,
    startDate: '2018-9-1 00:00:00',
    endDate: '2018-9-2 00:00:00',
    startTimestamp: 1535734800000,
    endTimestamp: 1535821200000,
    title: 'First Event',
    description: 'Learn and create something on weekend, cause we can\'t wasting a time.',
    url: '/',
    tags: [{
      text: 'Information',
      variant: 'info'
    }],
    location: [-6.1780807,106.8181091]
  }, {
    id: 2,
    startDate: '2018-9-10 00:00:00',
    endDate: '2018-9-13 00:00:00',
    startTimestamp: 1536512400000,
    endTimestamp: 1536771600000,
    title: 'Second Event',
    description: 'Learn and create something on weekend, cause we can\'t wasting a time.',
    url: '/',
    tags: [{
      text: 'Standard',
      variant: 'primary'
    }, {
      text: 'Reminder',
      variant: 'success'
    }],
    location: [-6.1780807,106.8181091]
  }, {
    id: 3,
    startDate: '2018-9-10 00:00:00',
    endDate: '2018-9-11 00:00:00',
    startTimestamp: 1536512400000,
    endTimestamp: 1536598800000,
    title: 'Third Event',
    description: 'Learn and create something on weekend, cause we can\'t wasting a time.',
    url: '/',
    tags: [{
      text: 'Urgent',
      variant: 'warning'
    }, {
      text: 'Danger',
      variant: 'danger'
    }],
    location: [-6.1780807,106.8181091]
  }],
  eventList: null,
  eventDetail: null
})

export const mutations = {
  SET_CONFIG (state, data) {
    state.api = data
  },
  SET_ASIDE (state, data) {
    state.aside = data
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
