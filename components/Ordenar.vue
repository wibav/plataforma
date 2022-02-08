<template>
  <div class="bodyFiltro">
    <select
      v-model="order"
      class="sOrdenar"
      name="Ordenar"
      v-on:change="selectItem"
    >
      <option
        class="optionF"
        v-for="(value, key) in items"
        :value="key"
        :key="key"
      >
        {{ value }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'ContadoresPage',
  data() {
    return {
      order: this.$store.state.sessionStorage.order,
      items: this.$store.state.sessionStorage.orderItems,
    }
  },
  methods: {
    selectItem() {
      this.$store.commit('sessionStorage/setOrder', this.order)
    },
  },
}
</script>
