<template>
  <div>
    <ul>
      <li class="menuFooter">
        <img class="imgSuma" src="../static/suma.png" alt="" />
      </li>
      <li class="menuFooter">
        <label class="labelContador" for="">{{ total }}</label>
      </li>
      <li class="menuFooter">
        <a class="botonCantidad" href="">Filtrar</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    total() {
      let total = this.$store.getters['localStorage/getTotal']
      return total
    },
  },
}
</script>
