import { createApp } from 'vue';
import App from './App.vue';
import './assets/css/animate.css';
import './assets/css/bootstrap.css';
import './assets/css/bootstrap-datetimepicker.min.css';
import './assets/css/flexslider.css';
import './assets/css/icomoon.css';
import './assets/css/simple-line-icons.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLine } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import $ from 'jquery';

window.jQuery = $;
window.$ = $;

const legacyScripts = [
  '/js/bootstrap.min.js',
  '/js/bootstrap-datetimepicker.min.js',
  '/js/jquery.easing.1.3.js',
  '/js/jquery.waypoints.min.js',
  '/js/jquery.flexslider-min.js',
  '/js/jquery.stellar.min.js',
  '/js/main.js'
];

const loadScript = (src) => new Promise((resolve, reject) => {
  const script = document.createElement('script');
  script.src = src;
  script.async = false;
  script.onload = () => resolve();
  script.onerror = () => reject(new Error(`Failed to load ${src}`));
  document.head.appendChild(script);
});

(async () => {
  try {
    for (const src of legacyScripts) {
      await loadScript(src);
    }

    library.add(faLeaf);
    library.add(faInstagram);
    library.add(faLine);

    const app = createApp(App);
    app.component('FontAwesome', FontAwesomeIcon);
    app.mount('#app');
  } catch (error) {
    console.error('Failed to initialize application:', error);
  }
})();

