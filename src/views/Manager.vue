<template>
  <div class="em-manager">
      <ProfileCard :userInfo="userInfo"/>
      <News />
      <Notification />
  </div>
</template>
<script>
    import {mapGetters,mapActions} from 'vuex'
    import ProfileCard from './../components/ProfileCard'
    import News from "../components/News";
    import Notification from "../components/Notification";
  export default {
    name:'Manager',
    components:{
      Notification,
      News,
      ProfileCard
    },
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