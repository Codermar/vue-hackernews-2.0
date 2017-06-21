<template>
  <div>
    <div class="news-view">
      <div class="news-list-nav">
        <router-link to="/news/top">Top</router-link>
        <router-link to="/news/new">New</router-link>
        <router-link to="/news/show">Show</router-link>
        <router-link to="/news/ask">Ask</router-link>
        <router-link to="/news/job">Jobs</router-link>
      </div>
    </div>
    <div class="dash-body">
      <h1 class="typography-elevated-headline"><i
          class="fa fa-apple" aria-hidden="true"></i>hackernews-sample</h1>
    </div>
  </div>
</template>

<style lang="stylus">
  .news-view
    padding-top 45px

  .news-list-nav, .news-list
    background-color #fff
    border-radius 2px

  .news-list-nav
    padding 15px 30px
    position fixed
    text-align left
    top 55px
    left 0
    right 0
    z-index 998
    box-shadow 0 1px 2px rgba(0,0,0,.1)
    a
      margin 0 1em
    .disabled
      color #ccc

  .fa-apple {
    color: dimgray;
    margin-right: 15px;
  }
</style>
