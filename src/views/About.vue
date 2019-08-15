<template>
  <v-layout fill-height id="about" :style="'height: '+y+'px;'">
    <h1>This is an about page </h1>
  </v-layout>
</template>
<script>
  export default {
    computed:{
      y(){
        return this.$store.getters.height
      }
    }
  }
</script>
