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
            'Odoo es un ERP de código abierto escrito en Python que permite realizar modificaciones según necesidad del cliente.'
        },
        {
          code: 'C#', img: netCore, title: 'Aplicaciones Net Core', body: 'Desarrollo de sistemas web a medida\n' +
            'Experiencia trabajando con C# principalmente, tanto en MVC 5 como en Asp Net Core (webapi, API REST),' +
            ' desarrollando sistemas según requerimientos del cliente.'
        },
        {
          code: 'Vue', img: vue, title: 'Desarrollo Front End', body: 'Desarrollo Front End de aplicaciones con Vuejs.\n' +
            'Aplicación realtime con Firebase y diseños mediante Bootstrap o Vuetify.'
        },
        {
          code: 'Firebase', img: firebase, title: 'Desarrollo con Plataforma Firebase', body: 'Desarrollo de proyectos' +
            ' personales utilizando la plataforma de Google Firebase.\n' +
            'De momento, nada relacionado a clientes.'
        },
        {
          code: 'Android', img: android, title: 'Aplicaciones Android', body: 'Desarrollo de aplicaciones Android a' +
            ' nivel de proyectos personales.\n De momento, nada solicitado por clientes.'
        }
      ]
    })
  }
</script>
