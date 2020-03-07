<template>
  <div class="em-manager">
      <ProfileCard :userInfo="userInfo"/>
      <News />
      <Notification />
      <MyProjects  :projects="userInfo.projects" />
  </div>
</template>
<script>
    import {mapGetters,mapActions} from 'vuex'
    import ProfileCard from './../components/ProfileCard'
    import News from "../components/News";
    import Notification from "../components/Notification";
    import MyProjects from "../components/MyProjects";
  export default {
    name:'Manager',
    components:{
      MyProjects,
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