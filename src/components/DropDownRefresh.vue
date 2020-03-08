<template lang="html">
    <div class="refresh-moudle"
         @touchstart="touchStart"
         @touchmove="touchMove"
         @touchend="touchEnd"
         :style="{transform: 'translate3d(0,' + top + 'px, 0)'}">
        <header class="pull-refresh">
            <slot name="pull-refresh">
                <div class="down-tip" v-if="dropDownState==1">
                    <span class="down-text">{{dropDownInfo.downText}}</span>
                </div>
                <div class="up-tip" v-if="dropDownState==2">
                    <span class="up-text">{{dropDownInfo.upText}}</span>
                </div>
                <div class="refresh-tip" v-if="dropDownState==3">
                    <span class="refresh-text">{{dropDownInfo.refreshText}}</span>
                </div>
            </slot>
        </header>
        <slot></slot>
    </div>
</template>
<script>
  export default {
    props: {
      onRefresh: {
        type: Function,
        required: false
      },
      scrollToTop:Number
    },
    data () {
      return {
        defaultOffset: 50,//tip 's height
        top: 0,
        startY: 0,
        isRefreshing: false, // 是否正在刷新
        dropDownState: 1, // 显示1:下拉可以刷新, 2:松开立即刷新, 3:正在刷新数据中...
        dropDownInfo: {
          downText: '下拉可以刷新',
          upText: '松开立即刷新',
          refreshText: '正在刷新数据...'
        }
      }
    },
    mounted () {
        this.defaultOffset = document.querySelector('.down-tip').clientHeight || this.defaultOffset
    },
    methods: {
      touchStart (e) {
        this.startY = e.targetTouches[0].pageY
      },
      touchMove (e) {
       if (e.targetTouches[0].pageY > this.startY) {
          if (this.scrollToTop === 0 && !this.isRefreshing) {
            let diff = e.targetTouches[0].pageY - this.startY
            this.top = Math.pow(diff, 0.8)
            if (this.top >= this.defaultOffset) {
              this.dropDownState = 2
            } else {
              this.dropDownState = 1
            }
          }
        }
        },
      touchEnd () {
        if (!this.isRefreshing) {
          if (this.top >= this.defaultOffset) {
            // do refresh
            this.refresh()
            this.isRefreshing = true
          } else {
            // cancel refresh
            this.isRefreshing = false
            this.dropDownState = 1
            this.top = 0
          }
        }

      },
      refresh () {
        this.dropDownState = 3
        this.top=this.defaultOffset
          this.onRefresh(this.refreshDone)
      },
      refreshDone () {
        this.dropDownState=1
        this.top=0
        this.isRefreshing=false
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .refresh-moudle {
        width: 100%;
        margin-top: -100px;
        -webkit-overflow-scrolling: touch; /* ios5+ */
    }

    .pull-refresh {
        width: 100%;
        color: #999;
        transition-duration: 200ms;
        font-size: 24px;
    }

    .refresh-moudle .down-tip,
    .up-tip,
    .refresh-tip {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100px;
    }

    .down-img {
        width: 35px;
        height: 35px;
        margin-right: 15px;
        transform: rotate(0deg);
        animation: anticlockwise 0.8s ease;
    }

    @keyframes anticlockwise {
        0% {
            transform: rotate(-180deg);
        }
        100% {
            transform: rotate(0deg);
        }
    }

    .up-img {
        width: 35px;
        height: 35px;
        margin-right: 15px;
        transform: rotate(180deg);
        animation: clockwise 0.8s ease;
    }

    @keyframes clockwise {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(-180deg);
        }
    }

    .refresh-img {
        width: 35px;
        height: 35px;
        margin-right: 15px;
        animation: rotating 1.5s linear infinite;
    }

    @keyframes rotating {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(1turn);
        }
    }
</style>