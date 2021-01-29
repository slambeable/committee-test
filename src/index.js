import '@/style.styl';
import MainScreen from '@/pages/MainScreen/index';

const app = document.querySelector('#app');
const mainScreen = new MainScreen(app);

mainScreen.render();
