import '@/style.styl';
import MainScreen from '@/pages/MainScreen/index';

let app = document.querySelector('#app');

if (!app) {
  app = document.createElement('div');
  app.id = '#app';
}

const mainScreen = new MainScreen(app);

mainScreen.render();
