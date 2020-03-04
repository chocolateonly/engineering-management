<template>
    <div class="transition">
        <button @click="show=!show">toggle show</button>
        <transition name="fade"
                    appear
        >
            <h1 v-if="show">This is an transition page</h1>
        </transition>
        <div v-if="show">
            <transition-group name="group-fade" tag="ul"
                              v-on:before-enter="beforeEnter"
                              v-on:enter="enter"
                              v-on:leave="leave"
                              appear>
                <li v-for="(item,index) in list"
                    :key="item"
                    v-bind:data-index="index">{{item}}</li>
            </transition-group>
        </div>

    </div>
</template>
<script>
  export default {
    name: 'TransitionCom',
    data() {
      return {
        show: true,
        list: [1, 2, 3]
      }
    },
    methods: {
      /*transition group*/
      beforeEnter(el) {
        el.style.opacity = 0
        el.style.height = 0
      },
      enter(el) {
        const delay = el.dataset.index * 150 //data-index value
        console.log(el.dataset)
        setTimeout(() => {
          el.style.opacity = 1
          el.style.height = '1.6em'
          el.style.transition='all 0.5s ease'
        }, delay)
      },
      leave(el) {
        const delay = el.dataset.index * 150
        setTimeout(() => {
          el.style.opacity = 0
          el.style.height = 0
          el.style.transition='all 0.5s ease'
        }, delay)
      }

    }
  }
</script>
<style scoped lang="less">
    .fade-enter {
        opacity: 0;
        transform: translateX(10px);
    }

    .fade-enter-active {
        transition: all 1s ease;
    }

    .fade-enter-to {
        color: blue;
    }

    .fade-leave {
        color: red;
    }

    .fade-leave-active {
        transition: all 1s ease;
    }

    .fade-leave-to {
        transform: translateX(10px);
        opacity: 0;
    }

</style>