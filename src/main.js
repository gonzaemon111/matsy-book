import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import firebase from "firebase"
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyC_gi6jHdIhHuTsfzCZWYXTQD1vsgTTlKg",
  authDomain: "matsy-books.firebaseapp.com",
  databaseURL: "https://matsy-books.firebaseio.com",
  projectId: "matsy-books",
  storageBucket: "matsy-books.appspot.com",
  messagingSenderId: "440309958464",
  appId: "1:440309958464:web:7944df26baea29eb1f1ca5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
