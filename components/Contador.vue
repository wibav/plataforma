<template>
  <div>
    <div class="conteConatdor">
      <div class="titleContador">
        <H2 class="titulo_contador">{{ nombre }}</H2>
      </div>
      <div class="panelConatdor">
        <ul>
          <li class="liContador">
            <button @click="$nuxt.$emit('restar', index)">
              <img
                class="imgContador"
                src="../static/signo-menos-de-una-linea-en-posicion-horizontal.png"
                alt=""
              />
            </button>
          </li>
          <li class="liContador">
            <label class="inputN">{{ contador }}</label>
          </li>
          <li class="liContador">
            <button @click="$nuxt.$emit('sumar', index)">
              <img class="imgContador" src="../static/mas.png" alt="" />
            </button>
          </li>
          <li class="liContador">
            <button @click="$nuxt.$emit('eliminar', index)">
              <img class="imgContador" src="../static/basura (1).png" alt="" />
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    contador: Number,
    nombre: String,
    index: Number,
  },
}
</script>

<style></style>
