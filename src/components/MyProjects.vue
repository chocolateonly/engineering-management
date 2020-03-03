<template>
    <div class="em-projects">
        <h3 class="em-projects-header">我的项目</h3>
        <div class="em-tabs">

            <div class="em-tabs-header">
                <div  class="em-tabs-header-item"
                      v-for="(item,index) in tabs" :key="item"
                      :class="{ active: index===activeIndex}"
                      @click="activeIndex=index"
                >
                    {{item}}<span class="em-badge">({{getProjectsNum(item)}})</span>
                </div>
            </div>

            <div class="em-blank"></div>

          <div class="em-tab-content">
              <div class="em-projects-list">
                  <div class="em-projects-item" v-for="item in getProjects()" :key="item.id" >
                      <div class="item-status">
                          <span>{{item.type.substring(0,2)}}<br />{{item.type.substring(2)}}</span>
                      </div>
                      <div class="item-info">
                              <h4 class="item-title">{{item.title}}</h4>
                              <div class="item-address">项目地址：{{item.address}}</div>
                              <div class="item-time">
                                  <div class="work-time">施工时间：{{item.time}}</div>
                                  <div class="create-time">{{item.createdAt}}</div>
                              </div>
                      </div>

                  </div>
              </div>
          </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "MyProjects",
    props:{
      projects:Array
    },
    data(){
      return {
        tabs:['待开工','进行中','已验收'],
        activeIndex:0
      }
    },
    methods:{
      getProjectsNum(status){
        return this.projects.filter(project=>project.status===status).length
      },
      getProjects(){
        return this.projects.filter(project=>project.status===this.tabs[this.activeIndex])
      }
    }
  }
</script>

<style scoped lang="less">
.em-projects{
    .em-projects-header{
        text-align: left;
        margin: 1rem;
    }
    .em-tabs{
        .em-tabs-header{
            display: flex;
            justify-content: center;
            align-items: center;

            .em-tabs-header-item{
                flex: 1;
                padding: 0 0 .8rem 0;
                cursor: pointer;
                &.active{
                    color: #2196F3;
                    position: relative;
                    .em-badge{
                        color: #2196F3;
                    }
                }
                &.active:after{
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                    margin-left: -15%;
                    width: 30%;
                    height: 4px;
                    border-radius: 2px;
                    background: #2196F3;
                }
                .em-badge{
                    color: #a1a1a1;
                }
            }
        }
        .em-blank{
            height: .5rem;
            background: #eee;
        }
        .em-tab-content{
            margin: 0 1rem;
            .em-projects-item{
                display: flex;
                padding: .5rem 0;
                overflow: hidden;
                align-items: center;
                .item-title{
                    margin: .5rem 0;
                }
                .item-status{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 3rem;
                    height: 3rem;
                    border-radius: 50%;
                    background: #2196F3;
                    color: #fff;
                    font-size: .8rem;
                    margin-right: .3rem;
                }
                .item-info{
                    flex: 1;
                    color: #a1a1a1;
                    text-align:left;
                    .item-title{
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 1;
                        -webkit-box-orient: vertical;
                        color: #000;
                    }
                    .item-address{
                        font-size: .8rem;
                    }
                    .item-time{
                        display: flex;
                        justify-content: space-between;
                        align-items:center;
                        font-size: .8rem;
                        .work-time{

                        }
                        .create-time{
                            font-size: .7rem;
                        }
                    }
                }
            }
        }
    }
}
</style>