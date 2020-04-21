<template>
    <v-navigation-drawer app>
        <v-list align="center">
            <v-list-item>
                <v-list-item-title>
                    <v-img
                        style="border-radius: 100% !important;"
                        :src="logo"
                        width="100"
                        height="100"
                    ></v-img>
                </v-list-item-title>
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
        <v-divider></v-divider>
        <v-list align="center">
            <v-list-item v-for="item in items" :key="item.id">
                <v-list-item-content>
                    <v-list-item-title>
                        <v-btn text rounded @click="$vuetify.goTo(item.path)">
                            {{item.name}}
                        </v-btn>

                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
        <v-list align="center">
            <v-list-item>
                <v-list-item-title>
                    <v-btn icon @click="$store.commit('changeTheme')">
                        <v-icon>fas fa-adjust</v-icon>
                    </v-btn>
                </v-list-item-title>
            </v-list-item>
            <v-list-item>
                <v-list-item-title>
<!--                    <v-btn-->
<!--                            icon-->

<!--                    >-->
<!--                        <v-icon>fab fa-youtube</v-icon>-->
<!--                    </v-btn>-->
                    <v-btn
                            icon
                            href="https://www.linkedin.com/in/felipecarocaosorio/"
                            target="_blank"
                    >
                        <v-icon>fab fa-linkedin</v-icon>
                    </v-btn>
                    <v-btn
                            icon
                            href="https://github.com/felipecaroca"
                            target="_blank"
                    >
                        <v-icon>fab fa-github</v-icon>
                    </v-btn>
                </v-list-item-title>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    import logo from '../../assets/foto_feli.jpg'
    export default {
        data(){
            return{
                logo,
                items:[
                    {name: 'Sobre Mí', path:'#about'},
                    {name: 'Experiencia', path: '#experience'},
                    {name: 'Habilidades y Educación', path: '#knowledge'},
                    {name: 'Portafolio', path: '#portfolio'},
                //    {name: 'Clientes',path: '#customers'},
                    {name: 'Contacto', path: '#contact'}
                ]
            }
        }
    }
</script>