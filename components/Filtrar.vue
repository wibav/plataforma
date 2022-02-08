<template>
  <div>
    <ul>
      <li class="menuFiltrar">
        <input
          class="inputContador"
          type="number"
          v-model="filtro"
          min="0"
          max="20"
        />
      </li>
      <li class="menuFiltrar">
        <button class="botonFiltrar" @click="cambioFiltro">Filtrar</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filtro: this.$store.state.sessionStorage.filtro,
    }
  },
  methods: {
    cambioFiltro() {
      if (this.filtro != '' && this.filtro >= 0) {
        this.$store.commit('sessionStorage/setFiltro', this.filtro)
      }
    },
  },
}
</script>
