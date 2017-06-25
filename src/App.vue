<!--

<template>
  <v-toolbar class="purple" light>
    <v-toolbar-side-icon light></v-toolbar-side-icon>
    <v-toolbar-title class="hidden-sm-and-down">Toolbar</v-toolbar-title>
    <v-toolbar-items>
      <v-toolbar-item>Home</v-toolbar-item>
      <v-toolbar-item>Contact</v-toolbar-item>
      <v-menu top left offset-y origin="bottom right" transition="v-slide-y-transition">
        <v-btn icon light slot="activator">
          <v-icon>more_vert</v-icon>
        </v-btn>
        <v-list>
          <v-list-item v-for="item in items" :key="item">
            <v-list-tile>
              <v-list-tile-title v-text="item.title"></v-list-tile-title>
            </v-list-tile>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-toolbar-items>
  </v-toolbar>
</template>
-->


<template>
  <div id="app">
    <header class="header">
      <nav class="inner">
        <router-link to="/" class="apple-logo" exact></router-link>
        <router-link to="/moderation/queue">Moderation</router-link>
        <router-link to="/escalation/queue">Escalation</router-link>
        <router-link class="right-nav" to="/news/top" exact>Samples</router-link>
      </nav>
    </header>
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>


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
    padding-top 55px
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
    height 55px
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

  @media (max-width 860px)
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
