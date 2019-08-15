<template>
    <v-layout class="pa-3" :style="'min-height: '+y+'px !important;'">
        <slot></slot>
    </v-layout>
</template>

<script>
    export default {
        computed: {
            y() {
                return this.$store.getters.height
            }
        }
    }
</script>