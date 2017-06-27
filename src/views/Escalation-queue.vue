<template>
  <v-layout column role="main">
    <h1>{{ title }}</h1>
    <!--
    <div>
      <router-link v-if="page > 1" :to="'/news/' + type + '/' + (page - 1)">&lt; prev</router-link>
      <a v-else class="disabled">&lt; prev</a>
      <span>{{ page }}/{{ maxPage }}</span>
      <router-link v-if="hasMore" :to="'/news/' + type + '/' + (page + 1)">more &gt;</router-link>
      <a v-else class="disabled">more &gt;</a>
    </div>
    -->
    <transition :name="transition">
      <div class="news-list" :key="displayedPage" v-if="displayedPage > 0">

        <div v-for="item in displayedItems">{{item.id}} {{ item.title }}</div>
        <!--
        <transition-group tag="ul" name="item">
          <item v-for="item in displayedItems" :key="item.id" :item="item"></item>
        </transition-group>
        -->
      </div>
    </transition>
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

    asyncData ({ store }) {
      console.log('**** asyncData: Escalation....');
      return store.dispatch('FETCH_ESCALATION_QUEUE')
    },

//    computed: {
//      displayedItems () {
//        return this.$store.state.moderation.escalatedPosts
//      },
//    },

    data() {
      return {
        title: 'Escalation Queue - Moderation',
        transition: 'slide-right',
        displayedPage: Number(this.$store.state.route.params.page) || 1,
//        displayedItems: this.$store.getters.escalatedPosts,
        displayedItems: [
          {
            "id": "1450518",
            "title": "PU: Vivamus vitae maximus nisl, sit amet congue magna - Id: 1450518",
            "communityName": "iPod",
            "communityPath": "iPod/Software"
          },
          {
            "id": "3008612",
            "title": "KW: Lorem ipsum dolor sit amet - Id: 3008612",
            "communityName": "iTunes",
            "communityPath": "iTunes/News"
          },
          {
            "id": "3437776",
            "title": "PM: Pellentesque imperdiet pretium tortor. - Id: 3437776",
            "communityName": "iCloud",
            "communityPath": "iCloud/Usability"
          },
          {
            "id": "4953467",
            "title": "2: Lorem ipsum dolor sit amet - Id: 4953467",
            "communityName": "iCloud",
            "communityPath": "iCloud/News"
          },
          {
            "id": "7229966",
            "title": "AP: Aenean lectus elit. - Id: 7229966",
            "communityName": "iCloud",
            "communityPath": "iCloud/Software"
          },
          {
            "id": "8621685",
            "title": "AB: Cras metus. Sed aliquet risus a tortor. - Id: 8621685",
            "communityName": "Apple TV",
            "communityPath": "Apple TV/News"
          }
        ]
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