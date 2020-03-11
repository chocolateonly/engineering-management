import {manager} from "../mock/useInfo";
import {serviceApi} from "../service/apis";

export default {
  state: {
    userInfo:{
      projects:[]
    }
  },
  getters:{
    userInfo:state=>state.userInfo
  },
  mutations: {
    fetchUserInfo: (state,{id,res})=>{
      console.log(id)
      //fixme:get user info
      if (id==="managerId") state.userInfo={...manager,projects:[...manager.projects,...res.data]}
    }
  },
  actions:{
    async getUserInfo({dispatch,commit},id){
      try {
        await dispatch('setLoading',true)
        const res=await serviceApi.getProjectList()

        commit('fetchUserInfo',{id,res})
      }catch (e) {
        console.log(e)
      }
    }
  }
}