<template>
    <div class="em-projects">
        <h3 class="em-projects-header">我的项目</h3>
        <div class="em-tabs">

            <div class="em-tabs-header">
                <div class="em-tabs-header-item"
                     v-for="(item,index) in tabs" :key="item"
                     :class="{ active: index===activeIndex}"
                     @click="activeIndex=index"
                >
                    {{item}}<span class="em-badge">({{getProjectsNum(item)}})</span>
                </div>
            </div>

            <div class="em-blank"></div>

            <div class="em-tab-content"
                 v-infinite-scroll="loadMore"
                 infinite-scroll-disabled="busy"
                 infinite-scroll-distance="10"
            >
                <div class="em-projects-flow" v-if="activeIndex===1">
                    <div class="flow-item" v-for="(item,index) in getProjectFlow()" :key="index">
                        <div class="flow-item-line">
                            <div class="flow-item-line-circle"></div>
                        </div>
                        <div class="flow-item-content">

                            <div class="flow-item-header">
                                <h4>{{item.title}}</h4>
                                <div class="flow-item-time">{{item.createdAt}}</div>
                            </div>

                            <div class="flow-item-info">{{item.content}}</div>

                            <div class="flow-item-img-list">
                                <div class="flow-item-img-item" v-for="num in Math.ceil(Math.random()*10)" :key="num">
                                    <img src="../mock/img.jpg"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="em-projects-list" v-else-if="activeIndex===2">
                    <div class="em-projects-item" v-for="item in getProjects()" :key="item.id">
                        <div class="item-status">
                            <span>{{item.type.substring(0,2)}}<br/>{{item.type.substring(2)}}</span>
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

                <div class="em-projects-list" v-else>
                    <div class="em-projects-item" v-for="(item,index) in data" :key="item.id | getKey(index)">
                        <div class="item-status">
                            <span>{{item.type.substring(0,2)}}<br/>{{item.type.substring(2)}}</span>
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
  import infiniteScroll from 'vue-infinite-scroll'
  export default {
    name: "MyProjects",
    props: {
      projects: Array
    },
    data() {
      return {
        tabs: ['待开工', '进行中', '已验收'],
        activeIndex: 0,

        busy:false,
        data:this.projects
      }
    },
    filters:{
      getKey(val,arg){
        return `${val}-${arg}`
      }
    },
    methods: {
      getProjectsNum(status) {
        return this.projects.filter(project => project.status === status).length
      },
      getProjects() {
        return this.projects.filter(project => project.status === this.tabs[this.activeIndex])
      },
      getProjectFlow() {
        const pros = this.projects.filter(project => project.status === this.tabs[1])
        return pros[1].flow
      },
      loadMore: function() {
        this.busy = true;
        console.log('loadmore')
        setTimeout(() => {
          this.data=[...this.data,...this.projects]
          this.busy = false;
        }, 1000);
      }
    },
    directives:{infiniteScroll}
  }
</script>

<style scoped lang="less">
    .em-projects {
        margin-bottom: 5rem;
        .em-projects-header {
            text-align: left;
            margin: 1rem;
        }
        .em-tabs {
            .em-tabs-header {
                display: flex;
                justify-content: center;
                align-items: center;

                .em-tabs-header-item {
                    flex: 1;
                    padding: 0 0 .8rem 0;
                    cursor: pointer;
                    &.active {
                        color: #2196F3;
                        position: relative;
                        .em-badge {
                            color: #2196F3;
                        }
                    }
                    &.active:after {
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
                    .em-badge {
                        color: #a1a1a1;
                    }
                }
            }
            .em-blank {
                height: .5rem;
                background: #eee;
            }
            .em-tab-content {
                margin: 0 1rem;
                .em-projects-item {
                    display: flex;
                    padding: .5rem 0;
                    overflow: hidden;
                    align-items: center;
                    border-bottom: 1px solid #eee;
                    .item-title {
                        margin: .5rem 0;
                    }
                    .item-status {
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
                    .item-info {
                        flex: 1;
                        color: #a1a1a1;
                        text-align: left;
                        .item-title {
                            overflow: hidden;
                            text-overflow: ellipsis;
                            display: -webkit-box;
                            -webkit-line-clamp: 1;
                            -webkit-box-orient: vertical;
                            color: #000;
                        }
                        .item-address {
                            font-size: .8rem;
                        }
                        .item-time {
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            font-size: .8rem;
                            .work-time {

                            }
                            .create-time {
                                font-size: .7rem;
                            }
                        }
                    }
                }

                /*doing*/
                .em-projects-flow {
                    margin: 1rem 0;
                    .flow-item {
                        display: flex;
                        .flow-item-line {
                            position: relative;
                            margin-right: .3rem;
                            .flow-item-line-circle {
                                position: relative;
                                z-index: 9;
                                width: .8rem;
                                height: .8rem;
                                background: #fff;
                                border-radius: 50%;
                                border: 2px solid #2196F3;
                                margin-top: 2px;
                            }
                            &:after {
                                content: '';
                                position: absolute;
                                top: 2px;
                                width: 1px;
                                height: 100%;
                                background: #2196F3;
                            }
                        }
                        .flow-item-content {
                            flex-grow: 1;
                            padding-bottom: 1rem;
                            .flow-item-header {
                                display: flex;
                                align-items: center;
                                h4 {
                                    margin: 0;
                                    flex-grow: 1;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                    display: -webkit-box;
                                    -webkit-line-clamp: 1;
                                    -webkit-box-orient: vertical;
                                    text-align: left;
                                }
                                .flow-item-time {
                                    color: #a1a1a1;
                                    text-align: right;
                                    font-size: .7rem;
                                }
                            }
                            .flow-item-info {
                                margin: .5rem 0;
                                text-align: left;
                                color: #7d7979;
                                font-size: .8rem;
                            }
                            .flow-item-img-list {
                                text-align: left;
                                .flow-item-img-item {
                                    display: inline-block;
                                    margin: .5rem .5rem 0 0;
                                    img {
                                        width: 3rem;
                                        height: 4rem;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>