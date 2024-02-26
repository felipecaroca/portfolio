<template>
  <layout-base id="contact">
    <v-row align="center">
      <v-col>
        <h1>Contacto</h1>
        <v-expansion-panels>
          <v-expansion-panel
              v-for="(item,i) in data"
              :key="i"
          >
            <v-expansion-panel-title>{{item.title}}</v-expansion-panel-title>
 
            <v-expansion-panel-text v-if="item.html">
              <a :href="item.contact"
                   target="_blank"
                >
                   Click aquí
                </a>
            
            </v-expansion-panel-text>
            <v-expansion-panel-text v-else >
              {{item.contact}}
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>

  </layout-base>
</template>

<script>
export default {
    name: 'ContactComponent',
    data:()=>({
      data: [
        {
          title: 'Correo Electrónico',
          contact: 'felipe.caroca.dev@gmail.com'
        },
        {
          title: 'Linkedin',
          contact:'https://www.linkedin.com/in/felipecarocaosorio',
          html: true
        },
        {
          title: 'Teléfono',
          contact: '+56 9 7446 9027'
        },
      ]
    })
  }
</script>
