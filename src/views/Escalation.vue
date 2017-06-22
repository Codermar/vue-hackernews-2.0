<template>
  <main>
    <h1>{{ title }}</h1>

    <div>
      list here...
    </div>
  </main>
</template>

<style lang="stylus" scoped>
  main
    margin-top: 1.5em
  h1
    font-size: 1.75em
    font-weight: 300
    padding: 1em 0 .5em 0
    border-bottom: 1px solid #979797
    margin-bottom: .5em
</style>

<script>
  export default {
    name: 'escalation',

    data() {
      return {
        title: 'Escalation Queue - Moderation'
      }
    },

  }
</script>