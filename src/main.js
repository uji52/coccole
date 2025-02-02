import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/animate.css'
import './assets/css/bootstrap.css'
import './assets/css/bootstrap-datetimepicker.min.css'
import "./assets/css/flexslider.css"
import './assets/css/icomoon.css'
import './assets/css/simple-line-icons.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLeaf } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faLine } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'bootstrap/dist/js/bootstrap.js'

library.add(faLeaf)
library.add(faInstagram)
library.add(faLine)

var app = createApp(App)
app.component('FontAwesome', FontAwesomeIcon )
app.mount('#app')
