<template>
    <v-layout v-resize="resize">
        <v-flex>
            <about></about>
            <experience></experience>
        </v-flex>
    </v-layout>


</template>

<script>
    import about from './About'
    import experience from './Experience'
    export default {
        mounted(){
          this.resize()
        },
        methods:{
            resize(){
                this.$store.commit('setHeight',window.innerHeight)
            }
        },
        components:{about,experience}
    }
</script>