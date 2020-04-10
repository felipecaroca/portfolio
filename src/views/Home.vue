<template>
    <v-layout v-resize="resize">
        <v-flex>
            <presentation></presentation>
            <about></about>
            <experience></experience>
            <knowledge></knowledge>
            <portfolio></portfolio>
<!--            <customers></customers>-->
            <contact></contact>
        </v-flex>
    </v-layout>


</template>

<script>

    export default {
        mounted(){
          this.resize()
        },
        methods:{
            resize(){
                this.$store.commit('setHeight',window.innerHeight)
            }
        }
    }
</script>