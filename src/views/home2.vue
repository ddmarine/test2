<template>
  <div @click="goHome1()">
      <P>11111</P>
  </div>
</template>

<script>
export default {
    methods:{
        goHome1(){
            this.$router.push({path:"/home2/home"});
        }
    }
}
</script>

<style>

</style>