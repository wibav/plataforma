export const state = () => ({
  contadores: [],
})

export const mutations = {
  setContadores(state, data = {}) {
    console.log('setContadores: ', data)
    state.contadores = data
  },
  sumar(state, data = {}) {
    // console.log('sumar: ', data)
    state.contadores[data].contador++
  },
  restar(state, data = {}) {
    // console.log('restar: ', data)
    state.contadores[data].contador--
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
