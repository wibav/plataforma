export const state = () => ({
  contadores: [],
  filtrado: [],
})

export const mutations = {
  setContadores(state, data = {}) {
    // console.log('setContadores: ', data)
    state.contadores.push(data)
  },
  setFiltrado(state, data = {}) {
    // console.log('setFiltrado: ', data)
    state.filtrado = data
  },
  sumar(state, data = {}) {
    // console.log('sumar: ', data)
    state.contadores[data].contador <= 19
      ? state.contadores[data].contador++
      : state.contadores[data].contador
    // state.contadores[data].contador++
  },
  restar(state, data = {}) {
    // console.log('restar: ', data)
    state.contadores[data].contador >= 1
      ? state.contadores[data].contador--
      : state.contadores[data].contador
    // state.contadores[data].contador--
  },
  eliminar(state, data = {}) {
    // console.log('eliminar: ', data)
    state.contadores.splice(data, 1)
  },
  reset(state, data = {}) {
    // console.log('reset: ', data)
    state.contadores = []
  },
}

export const getters = {
  getTotal(state) {
    let total = 0
    if (state.contadores.length > 0) {
      state.contadores.forEach((item) => {
        total += item.contador
      })
    }
    return total
  },
  getContadores(state) {
    return state.contadores
  },
  getFiltrado(state) {
    return state.filtrado
  },
}
