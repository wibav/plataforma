<template>
  <Tutorial />
</template>

<script>
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
