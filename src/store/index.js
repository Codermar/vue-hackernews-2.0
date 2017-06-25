import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    state: {
      activeType: null,
      itemsPerPage: 20,
      items: {/* [id: number]: Item */},
      users: {/* [id: string]: User */},
      lists: {
        top: [/* number */],
        new: [],
        show: [],
        ask: [],
        job: []
      },
      moderation: {
        user: { /* User */ },
        users: { /* [id: string]: User */ },
        admins: [/* [id: string] */],
        escalatedPosts: [/* [id: string] */],
        managers: [/* [id: string] */],
        moderators: [/* [id: string] */],
        posts: { /* [id: string]: Post */ },
        powerUsers: [/* [id: string] */], // This added because in the future they may want to integrate moderation privileges to power users
        problemUsers: [/* [id: string] */],
        resources: [], // TODO: structure TBD. These are routes, menus or actions granted to user (see mock-two.js)
        queue: { /* Post */ }, // The Post assigned to this user
        queueStatus: { /* moderationQueueItems: number, escalationQueueItems: number */ },
      }
    },
    actions,
    mutations,
    getters
  })
}
