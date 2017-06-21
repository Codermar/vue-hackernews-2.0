import Vue from 'vue'
import Router from 'vue-router'
// import Dashboard from '../views/Dashboard'

Vue.use(Router)

// route-level code splitting
const createListView = id => () => import('../views/CreateListView').then(m => m.default(id))
const ItemView = () => import('../views/ItemView.vue')
const UserView = () => import('../views/UserView.vue')
const Dashboard = () => import('../views/Dashboard.vue')

export function createRouter () {
  return new Router({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      { path: '/news/dashboard', component: Dashboard },
      { path: '/news/top/:page(\\d+)?', component: createListView('top') },
      { path: '/news/new/:page(\\d+)?', component: createListView('new') },
      { path: '/news/show/:page(\\d+)?', component: createListView('show') },
      { path: '/news/ask/:page(\\d+)?', component: createListView('ask') },
      { path: '/news/job/:page(\\d+)?', component: createListView('job') },
      { path: '/item/:id(\\d+)', component: ItemView },
      { path: '/user/:id', component: UserView },
      { path: '/', redirect: '/dashboard' }
    ]
  })
}
