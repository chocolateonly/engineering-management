import {manager} from "../mock/useInfo";

export default {
  state: {
    userInfo:{}
  },
  getters:{
    userInfo:state=>state.userInfo
  },
  mutations: {
    fetchUserInfo:(state,id)=>{
      //fixme:get user info
      if (id==="managerId") state.userInfo=manager
    }
  },
  actions: {
    getUserInfo({commit},id){
      commit('fetchUserInfo',id)
    }
  },
}