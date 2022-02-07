<template>
  <div>
    <Contador />
  </div>
</template>

<script>
import Contador from '../components/Contador.vue'
export default {
  name: 'IndexPage',
  computed: {
    loaded() {
      return (
        this.$store.state.localStorage.status &&
        this.$store.state.sessionStorage.status
      )
    },
  },
}
</script>
