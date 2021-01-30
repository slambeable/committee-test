import { moneys } from '@/mixins/data';
import { createArray, addSpaceAfterThreeSymbol } from '@/mixins/utils';
import template from './template';
import './style.styl';
import CashProfit from '../CashProfit/index';
import Spoiler from '../Spoiler/index';

export default class InputRange {
  constructor(container) {
    this.container = container;
    this.element = '';
  }

  giveProgressInput() {
    const sliderProgress = this.element.querySelector('.slider-progress');

    sliderProgress.style.setProperty('--value', sliderProgress.value);
    sliderProgress.style.setProperty('--min', sliderProgress.min === '' ? '0' : sliderProgress.min);
    sliderProgress.style.setProperty('--max', sliderProgress.max === '' ? '100' : sliderProgress.max);
    sliderProgress.addEventListener('input', () => sliderProgress.style.setProperty('--value', sliderProgress.value));
  }

  render() {
    this.container.insertAdjacentHTML('beforeend', template());
    this.element = this.container.querySelector('.input-range');

    this.giveProgressInput();

    return this.element;
  }

  addHandlers() {
    const element = this.element.querySelector('.input-range-wrapper__input');
    const bubble = this.element.querySelector('.input-range-wrapper__bubble');

    const cornerPositionAdjustment = 22;
    const bubblePositionAdjustment = 0.95;

    element.addEventListener('change', ({ target }) => {
      const endBlock = this.container.parentNode.querySelector('.end-block');
      const secondTitleMoney = endBlock.querySelector('.end-block__second-title > .money');
      const moneyWrapper = endBlock.querySelector('.money-wrapper');
      const spoilerWrapper = endBlock.querySelector('.spoiler-wrapper');
      const { value } = target;

      const moneysElements = createArray(3).map((currentElement, index) => (
        new CashProfit(moneyWrapper, value, moneys[index], index)));

      const spoiler = new Spoiler(spoilerWrapper, value);

      endBlock.classList.add('end-block_show');

      secondTitleMoney.textContent = addSpaceAfterThreeSymbol(value);

      moneysElements.forEach((currentElement) => {
        currentElement.render();
      });

      spoiler.render();

      spoiler.addHandlers();
      element.classList.add('input-range-wrapper__input_disabled');
      bubble.classList.remove('input-range-wrapper__bubble_show');

      endBlock.scrollIntoView({ behavior: 'smooth', block: 'top' });
    });

    element.addEventListener('input', ({ target }) => {
      const { valueAsNumber, max, offsetWidth: width } = target;
      const bubblePosition = `${((valueAsNumber / (max / width)) * bubblePositionAdjustment) - cornerPositionAdjustment}px`;

      bubble.classList.add('input-range-wrapper__bubble_show');
      bubble.textContent = valueAsNumber;

      bubble.style.setProperty('--bubble-left', bubblePosition);
    });
  }

  remove() {
    this.container.removeChild(this.element);
  }
}
