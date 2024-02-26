import {createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import '@fortawesome/fontawesome-free/css/all.css'

const app = createApp(App)

app.use(vuetify)
  .use(router)
  .use(store)
  .component('presentation-component', require('./views/portfolio/Presentation').default)
  .component('about-component',require('./views/portfolio/About').default)
  .component('experience-component',require('./views/portfolio/Experience').default)
  .component('knowledge-component',require('./views/portfolio/Knowledge').default)
  .component('portfolio-component',require('./views/portfolio/Portfolio').default)
  .component('customers-component',require('./views/portfolio/Customers').default)
  .component('contact-component', require('./views/portfolio/Contact.vue').default)
  .component('drawer-component',require('./components/nav/drawer').default)
  .component('layout-base',require('./components/html/layoutBase').default)
  .mount('#app')
