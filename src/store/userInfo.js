import {manager} from "../mock/useInfo";
import {serviceApi} from "../service/apis";
const actions={
   getUserInfo({commit},id){
    commit('fetchUserInfo',id)
  }
}
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
    fetchUserInfo: async (state,id)=>{
      const res=await serviceApi.getProjectList()
      //fixme:get user info
      if (id==="managerId") state.userInfo={...manager,projects:[...manager.projects,...res.data]}
    }
  },
  actions
}