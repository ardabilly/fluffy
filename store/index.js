export const state = () => ({
  events: [],
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
