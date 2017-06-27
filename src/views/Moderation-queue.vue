<template>
  <v-layout column role="main">
    <h1>{{ title }}</h1>

  </v-layout>
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
    name: 'escalation-queue',

    asyncData(store) {
      console.log('*** asyncData: Moderation....');
    },

    data() {
      return {
        title: 'Moderation Queue',
      }
    },
  }
</script>