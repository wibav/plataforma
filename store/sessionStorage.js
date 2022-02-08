export const state = () => ({
  filtro: 0,
  order: 0,
  orderItems: {
    0: 'Sin ordenar',
    1: 'Nombre ascendente',
    2: 'Nombre descendente',
    3: 'Valor ascendente',
    4: 'Valor descendente',
  },
})

export const mutations = {
  setFiltro(state, data = {}) {
    state.filtro = data
  },
  setOrder(state, data = {}) {
    state.order = data
  },
}

export const getters = {
  getFiltro(state) {
    return state.filtro
  },
  getOrder(state) {
    return state.order
  },
}
