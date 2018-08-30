import createPersistedState from 'vuex-persistedstate'

export default ({store}) => {
  createPersistedState({
    key: 'fluffy',
    paths: ['message']
  })(store)
}
