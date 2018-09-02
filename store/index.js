export const state = () => ({
  events: [{
    id: 1,
    startDate: '2018-9-1 00:00:00',
    endDate: '2018-9-2 00:00:00',
    title: 'First Event',
    description: 'Learn and create something on weekend, cause we can\'t wasting a time.',
    url: '/',
    tags: ['Coding', 'On', 'Weekend'],
    location: [-6.1780807,106.8181091]
  }],
  eventDetail: null
})

export const mutations = {
  SET_EVENT (state, data) {
    state.events.push(data)
  },
  SET_EVENT_DETAIL (state, data) {
    state.eventDetail = data
  },
}
