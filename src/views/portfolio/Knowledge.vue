<template>
    <layout-base id="knowledge">
      <v-row>
        <v-col>
          <h1>Educación</h1>
          <v-alert>
            lala
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
    export default {
      data: ()=>({
        data:[
          {title: 'Python', rating: 4},
          {title: 'Odoo ERP', rating: 4},
          {title: 'Visual Studio C#', rating: 4},
          {title: 'Vue', rating: 4},
          {title: 'Android', rating: 3},
          {title: 'Firebase', rating: 3},
          {title: 'Bootstrap', rating: 4},
          {title: 'API REST', rating: 4},
        ]
      })
    }
</script>
