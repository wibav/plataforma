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
      this.$nuxt.$on('eliminar', (index) => this.eliminar(index)),
      this.$nuxt.$on('filtrar', (valor) => this.filtrar(valor))
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
    filtrar(filtro) {
      this.filtrado = this.contadores.filter((item) => {
        return item.contador >= filtro
      })
    },
  },
  mounted() {
    if (!this.loaded) {
      this.$store.dispatch('loadLocalStorage')
      this.$store.dispatch('loadSessionStorage')
    }
  },
}
</script>
