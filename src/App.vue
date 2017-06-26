<template>

  <v-app id="app">
    <v-navigation-drawer persistent v-model="drawer" light enable-resize-watcher>
      <v-list dense>
        <v-list-item>
          <v-list-tile @click.native.stop="left = !left">
            <v-list-tile-action>
              <v-icon>exit_to_app</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Open Temporary Drawer</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>


    <v-toolbar class="black" light>
      <v-toolbar-side-icon light></v-toolbar-side-icon>
      <v-toolbar-title class="hidden-sm-and-down">Toolbar</v-toolbar-title>
      <v-toolbar-items>
        <v-btn-dropdown v-bind:options="dropdownMenu" max-height="auto" overflow></v-btn-dropdown>
        <v-toolbar-item router-link to="/escalation/queue">
          Escalation Queue
        </v-toolbar-item>
        <v-toolbar-item><v-btn light icon>Metrics<v-icon>view_module</v-icon></v-btn></v-toolbar-item>
        <v-menu bottom left offset-y origin="bottom right" transition="v-slide-y-transition">
          <v-btn icon light slot="activator">
            <v-icon>more_vert</v-icon>
          </v-btn>

          <v-list>
            <v-list-item v-for="(item, index) in items" v-bind:key="item.title">
              <v-list-tile ripple>
                <v-list-tile-content>
                  <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile-content>

                <div class="text-xs list__tile">
                  <span v-badge="{ value: 12 }" v-if="item.badge" class="red--after"></span>
                </div>

              </v-list-tile>
              <v-divider v-if="index + 1 < items.length"></v-divider>
            </v-list-item>
          </v-list>

<!--
          <v-list>
            <v-list-item v-for="item in items" v-bind:key="item.title">
              <v-list-tile avatar>

                <v-list-tile-content>
                  <v-list-tile-title><span v-badge="{ value: 12 }">{{ item.title }}</span></v-list-tile-title>
                  &lt;!&ndash;<v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>&ndash;&gt;
                </v-list-tile-content>

                <v-list-tile-action>
                  <v-btn icon ripple>
                    <v-icon class="grey&#45;&#45;text text&#45;&#45;lighten-1">info</v-icon>
                  </v-btn>
                </v-list-tile-action>

              </v-list-tile>
            </v-list-item>

          </v-list>
          -->

        </v-menu>

        <v-btn icon light>
          <v-icon>account_circle</v-icon>
        </v-btn>

      </v-toolbar-items>
    </v-toolbar>

    <main>
      <v-navigation-drawer temporary v-model="left"></v-navigation-drawer>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
      <v-navigation-drawer right temporary v-model="right"></v-navigation-drawer>
    </main>

    <v-footer class="grey">
      <span>© 2017</span>
    </v-footer>

  </v-app>

  <!--
<header class="header">
  <nav class="inner">
    <router-link to="/" class="apple-logo" exact></router-link>
    <router-link to="/moderation/queue">Moderation</router-link>
    <router-link to="/escalation/queue">Escalation</router-link>
    <router-link class="right-nav" to="/news/top" exact>Samples</router-link>
  </nav>
</header>
-->


</template>

<!--

<style lang="stylus">

  @font-face {
    font-family: 'SF Pro Text';
    font-weight: 200;
    src: local('☺︎'), url("/public/fonts/sf-pro-text_regular.woff") format("woff"), url("/public/fonts/myriad-set-pro_thin.ttf") format("truetype");
  }

  @font-face {
    font-family: 'SF Pro Icons';
    font-style: normal;
    src: local('☺︎'), url("/public/fonts/SFProIcons_regular.woff") format("woff"), url("/public/fonts/myriad-set-pro_thin.ttf") format("truetype");
  }

  body
    font-family "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    font-size 15px
    /* background-color lighten(#eceef1, 30%) */
    background-color white
    margin 0
    /*padding-top 55px*/
    color #333333
    overflow-y scroll

  .apple-logo
    font-size 1.5em

  a
    color #34495e
    text-decoration none

  .header
    background-color #333333
    position fixed
    z-index 999
    /*height 55px*/
    top 0
    left 0
    right 0
    .inner
      max-width 980px
      box-sizing border-box
      margin 0px auto
      padding 15px 5px
    a
      color rgba(255, 255, 255, 1)
      line-height 24px
      transition color .15s ease
      display inline-block
      vertical-align middle
      font-weight 300
      letter-spacing .075em
      margin-right 1.8em
      &:hover
        color #fff
      &.router-link-active
        color #fff
        font-weight 400
      &:nth-child(6)
        margin-right 0
    .right-nav
      color #fff
      font-size .9em
      margin 0
      float right

  .logo
    width 24px
    margin-right 10px
    display inline-block
    vertical-align middle

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
-->

<style lang="stylus">
  .btn
    text-transform: none;
</style>

<script>
  export default {
    data () {
      return {
        items: [
          { title: 'Moderation Queue', avatar: '/public/messi-avatar.png', action: 'temp' },
          { title: 'Escalation Queue', avatar: '/public/messi-avatar2.png', badge: true },
          { title: 'Preferences', avatar: '/public/messi-avatar3.png' }
        ],
        drawer: false,
        drawerRight: false,
        right: null,
        left: null,
        dropdownMenu: [
          { text: 'Arial' },
          { text: 'Calibri' },
          { text: 'Courier' },
          { text: 'Verdana' }
        ]
      }
    }
  }
</script>