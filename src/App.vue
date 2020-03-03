<template>
    <div id="app">
        <Header :title="title"/>
        <div class="app-content flex-grow-1">
            <router-view test="rr"/>
        </div>
    </div>
</template>
<script>
  import Header from './components/Header.vue'
  export default {
    name: 'App',
    data(){
      return{
        title:''
      }
    },
    components: {
      Header
    },
    methods:{
      changeHeaderTitle(){
        switch (this.$router.currentRoute.name) {
          default:this.title='工程管理平台'
        }
      }
    },
    created(){
      this.changeHeaderTitle()
    },
    updated(){
      this.changeHeaderTitle()
    }
  }
</script>
<style lang="less">
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        display: flex;
        flex-direction: column;
        height: 100%;
        overflow: hidden;
        .flex-grow-1 {
            flex-grow: 1;
        }
        .app-content{
            overflow-y: auto;
        }

    }
</style>
