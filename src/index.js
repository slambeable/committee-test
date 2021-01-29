import '@/style.styl';
import MainScreen from '@/pages/MainScreen/index';

document.addEventListener('DOMContentLoaded', () => {
  let app = document.querySelector('#app');

  if (!app) {
    app = document.createElement('div');
    app.id = 'app';
  }

  document.body.append(app);

  const mainScreen = new MainScreen(app);

  mainScreen.render();
});
