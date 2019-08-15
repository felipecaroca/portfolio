<template>
    <v-layout id="experience" :style="'height: '+y+'px;'">
        <h1>lalala</h1>
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
