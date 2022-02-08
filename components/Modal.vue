<template>
  <div>
    <button
      class="botonModal"
      :disabled="isDisabled"
      @click="openModal(!visible)"
    >
      Agregar Contador
    </button>
    <div id="myModal" v-bind:class="visible ? mostrar : ocultar">
      <!-- Modal content -->
      <div class="modal-content">
        <div class="inputTitle">
          <input
            class="TitleContador"
            placeholder="Ingrese Nombre"
            type="text"
            maxlength="20"
            v-model="nombre"
            required
          />
        </div>
        <div class="contBotonConfirmar">
          <button class="botonContador" @click="agregar">
            Confirmar contador
          </button>
          <button class="botonCancelar" @click="openModal(!visible)">
            Cancelar contador
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contadores: this.$store.state.localStorage.contadores,
      mostrar: 'modalOpen',
      ocultar: 'modalCerrado',
      visible: false,
      nombre: '',
      show: false,
    }
  },
  computed: {
    isDisabled() {
      // you can  check your form is filled or not here.
      return this.contadores.length < 20 ? false : true
    },
  },
  methods: {
    openModal(visible) {
      this.visible = visible
    },
    agregar() {
      let contadores = []
      if (this.nombre == '') {
        this.show = true
        return
      }
      contadores = {
        nombre: this.nombre,
        contador: 0,
        position:
          this.contadores.length == 0
            ? 1
            : this.contadores[this.contadores.length - 1].position + 1,
      }
      this.$store.commit('localStorage/setContadores', contadores)
      this.nombre = ''
      this.show = false
      this.openModal(!this.visible)
    },
  },
}
</script>

<style></style>
