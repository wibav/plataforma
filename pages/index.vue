<template>
  <div class="bodyI">
    <button class="butonAgregar" :disabled="isDisabled" @click="addContador">
      Agregar Contador
    </button>
    <div v-for="(contador, index) in contadores" :key="index">
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
    },
  },
  computed: {
    loaded() {
      return (
        this.$store.state.localStorage.status &&
        this.$store.state.sessionStorage.status
      )
    },
    isDisabled() {
      // you can  check your form is filled or not here.
      return this.contadores.length < 20 ? false : true
    },
  },
  created() {
    this.$nuxt.$on('sumar', (index) => this.sumar(index)),
      this.$nuxt.$on('restar', (index) => this.restar(index)),
      this.$nuxt.$on('eliminar', (index) => this.eliminar(index))
  },
  methods: {
    addContador() {
      let contadores = []
      contadores = {
        nombre: 'contador ' + this.contadores.length,
        contador: 0,
        position:
          this.contadores.length == 0
            ? 1
            : this.contadores[this.contadores.length - 1].position + 1,
      }
      this.$store.commit('localStorage/setContadores', contadores)
    },
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
