<template>
  <main class="dash-body">

    <div class="nw-dashboard-header"><h1><img
        src="/public/narwhal-icon.png" height="63" alt="Narwhal Moderation"> {{ title }}</h1>
      <h2>Hello, Jose Alfonso</h2>
      <p><strong>Last Login:</strong> 3/23/16 5:47 PM</p></div>

  </main>
</template>

<style lang="stylus" scoped>
  .dash-body
    padding .5em

  .nw-dashboard-header
    text-align center
    h1
      font-size: 3.6em
      margin-bottom: 0
      font-weight: normal
    h2
      font-size 2em
    img
      vertical-align: middle
</style>

<script>

  export default {
    name: 'dashboard',

    data() {
      return {
        title: 'Narwhal Moderation 2.0'
      }
    },

  }

</script>