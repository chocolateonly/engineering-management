<template>
    <div >
        <input type="text"  />

        <Tabbar>
            <TabbarItem> <span slot="label">tab1</span></TabbarItem>
            <TabbarItem><span slot="label">tab2</span></TabbarItem>
            <TabbarItem><span slot="label">tab3</span></TabbarItem>
        </Tabbar>
    </div>

</template>

<script>

  import {Tabbar,TabbarItem} from 'vux'
  export default {
    name: "Test",
    components:{
      Tabbar,
      TabbarItem
    },/*
    directives:{
      'focusthis':{
        inserted(el){
          el.focus()
        }
      }
    }*/
  }
</script>

<style scoped>

</style>