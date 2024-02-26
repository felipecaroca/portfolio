<template>
    <v-navigation-drawer app>
        <v-list align="center">
            <v-list-item>
                <v-list-item-title>
                    <v-img
                        style="border-radius: 100% !important;"
                        :src="logo"
                        cover
                        width="100"
                        height="100"
                    ></v-img>
                </v-list-item-title>
            </v-list-item>
            <v-list-item>                
                <v-list-item-title class="display-1">
                    Felipe Caroca
                </v-list-item-title>
                <v-list-item-subtitle class="justify-center">
                    Desarrollador de Software
                </v-list-item-subtitle>                
            </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list align="center">
            <v-list-item v-for="item in items" :key="item.id" variant="plain"  @click="navigateTo(item.path)">                
                <v-list-item-title>                        
                    {{item.name}}
                </v-list-item-title>                
            </v-list-item>
        </v-list>
        <v-list align="center">
            <v-btn icon @click="toggleTheme()">
                <v-icon icon="mdi-theme-light-dark"></v-icon>
            </v-btn>            
        </v-list>
        <v-list align="center" >
            <v-btn
                icon
                href="https://www.linkedin.com/in/felipecarocaosorio/"
                target="_blank"
            >
                <v-icon icon="mdi-linkedin"></v-icon>
            </v-btn>
            <v-btn
                icon
                href="https://github.com/felipecaroca"
                target="_blank"
            >
                <v-icon icon="mdi-github"></v-icon>
            </v-btn>        
        </v-list>
    </v-navigation-drawer>
</template>

<script>
import logo from '../../assets/foto_feli.jpg'
import { useGoTo, useTheme } from 'vuetify'


export default {
    name: 'DrawerComponent',    
    data(){
        return {
            active: '#about',
            logo,
            items:[
                {name: 'Sobre Mí', path:'#about'},
                {name: 'Experiencia', path: '#experience'},
                {name: 'Habilidades y Educación', path: '#knowledge'},
                {name: 'Portafolio', path: '#portfolio'},
                {name: 'Contacto', path: '#contact'}
            ]
        }
    },
    setup() {
        const navigateTo = useGoTo()
        const theme = useTheme()
        

        return {
            navigateTo,
            toggleTheme() {
                theme.global.name.value  = theme.global.current.value.dark? 'light': 'dark'
            }
        }
    }
}
</script>