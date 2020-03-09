<template>
    <div class="about"
         style="position: relative;height: 100%;overflow-y: auto;"
         @scroll="onScroll"
    >

        <PullUpReload :onInfiniteLoad="loadMore" :parentPullUpState="pullUpState" :scrollToTop="scrollTop">
            <ul class="box_fixed" id="boxFixed" :class="{'is_fixed' : isFixed}"></ul>
            <h1>This is an boss page</h1>

            <input type="text" v-focus v-demo="'test'">
            <div>
                <Checkbox :checked.sync="single">Checkbox</Checkbox>
            </div>
            <el-button>默认按钮</el-button>
            <ul class="a-item" style="position: fixed;">
                <li
                        v-for="count in counts"
                        :key="count"
                        @click="jump(count)"
                        :class="{'step-jump-a':true,'activeStep':activeStep===count-1}"
                >{{count}}item
                </li>
            </ul>
            <div id="scroll-list" style="overflow:hidden">
                <Loading :onRefresh="onRefresh" :scrollToTop="scrollTop">
                    <div style="height: 200px"
                         v-for="count in counts"
                         :key="count"
                         :class="{'step-jump':true,'activeStep':activeStep===count-1}"
                    >{{count}}item
                    </div>

                </Loading>
            </div>
        </PullUpReload>
    </div>

</template>
<script>
  import Loading from "../components/DropDownRefresh";
  import PullUpReload from "../components/PullUpReload";
  import Checkbox from 'iview/src/components/checkbox';

  export default {
    components: {PullUpReload, Loading, Checkbox},
    data() {
      return {
        counts: 0,
        isFixed: false,
        activeStep: 0,

        scrollTop: 0,
        pullUpState: 0,

        single: false
      }
    },
    methods: {
      loadMore(done = () => null) {
        setTimeout(() => {
          console.log('moremore')
          this.counts += 10
          if (this.counts <= 10) {
            this.pullUpState = 1
          }
          if (this.counts > 10 && this.counts <= 30) {
            this.pullUpState = 3
          }
          done()
        }, 2000)
      },
      onRefresh(done) {
        setTimeout(() => {
          console.log('refresh')
          done()
        }, 2000)
      },
      jump(count) {
        const index = count - 1
        this.activeStep = index
        const anchors = document.querySelectorAll('.step-jump')
        let total = anchors[index].offsetTop
        // Chrome
        document.querySelector('.about').scrollTop = total - 100
      },
      onScroll(e) {
        this.scrollTop = e.srcElement.scrollTop
        //滚动监听活跃项
        const anchors = document.querySelectorAll('.step-jump')
        anchors.forEach((item, index) => {
          if (e.srcElement.scrollTop + 200 >= item.offsetTop) {
            this.activeStep = index
            return
          }
        })
        /*        console.log(e.srcElement.scrollTop,e.srcElement.offsetHeight)
                console.log(e.srcElement.scrollHeight)*/
        //滚动的像素+容器的高度>可滚动的总高度-100像素
        /*        if (e.srcElement.scrollTop + e.srcElement.offsetHeight > e.srcElement.scrollHeight - 100) {
                  this.loadMore()
                }*/
        //滚动高度距离顶端100px
        this.isFixed = e.srcElement.scrollTop > 100 ? true : false;
      },
    },
    created() {
      this.loadMore()
    },
    mounted() {
      this.defaultOffset = document.querySelector('.down-tip').clientHeight
    },
    directives: {
      'demo': {
        bind(el, binding) {
          console.log(binding.value)
        }
      }
    },

  }
</script>
<style>
    .box_fixed {
        width: 500px;
        height: 40px;
        border: 2px dashed pink;
        border-radius: 20px;
        margin: 0 auto;
        line-height: 40px;
        background: #eeeeee;
    }

    .is_fixed {
        position: fixed;
        z-index: 999;
    }

    .step-jump {
        border: 1px solid #ccc;
    }

    .step-jump.activeStep, .step-jump-a.activeStep {
        color: red;
    }
</style>