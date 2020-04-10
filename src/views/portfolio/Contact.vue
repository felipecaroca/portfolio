<template>
  <layout-base id="contact">
    <v-row>
      <v-col>
        <h1>Contacto</h1>
        <v-expansion-panels>
          <v-expansion-panel
              v-for="(item,i) in data"
              :key="i"
          >
            <v-expansion-panel-header>{{item.title}}</v-expansion-panel-header>
            <v-expansion-panel-content v-html="item.contact" v-if="item.html" />
            <v-expansion-panel-content v-else >
              {{item.contact}}
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>

  </layout-base>
</template>

<script>
  export default {
    data:()=>({
      data: [
        {
          title: 'Correo Electrónico',
          contact: 'felipe.caroca.dev@gmail.com'
        },
        {
          title: 'Linkedin',
          contact:
            '<a style="margin-bottom: 15px; margin-left: 20px;"  href="https://www.linkedin.com/in/felipecarocaosorio/" target="blank">Click Aquí</a>',
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
