import Vue from 'vue';
import App from './App.vue';

import data from './data';
import showMessage from './function';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');

alert(data.messageFirst);
alert(data.messageLast);
showMessage('Function message one');
showMessage('Function message two');
