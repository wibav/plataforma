export const state = () => ({
  filtro: 0,
})

export const mutations = {
  setFiltro(state, data = {}) {
    state.filtro = data
  },
}
