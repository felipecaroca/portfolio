<template>
    <v-app>
        <drawer />
        <v-content>
            <v-container>
                <router-view></router-view>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
    export default {
        data: () => ({

        }),
        created() {
            this.$vuetify.theme.dark = this.dark
        },
        watch:{
            dark:function(){
                this.$vuetify.theme.dark = this.dark
            }
        },
        computed:{
            dark(){
                return this.$store.getters.dark
            }
        }
    };
</script>
