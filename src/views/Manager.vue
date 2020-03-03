<template>
  <div class="em-manager">
    <h1>This is an manager page</h1>
      <div class="profile">
          {{userInfo.name}}
      </div>
  </div>
</template>
<script>
    import {mapGetters,mapActions} from 'vuex'
  export default {
    name:'Manager',
    methods:{
      ...mapActions(["getUserInfo"])
    },
    computed:mapGetters(["userInfo"]),
    created(){
      //mock:id=managerId
       this.getUserInfo("managerId")
    }
  }
</script>