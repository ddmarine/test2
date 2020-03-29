<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
.w100{
  width: 100%;
}
.disf{
  display: flex
}
.disb{
  display: block;
}
.disn{
  display: none;
}
.texc{
  text-align: center;
}
.mar{
  margin: 0 auto;
}
.abs{
  position: absolute;
}
.rel{
  position: relative;
}
.le{
  float: left;
}
.rig{
  float: right;
}
.ul{
  list-style: none;
}
.oveh{
  overflow: hidden;
}
</style>
