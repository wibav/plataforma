export const state = () => ({
  contadores: [],
})

export const mutations = {
  setContadores(state, data = {}) {
    console.log('setContadores: ', data)
    state.contadores.push(data)
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

export const getters = {
  getTotal(state) {
    let total = 0
    state.contadores.forEach((item) => {
      total += item.contador
    })
    return total
  },
}
