<template>
  <v-app id="app">
    <!-- remove persistent temporarily -->
    <v-navigation-drawer temporary :mini-variant="miniVariant" :clipped="clipped" v-model="drawer">
      <v-list>
        <v-list-item v-for="(item, i) in sidebarItems" :key="i">
          <v-list-tile value="true">
            <v-list-tile-action>
              <v-icon light v-html="item.icon"></v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title v-text="item.title"></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar class="black" light fixed>
      <v-btn icon light router to="/dashboard" class="apple-logo"></v-btn>
      <v-btn icon light @click.native.stop="drawer = !drawer">
        <v-icon>more_vert</v-icon>
      </v-btn>

      <v-toolbar-items>
        <v-toolbar-item light to="/" class="hidden-sm-and-down narwhal-title">Narwhal</v-toolbar-item>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-items>

        <!--<v-toolbar-item router to="/moderation/queue">Moderation</v-toolbar-item>-->
        <!--<v-toolbar-item router to="/escalation/queue">Escalation</v-toolbar-item>-->

        <v-toolbar-item @click.native.stop="rightDrawer = !rightDrawer">
          <v-btn light icon>Metrics
            <v-icon>view_module</v-icon>
          </v-btn>
        </v-toolbar-item>

        <v-menu bottom left offset-y origin="bottom right" transition="v-slide-y-transition">
          <v-btn icon light slot="activator">
            <v-icon>more_vert</v-icon>
          </v-btn>
          <v-list>
            <v-list-item v-for="(item, index) in dropdownMenus" v-bind:key="item.title">
              <v-list-tile ripple router :to="item.path">
                <v-list-tile-content>
                  <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile-content>

                <div class="text-xs list__tile">
                  <span v-badge="{ value: 12 }" v-if="item.badge" class="red--after"></span>
                </div>

              </v-list-tile>
              <v-divider v-if="index + 1 < dropdownMenus.length"></v-divider>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-btn icon light router to="/news">
          <v-icon>account_circle</v-icon>
        </v-btn>

      </v-toolbar-items>
    </v-toolbar>

    <main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </main>

    <v-navigation-drawer temporary :right="right" v-model="rightDrawer">
      <!--
      <v-list>
        <v-list-item>
          <v-list-tile @click.native="right = !right">
            <v-list-tile-action>
              <v-icon light>compare_arrows</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
          </v-list-tile>
        </v-list-item>
      </v-list>
      -->
    </v-navigation-drawer>

    <v-footer :fixed="fixed" class="grey">
      <span>&copy; 2017</span>
      <v-btn icon light @click.native.stop="drawer = !drawer"></v-btn>
      <v-btn icon light @click.native.stop="miniVariant = !miniVariant">
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
      <v-btn icon light @click.native.stop="clipped = !clipped">
        <v-icon>web</v-icon>
      </v-btn>
      <v-btn icon light @click.native.stop="fixed = !fixed">
        <v-icon>remove</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
    </v-footer>
  </v-app>
</template>


<style lang="stylus">

  a
    text-decoration none

  .btn
    text-transform: none

  .apple-logo
    font-size 1.5em

  .narwhal-title
    font-size 1.5em
    font-weight: 350

  .view
    max-width 980px
    margin 0 auto
    position relative

  .fade-enter-active, .fade-leave-active
    transition all .2s ease

  .fade-enter, .fade-leave-active
    opacity 0

  @media (max-width 980px)
    .header .inner
      padding 15px 30px

  @media (max-width 600px)
    .header
      .inner
        padding 15px
      a
        margin-right 1em
      .github
        display none
</style>

<script>
  export default {
    data() {
      return {
        dropdownMenus: [
          {
            title: 'Moderation Queue',
            path: '/moderation/queue',
          },
          {
            title: 'Escalation Queue',
            path: '/escalation/queue',
            badge: true,
          },
          {
            title: 'Problem Users',
            path: '/problemusers',
          },
          {
            title: 'Reports',
            path: '/reports',
          },
          {
            title: 'Preferences',
            path: '/preferences',
          },
        ],

        clipped: false,
        drawer: false,
        fixed: false,
        sidebarItems: [
          { icon: 'bubble_chart', title: 'Inspire' }
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Narwhal'
      }
    }
  }
</script>