<template>
  <div id="app">
    <default-page class="page" />
  </div>
</template>

<script>
import DefaultPage from "@/views/layout/DefaultPage";
export default {
  components: {
    DefaultPage
  }
};
</script>


<style lang="less">
    * {
        padding: 0;
        margin: 0;
        list-style: none;
    }
    html,
    body {
        width: 100%;
        height: 100%;
        background-color: #F8F8F8;
    }
    a {
        text-decoration: none;    
    }
    i {
        font-style: normal;
    }
    #app {
        width: 100%;
        height: 100%;
        min-width: 960px;
    }

    @media screen and (max-width: 1190px) {
      .page .top-bar {
        width: 960px;
      }
    }
</style>
