<template>
  <div class="">
    <h2>This is main page.</h2>
    <button @click="fnSubPage">Go to sub page</button>
  </div>
</template>

<script>

export default {
  methods: {
      fnSubPage() {
          this.$router.push('/sub')
      }
  }
}
</script>
