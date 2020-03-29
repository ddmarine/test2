<template>
<div class="menu">

    <el-menu
      default-active="2"
      class="el-menu"
      @open="handleOpen"
      @close="handleClose"
      background-color="#333"
      text-color="#fff"
      active-text-color="#ffd04b"
      :collapse="isCollapse"
      align="left"
    >
        <!-- 加载左侧菜单 -->
        <el-menu-item  @click="goto(item.path)" :index="index"  v-for="(item, index) in meuns" :key="index">
            <i :class="item.icon"></i>
            <span>{{item.title}}</span>
        </el-menu-item>
        <el-submenu  @click="goto(item.path)" :index="index2"  v-for="(item2, index2) in meunsp" :key="index2">
            <template slot="title">
                <i :class="item2.icon"></i>
                <span>{{item2.title}}</span>
            </template>
            <el-menu-item  @click="goto(subItem.path)"  v-for="(subItem, subIndex) in item2.group" :key="subIndex">
                <div class="childroute">{{subItem.title}}</div>
            </el-menu-item>
        </el-submenu> 
    </el-menu>
</div>
</template>

<script>
export default {
      data(){
        return{
            meuns:[
                {
                    title: "首页",
                    //path: "/home/dashboard",
                    icon: "el-icon-umpicon4"
                },
                {
                    title: "首页",
                    //path: "/home/dashboard",
                    icon: "el-icon-umpicon4"
                },
                {
                    title: "首页",
                    //path: "/home/dashboard",
                    icon: "el-icon-umpicon4"
                },
            ],
            meunsp:[
                {
                    title: "设计管理",
                    path: "/home/twoPage",
                    icon: "el-icon-edit",
                    group: [
                        {
                            // path: "/home/ETL", 
                             title: "ETL设计" },
                        { 
                            //path: "/home/Sub_server",
                             title: "子服务器" },
                        { 
                            //path: "/home/kettle", 
                        title: "Kettle集群" }
                    ]
                },
                {
                    title: "资源管理",
                    path: "/home/threePage",
                    icon: "el-icon-document-copy",
                    group: [
                        { 
                            //path: "/home/fileManagement", 
                            title: "文件管理" },
                        { 
                            //path: "/home/dataSourceManagement", 
                            title: "数据源管理" }
                    ]
                }
            ]
        }
    },
    methods:{
        goto(a){
            this.$router.push({path:a});
        }
    },
     props:{
        isCollapse:{
            type:Boolean,
            default:false
        },
        title: {
            type: String,
            default: "知识强化子系统"
        }
    }
}
</script>

<style scoped>
*{
    padding: 0;
    margin: 0;
}
@media (max-width: 991px){
  .main-panel{
    width: 100% !important;
  }
}
@media screen and (min-width: 991px) {
  .nav-mobile-menu {
    display: none;
  }
}
  a{
    cursor: pointer;
  }
  .sidebar{
    width: 200px;
    background:#304156;
    position: absolute;
    -webkit-transition: width 1s;
    -moz-transition: width 1s;
    -ms-transition: width 1s;
    -o-transition: width 1s;
    transition: width 1s;
  }
  /*.sidebar:hover{*/
    /*left: -260px;*/
  /*}*/
  #navigation-label:hover{
    color: #463e3e;
    opacity: .7;
  }
  #navigation-label{
    color: #8fa4a5;
    font-size: x-large;
    padding: 5px 0px;
    background-color: white;
    opacity: .3;
    position: absolute;
    top: 50%;
    left: 260px;
    z-index: 99;
  }
  .menu{
      background: pink;
  }
  .el-menu{
    height:100vh;
    }

.el-menu a{
    /*继承父级的值*/
    color: inherit;
    text-decoration:none;
}

.el-menu:not(.el-menu--collapse) {
    width: 200px;
    height: 100vh;
    z-index: 1111;
  }
  .el-menu--collapse {
    width: 64px;
    z-index: 1111;
}
.bigbox>.menu{
    background:#2c3e50;
    height: 100%;
}
.logicon{
    height: 60px;
    border:  none;
    margin: 0;
    padding: 10px;
    box-sizing: border-box;
    /* border-right: solid 1px #e6e6e6; */
    position: relative;
}
.simple-text{
    color: #fff;
    text-transform: uppercase;
    padding: 5px 0px;
    display: flex;
    font-size: 18px;
    font-weight: 400;
    line-height: 40px;
    text-decoration: none;
    z-index: 99999;
}
.logo-img{
    z-index: 99999;
    width: 40px;
    /* display: inline-block; */
    height: 40px;
    background: #FFFFFF;
    border-radius: 50%;
    text-align: center;
    /* overflow: hidden; */
    -webkit-box-shadow: 0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
    box-shadow: 0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
}
.logo-img>img{
    margin-top: 10%;
    width: 80%;
    height: 80%;
    background-size: cover;
}
</style>