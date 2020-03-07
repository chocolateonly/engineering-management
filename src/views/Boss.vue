<template>
    <div class="about"
         style="position: relative;height: 100%;overflow-y: auto;"

    >
        <div     @touchstart="touchStart1"
                 @touchsmove="touchMove1"
                 @touchsend="touchEnd1">

        <ul class="box_fixed" id="boxFixed" :class="{'is_fixed' : isFixed}"></ul>
        <h1>This is an boss page</h1>

        <input type="text" v-focus v-demo="'test'">

        <ul class="a-item" style="position: fixed;">
           <li
                   v-for="count in counts"
                   :key="count"
                   @click="jump(count)"
                   :class="{'step-jump-a':true,'activeStep':activeStep===count-1}"
           >{{count}}item</li>
        </ul>
        <div id="scroll-list" >
            <Loading :isLoading="loading"/>
            <div style="height: 200px"
                 v-for="count in counts"
                 :key="count"
                 :class="{'step-jump':true,'activeStep':activeStep===count-1}"
            >{{count}}item</div>

        </div>

        </div>
    </div>
</template>
<script>
  import Loading from "../components/Loading";
  export default {
    components: {Loading},
    data() {
      return {
        counts: 4,
        isFixed: false,
        activeStep:0,
        loading:true,

        scrollTop:0
      }
    },
    methods: {
      loadMore() {
        console.log('moremore')
        this.counts+=10
      },
      jump(count){
        const index=count-1
        this.activeStep=index
        const anchors=document.querySelectorAll('.step-jump')
        let total = anchors[index].offsetTop
        // Chrome
        document.querySelector('.about').scrollTop = total-100
      },
      touchStart1(e){
        console.log('start')
        console.log(e.targetTouches[0].pageY)
      },
      touchMove1(e){
        console.log('move')
        console.log(e)
      },
      touchEnd1(){
console.log('end')
      },
      onScroll(e) {
        this.scrollTop=e.srcElement.scrollTop
        //滚动监听活跃项
        const anchors=document.querySelectorAll('.step-jump')
        anchors.forEach((item,index)=>{
          if (e.srcElement.scrollTop+200>=item.offsetTop) {
            this.activeStep=index
            return
          }
        })
/*        console.log(e.srcElement.scrollTop,e.srcElement.offsetHeight)
        console.log(e.srcElement.scrollHeight)*/
        //滚动的像素+容器的高度>可滚动的总高度-100像素
        if (e.srcElement.scrollTop+e.srcElement.offsetHeight>e.srcElement.scrollHeight-100) {
        this.loadMore()
        }
        //滚动高度距离顶端100px
        this.isFixed = e.srcElement.scrollTop > 100 ? true : false;
      },
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
    .box_fixed{
        width: 500px;
        height: 40px;
        border: 2px dashed pink;
        border-radius: 20px;
        margin: 0 auto;
        line-height: 40px;
        background: #eeeeee;
    }
    .is_fixed{
        position: fixed;
        z-index: 999;
    }
    .step-jump{
        border: 1px solid #ccc;
    }
    .step-jump.activeStep,.step-jump-a.activeStep{
        color: red;
    }
</style>