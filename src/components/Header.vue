<template>
  <div class="em-header">
    <div class="em-header-button is-left" @click="goBack"> <v-icon name="angle-left" scale="1.6"/></div>
    <h3 class="em-header-title">{{title}}</h3>
    <div class="em-header-button is-right"><v-icon name="ellipsis-h" scale="1.6"/></div>
  </div>
</template>
<script>
    export default {
      name:'Header',
      props:{
        title:String
      },
      methods:{
        goBack(){
          this.$router.go(-1)
        }
      }
    }
</script>
<style scoped lang="less">
    .em-header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 3.4rem;
        padding: 0 1rem;
        background: #2088fd;
        color: #fff;
        .em-header-button{
            .is-left{
                text-align: left;
            }
            .is-right{
                text-align: right;
            }
        }
        .em-header-title{
            font-weight: normal;
        }
    }
</style>
