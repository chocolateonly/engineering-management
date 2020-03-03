<template>
    <div class="em-news">
        <div class="em-news-item"  v-for="item in menu" :key="item.text">
            <v-icon class="em-news-item-icon" :name="item.icon" scale="1"/>
            <span  class="em-news-item-text">{{item.text}}</span>
        </div>
    </div>
</template>

<script>
  export default {
    name: "News",
    data(){
     return {
       menu:[
         {icon:"newspaper",text:"企业动态"},
         {icon:"shield-alt",text:"安全工器具"}
         ]
     }
    }
  }
</script>

<style scoped lang="less">
.em-news{
    display: flex;
    margin: -1rem 1rem 0 1rem;
    box-shadow: 2px 2px 3px #bfbfbf;
    background: #fff;
    padding: 1rem;
    border-radius: 5px;
    .em-news-item{
        flex: 1;
        .em-news-item-icon{
            color: #fff;
            background: #f74f1a;
            padding: .5rem;
            margin-right: 0.5rem;
            vertical-align: middle;
            border-radius: 5px;
        }
        .em-news-item-text{
            font-size: 1rem;
        }
        &:last-child .em-news-item-icon{
            background: #2196F3;
        }
    }
}
</style>