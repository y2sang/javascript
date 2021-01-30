<template>
  <div class="">
    <h2>This is sub page.</h2>
    <button @click="fnMainPage">Go to main page</button>
  </div>
</template>

<script>

export default {
  methods: {
      fnMainPage() {
          this.$router.push('/main')
      }
  }
}
</script>
