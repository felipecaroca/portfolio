<template>
    <v-navigation-drawer app>
        <v-list>
            <v-list-item>
                <v-list-item-action>
                    foto
                </v-list-item-action>
            </v-list-item>
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="display-1">
                        Felipe Caroca
                    </v-list-item-title>
                    <v-list-item-subtitle class="justify-center">
                        Desarrollador de Software
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
        </v-list>
        <v-list shaped>
            <v-list-item v-for="item in items">
                <v-list-item-content>
                    <v-list-item-title>
                        <v-btn text rounded @click="$vuetify.goTo(item.path)">
                            {{item.name}}
                        </v-btn>

                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
        <v-list>
            <v-list-item>
                <v-list-item-title>
                    <v-btn icon @click="$store.commit('changeTheme')">
                        <v-icon>fas fa-adjust</v-icon>
                    </v-btn>


                </v-list-item-title>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    export default {
        data(){
            return{
                items:[
                    {name: 'Sobre Mí', path:'#about'},
                    {name: 'Experiencia', path: '#experience'},
                    {name: 'Conocimientos y Educación', path: '#knowledge'},
                    {name: 'Portafolio', path: '#portfolio'},
                    {name: 'Clientes',path: '#customers'},
                    {name: 'Contacto', path: '#contact'}
                ]
            }
        }
    }
</script>