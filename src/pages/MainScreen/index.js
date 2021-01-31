import { mobileLogicForButton } from '@/mixins/utils';
import smoothscroll from 'smoothscroll-polyfill';
import InputRange from '@/components/InputRange/index';
import template from './template';
import './style.styl';

export default class MainScreen {
  constructor(app) {
    this.container = app;
    this.element = '';
  }

  render() {
    smoothscroll.polyfill();

    this.container
      .insertAdjacentHTML(
        'beforeend',
        template(),
      );
    this.element = this.container
      .querySelector('.main-screen');

    const element = this.element
      .querySelector('.start-block');

    const inputRange = new InputRange(element);
    inputRange.render();
    inputRange.addHandlers();

    this.addHandlers();

    return this.element;
  }

  addHandlers() {
    const element = this.element
      .querySelector('.end-block-relocate__button');

    element.addEventListener('click', () => {
      window.open('https://alfabank.ru/make-money/investments/');
    });

    mobileLogicForButton(
      element,
      'end-block-relocate__button',
    );
  }

  remove() {
    this.container.removeChild(this.element);
  }
}
