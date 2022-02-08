<template>
  <div>
    <button class="botonModal" @click="openModal(!visible)">
      Agregar Contador
    </button>
    <div id="myModal" v-bind:class="visible ? mostrar : ocultar">
      <!-- Modal content -->
      <div class="modal-content">
        <div class="inputTitle">
          <input
            class="TitleContador"
            placeholder="Ingrese Titulo"
            type="text"
            maxlength="20"
          />
        </div>
        <div class="contBotonConfirmar">
          <button class="botonContador">Confirmar contador</button>
          <button class="botonContador" @click="openModal(!visible)">
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
      mostrar: 'modalOpen',
      ocultar: 'modalCerrado',
      visible: false,
    }
  },
  methods: {
    openModal(visible) {
      this.visible = visible
    },
  },
}
</script>

<style></style>
