import './scss/bootstrap.scss';
import 'popper.js'; // Used by Bootstrap 4
import '../node_modules/bootstrap/js/dist/dropdown';

import { createApp } from 'vue';
import router from './router';
import App from './App';

const app = createApp(App);
app.use(router);
app.mount(document.querySelector('#root'));
