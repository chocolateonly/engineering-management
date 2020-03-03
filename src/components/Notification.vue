<template>
    <div class="em-notification">
        <div class="em-notification-left">
            <v-icon class="em-notification-left-icon" name="bell"/>
            <span class="em-notification-left-text">最新消息</span>
        </div>
        <div class="em-notification-info">
            您有新的消息，请及时查看
        </div>
        <div class="em-notification-right">
            <v-icon class="em-notification-right-icon" name="angle-right" scale="1.4"/>
        </div>
    </div>
</template>

<script>
  export default {
    name: "Notification",
  }
</script>

<style scoped lang="less">
    .em-notification {
        display: flex;
        justify-content: space-between;
        margin: 1.5rem 1rem;
        background: #eeeeee;
        border-radius: 1.5rem;
        overflow: hidden;
        height: 2rem;
        line-height: 2rem;
        font-size: .8rem;
        .em-notification-left {
            padding:0 .5rem;
            color: #f74f1a;
            background:#ffcccc;
            .em-notification-left-icon{
                margin: 0 .2rem;
                vertical-align: middle;
            }
        }
        .em-notification-info{
            flex-grow: 1;
            padding:0 .3rem;
            text-align: left;
            color: #716d6d;
        }
        .em-notification-right{
            color: #a1a1a1;
            padding:0 .5rem;
            .em-notification-right-icon{
                vertical-align: middle;
            }
        }
    }
</style>