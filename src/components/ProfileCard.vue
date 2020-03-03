<template>
    <div class="em-profile">
        <div class="em-profile-info">
            <div class="em-profile-name">{{userInfo.name}}</div>
            <div class="em-profile-role">{{userInfo.role}}</div>
        </div>
        <div class="em-profile-img">
            <img src="./../assets/user.png"/>
        </div>
    </div>
</template>

<script>
  export default {
    name: "ProfileCard",
    props:{
      userInfo:Object
    }
  }
</script>

<style scoped lang="less">
.em-profile{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:1rem 1rem 2rem 1rem;
    background: #2088fd;
    color: #fff;
    .em-profile-info{
        text-align: left;
        .em-profile-name{
            font-weight: bold;
            font-size: 1rem;
        }
        .em-profile-role{
            font-size: .8rem;
        }
    }
    .em-profile-img{
        img{
            width: 3rem;
            height: 3rem;
            border-radius: 50%;
            border: 2px solid #10a3f3f5;
            background: #bfdcf3;
        }
    }
}
</style>