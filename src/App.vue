<template>
    <v-app>
        <v-row>
            <v-col cols="3">
                <drawer-component />
            </v-col>
            <v-col >
                <v-container fluid>
                    <router-view></router-view>
                </v-container>
            </v-col>
        </v-row>
        
    </v-app>
</template>

<script>


export default {
        
        created() {
            this.$vuetify.theme.dark = this.dark
        },
        watch:{
            dark:function(){
                this.$vuetify.theme.dark = this.dark
            }
        },
        computed:{
            dark() {
                return this.$store.getters.dark
            }
        }
    };
</script>
