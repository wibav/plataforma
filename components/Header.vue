<template>
  <div class="contNav">
    <div class="contOrden">
      <Ordenar />
    </div>
    <div class="contFiltrar">
      <Filtrar />
    </div>
  </div>
</template>

<script>
import Ordenar from '../components/Ordenar.vue'
import Filtrar from '../components/Filtrar.vue'
export default {
  components: { Ordenar },
  name: 'Headerpage',
}
</script>
