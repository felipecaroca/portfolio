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
                <v-img :src="reg.img" />

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
  import nextjs from '../../assets/nextjs.png'
  import netCore from '../../assets/net_core.png'
  import nestjs from '../../assets/nestjs.png'
  import android from '../../assets/android.png'

  export default {
    name: 'ExperienceComponent',
  data: () => ({
      data: [
        {
          code: 'Nextjs', img: nextjs, title: 'Desarrollo Front End Nextjs React', body: `Desarrollo de sitios web con react Nextjs framework mayormente, utiizando typescript.`
      },
      {
          code: 'Nestjs', img: nestjs, title: 'Desarrollo Back End Nestjs', body: `Desarrollo de aplicaciones back End con framework Nestjs, utilizando graphql o API rest, distintos tipos de autenticaciones, real time con socket.io, entre otras cosas.`
        },
        {
          code: 'C#', img: netCore, title: 'Aplicaciones Net Core', body: 'Desarrollo de sistemas web a medida\n' +
            'Experiencia trabajando con C# principalmente, tanto en MVC 5 como en Asp Net Core (webapi, API REST),' +
            ' desarrollando sistemas según requerimientos del cliente.'
        },
        {
          code: 'Android', img: android, title: 'Aplicaciones Android', body: 'Desarrollo de aplicaciones Android a' +
            ' nivel de proyectos personales.\n De momento, nada solicitado por clientes.'
        }
      ]
    })
  }
</script>
