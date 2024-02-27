<template>
    <v-layout v-resize="resize">
        <v-col>
            <presentation-component></presentation-component>
            <about-component></about-component>
            <experience-component></experience-component>
            <knowledge-component></knowledge-component>
            <portfolio-component></portfolio-component>
            <contact-component></contact-component>
        </v-col>
    </v-layout>
</template>

<script>

export default {
        name: 'HomeComponent',
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