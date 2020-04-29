export const state = () => ({
  testStart: {},
  testHome: {},
  testUID: {}
})

export const mutations = {
  SET_TESTHOME_DATA (state, data) {
    state.testHome = data
  },
  setTestHome(state, res) {
    state.testHome = res
  },

  SET_TESTUID_DATA (state, data) {
    state.testUID = data
  },
  setTestUID(state, res) {
    state.testUID = res
  },

  SET_TESTSTART_DATA (state, data) {
    state.testStart = data
  },
  setTestStart(state, res) {
    state.testStart = res
  },

}

export const actions = {
  async nuxtServerInit ({ commit }, { $prismic }) {

    console.log('nuxtServerInit()')

    const testStart = await $prismic.api.getSingle('startpage')
    commit('SET_TESTSTART_DATA', testStart.data)

    const testHome = await $prismic.api.getSingle('testhome')
    commit('SET_TESTHOME_DATA', testHome.data)

    const testUID = await $prismic.api.query($prismic.predicates.at('document.type', 'test'), { pageSize : 100 })
    commit('SET_TESTUID_DATA', testUID.results)

  },
  setTestHome(vuexContext, res) {
    vuexContext.commit('setTestHome', res)
  },
}

export const getters = {
  getTestHome(state) {
    return state.testHome
  },
  getTestUID(state) {
    return state.testUID
  },
  getTestStart(state) {
    return state.testStart
  }
}
