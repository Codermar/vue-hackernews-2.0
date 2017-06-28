<template>
  <div>
    <h1>{{ title }}</h1>
    <transition :name="transition">
      <div class="news-list" :key="displayedPage" v-if="displayedPage > 0">

        <div v-for="item in displayedItems">{{item.id}} {{ item.title }}</div>
      </div>
    </transition>
  </div>
</template>

<style lang="stylus" scoped>
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

    asyncData ({ store }) {
      console.log('**** asyncData: Escalation....');
      return store.dispatch('FETCH_ESCALATION_QUEUE')
    },

    computed: {
      displayedItems () {
        return this.$store.state.moderation.escalatedPosts
      },
    },

    data() {
      return {
        title: 'Escalation Queue - Moderation',
        transition: 'slide-right',
        displayedPage: Number(this.$store.state.route.params.page) || 1,
      }
    },
/*
    computed: {
      page() {
        return Number(this.$store.state.route.params.page) || 1
      },
      maxPage() {
        console.info('------itemsPerPage, lists: ', itemsPerPage);
        console.log(':::: ', this.type);

        const { itemsPerPage, moderation } = this.$store.state
        return Math.ceil(moderation[this.type].length / itemsPerPage)
      },
      hasMore() {
        console.info('------: ', this.page, this.maxPage);
        return this.page < this.maxPage
      },
    },

    beforeDestroy () {
//      this.unwatchList()
    },

    watch: {
      page (to, from) {
        this.loadItems(to, from)
      }
    },

    beforeMount() {
      if (this.$root._isMounted) {
        this.loadItems(this.page)
      }
    },

    methods: {
      loadItems(to = this.page, from = -1) {
        console.log('loadItems: ', to, from);
      }
    },
    */
  }
</script>