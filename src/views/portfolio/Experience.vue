<template>
  <layout-base id="experience">
    <v-row>
      <v-col>
        <h1>Experiencia</h1>

        <v-timeline :reverse="false">
          <v-timeline-item
              v-for="reg in data"
              :key="reg.id"
          >
            <template v-slot:icon>
              <v-avatar>
                <img :src="reg.img">

              </v-avatar>
            </template>
            <template v-slot:opposite>
              <span>{{reg.code}}</span>
            </template>
            <v-card class="elevation-2">
              <v-card-title class="headline">{{reg.title}}</v-card-title>
              <v-card-text>
                {{reg.body}}
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
  </layout-base>
</template>

<script>
  import odoo from '../../assets/odoo.png'
  import netCore from '../../assets/net_core.png'
  import vue from '../../assets/vue.png'
  import firebase from '../../assets/firebase.png'
  import android from '../../assets/android.png'

  export default {
    data: () => ({
      data: [
        {
          code: 'Python', img: odoo, title: 'Desarrollo Odoo', body: 'Desarrollo de módulos para Odoo.\n' +
            'Odoo es un ERP de código abierto escrito en python que permite realizar modificaciones según necesidad del cliente.'
        },
        {
          code: 'C#', img: netCore, title: 'Aplicaciones Net Core', body: 'Desarrollo de sistemas web a medida\n' +
            'Experiencia trabajando con c# principalmente, tanto en mvc5 como en asp net core (webapi, API REST),' +
            ' desarrollando sistemas según requerimientos del cliente'
        },
        {
          code: 'Vue', img: vue, title: 'Desarrollo Front End', body: 'Desarrollo front end de aplicaciones con vuejs.\n' +
            'Aplicación de realtime con firebase y diseños mediante bootstrap o vuetify'
        },
        {
          code: 'Firebase', img: firebase, title: 'Desarrollo con Plataforma Firebase', body: 'Desarrollo de proyectos' +
            ' personales utilizando la plataforma de google Firebase.\n' +
            'De momento, nada relacionado a clientes'
        },
        {
          code: 'Android', img: android, title: 'Aplicaciones Android', body: 'Desarrollo de aplicaciones android a' +
            ' nivel de proyectos personales.\n De momento, nada solicitado por cliente.'
        }
      ]
    })
  }
</script>
