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
      contadores: this.$store.getters['localStorage/getContadores'],
      filtrado: this.$store.getters['localStorage/getFiltrado'],
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
      this.$nuxt.$on('filtrar', () => this.filtrar())
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
    filtrar() {
      let filtro = this.$store.getters['sessionStorage/getFiltro']
      let order = this.$store.getters['sessionStorage/getOrder']
      let filtrado = []
      this.contadores.forEach((contador) => {
        filtrado.push({
          nombre: contador.nombre,
          contador: contador.contador,
          position: contador.position,
        })
      })

      switch (order) {
        case '1':
          // console.log('Ordenar por nombre ascendente')
          this.filtrado = filtrado.sort((a, b) => {
            return a['nombre'] < b['nombre'] ? -1 : 1
          })
          this.filtrado = filtrado.filter((item) => {
            return item.contador >= filtro
          })

          break
        case '2':
          // console.log('Ordenar por nombre descendente')
          this.filtrado = filtrado.sort((a, b) => {
            return a['nombre'] > b['nombre'] ? -1 : 1
          })
          this.filtrado = filtrado.filter((item) => {
            return item.contador >= filtro
          })

          break
        case '3':
          // console.log('Ordenar por contador ascendente')
          this.filtrado = filtrado.sort((a, b) => {
            return a['contador'] < b['contador'] ? -1 : 1
          })
          this.filtrado = filtrado.filter((item) => {
            return item.contador >= filtro
          })

          break
        case '4':
          // console.log('Ordenar por contador descendente')
          this.filtrado = filtrado.sort((a, b) => {
            return a['contador'] > b['contador'] ? -1 : 1
          })
          this.filtrado = filtrado.filter((item) => {
            return item.contador >= filtro
          })

          break
        default:
          // console.log('Solo filtrado')
          this.filtrado = this.contadores.filter((item) => {
            return item.contador >= filtro
          })
          break
      }
      this.$store.commit('localStorage/setFiltrado', this.filtrado)
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
