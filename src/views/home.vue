<template>
  <div class="home">
      <div class="homeTop"></div>
      <div class="main disf">
           <div class="sideBarBox">
                <sideBar></sideBar>
            </div>
            <div class="mainBox w100">
                <router-view></router-view>
            </div>
      </div>
     
  </div>
</template>

<script>
import sideBar from "@/components/sideBar"

export default {
    components:{
        sideBar,
    }
}
</script>

<style scoped>
.sideBarBox{
    background: rgb(51, 51, 51);
}
.homeTop{
    width: 100%;
    height: 50px;
    background: peru;
}
.mainBox{
    height: 1500px;
    background: palevioletred;
}
</style>