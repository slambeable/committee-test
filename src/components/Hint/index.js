import { mobileLogicForButton } from '@/mixins/utils';
import template from './template';
import './style.styl';

export default class Hint {
  constructor(container, text) {
    this.container = container;
    this.element = '';
    this.text = text;
    this.hintElements = [];
    this.textLeft = 0;
  }

  render() {
    this.container
      .insertAdjacentHTML(
        'beforeend',
        template(this.text),
      );
    this.element = this.container.querySelector('.hint');

    return this.element;
  }

  closeAllHint(container) {
    this.hintElements = this.hintElements.length === 0
      ? [...container.querySelectorAll('.hint__text')]
      : this.hintElements;

    this.hintElements.forEach((element) => {
      element
        .classList
        .remove('hint__text_show');
    });
  }

  addHandlers(container, index) {
    const buttonElement = this.element
      .querySelector('.hint__button');
    const textElement = this.element
      .querySelector('.hint__text');
    const app = document
      .querySelector('#app');

    const getTopForText = (target) => {
      const textHeight = textElement.offsetHeight;
      const buttonTop = target.offsetTop;
      const distanceBetweenTextAndButton = 17;

      return `${buttonTop - textHeight - distanceBetweenTextAndButton}px`;
    };

    const getLeftOrRightForText = (target) => {
      const buttonLeft = target.offsetLeft;
      const thirdOfTheCorner = 117;
      const appPadding = 15;

      const appWidthWithLeft = app.offsetLeft + app.offsetWidth;
      const textWidth = textElement.offsetWidth;

      if (appWidthWithLeft < (textWidth + buttonLeft)) {
        return `${appWidthWithLeft - textWidth - appPadding}px`;
      }

      return `${buttonLeft - thirdOfTheCorner}px`;
    };

    const getLeftForCorner = (target) => {
      const textLeft = textElement.offsetLeft;
      const buttonLeft = target.offsetLeft;
      const adjustmentLeftPosition = 3;

      return `${buttonLeft - textLeft + adjustmentLeftPosition}px`;
    };

    buttonElement.addEventListener('click', ({ target }) => {
      textElement.classList.add('hint__text_show');

      textElement.style.top = getTopForText(target);
      textElement.style.left = getLeftOrRightForText(target);
      textElement.style.setProperty('--corner-left', getLeftForCorner(target));
    });

    if (!index) {
      document.addEventListener('click', () => {
        this.closeAllHint(container);
      }, true);
      window.addEventListener('resize', () => {
        this.closeAllHint(container);
      }, true);
    }

    mobileLogicForButton(
      buttonElement,
      'hint__button',
    );
  }

  remove() {
    this.container.removeChild(this.element);
  }
}
