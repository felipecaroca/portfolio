<template>
  <layout-base id="knowledge">
    <v-row>
      <v-col>
        <h1>Educación</h1>
        <v-alert
          style="margin-bottom: 10px;"
                 :colored-border="true"
                 elevation="1"
                 color="red"
                 icon="mdi-school"
                 v-for="item in education"
                 :key="item.$id"
        >
          <div>
            {{item.institute}}
          </div>
          <div align="center">
            {{item.degree}}
          </div>
          <div align="right">
            {{item.city}}
          </div>
          <div>
            <v-dialog v-model="item.dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
              <template v-slot:activator="{ props: activatorProps }">
                <v-btn v-bind="activatorProps">Ver</v-btn>
              </template>
              <v-card>
                <v-toolbar dark color="primary">
                  <v-btn icon dark @click="item.dialog = false">
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                  <v-toolbar-title>{{item.degree}}</v-toolbar-title>
                </v-toolbar>
                <v-img :src="item.title" />
              </v-card>
            </v-dialog>
          </div>
        </v-alert>
      </v-col>
      <v-col>
        <h1>Habilidades</h1>
        <v-sheet>
          <v-row v-for="item in data" :key="item.id">
            <v-col align-self="center" align="right">
              {{item.title}}
            </v-col>
            <v-col>
              <v-rating v-model="item.rating">
                <template v-slot:item="props">
                  <v-icon
                      color="red lighten-1"
                      large
                  >
                    {{ props.isFilled ? 'mdi-star-circle' : 'mdi-circle-outline' }}
                  </v-icon>
                </template>
              </v-rating>
            </v-col>
          </v-row>
        </v-sheet>
      </v-col>
    </v-row>

  </layout-base>
</template>

<script>
  import tecnico from '../../assets/tecnico.jpg'
  import diplomado from '../../assets/diplomado.jpg'
  import ingenieria from '../../assets/ingenieria.jpg'

export default {
    name:'KnowledgeComponent',
    data: () => ({
      data: [
        {title: 'Typescript', rating: 4},
        {title: 'Javascript', rating: 4},
        {title: 'Visual Studio C#', rating: 3},
        {title: 'React', rating: 4},
        {title: 'React native', rating: 2},
        {title: 'Graphql', rating: 4},
        {title: 'Mongodb', rating: 4},
        {title: 'API REST', rating: 4},
      ],
      education: [
        {
          institute: 'AIEP Rancagua',
          degree: 'Ingeniería en Ejecución en Informática Mención Desarrollo de Sistemas',
          city: 'Rancagua, 2018',
          title: ingenieria,
          dialog: false
        },
        {
          institute: 'Escuela de Formación Técnica Chile',
          degree: 'Diplomado en C#',
          city: 'Santiago, 2017',
          title: diplomado,
          dialog: false
        },
        {
          institute: 'AIEP Rancagua',
          degree: 'Técnico de Nivel Superior en Programación computacional',
          city: 'Rancagua, 2016',
          title: tecnico,
          dialog: false
        }
      ]
    })
  }
</script>
