<template>
  <div class="bodyI">
    <Modal />
    <div v-for="(contador, index) in listado" :key="index">
      <Contador
        :nombre="contador.nombre"
        :contador="contador.contador"
        :index="index"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContadorPage',
  data() {
    return {
      contadores: this.$store.state.localStorage.contadores,
      filtro: this.$store.state.sessionStorage.filtro,
      filtrado: [],
    }
  },
  watch: {
    filtro() {
      this.filtrado = this.contadores.filter((contador) => {
        return contador.contador >= this.filtro
      })
      console.log('filtrado: ', this.filtrado)
    },
  },
  computed: {
    loaded() {
      return (
        this.$store.state.localStorage.status &&
        this.$store.state.sessionStorage.status
      )
    },
    listado() {
      return this.filtrado.length > 0 ? this.filtrado : this.contadores
    },
  },
  created() {
    this.$nuxt.$on('sumar', (index) => this.sumar(index)),
      this.$nuxt.$on('restar', (index) => this.restar(index)),
      this.$nuxt.$on('eliminar', (index) => this.eliminar(index))
  },
  methods: {
    sumar(index) {
      this.$store.commit('localStorage/sumar', index)
    },
    restar(index) {
      this.$store.commit('localStorage/restar', index)
    },
    eliminar(index) {
      this.$store.commit('localStorage/eliminar', index)
    },
  },
  mounted() {
    if (!this.loaded) {
      this.$store.dispatch('loadLocalStorage')
      this.$store.dispatch('loadSessionStorage')
    }
    // console.log('Contadores: W', this.contadores)
  },
}
</script>
