import { giveADepositWithCapitalization, getPercent } from '@/mixins/utils';
import { hints } from '@/mixins/data';
import template from './template';
import './style.styl';
import Hint from '../Hint/index';

export default class CashProfit {
  constructor(container, value, description, index) {
    this.container = container;
    this.value = Number(value);
    this.description = description;
    this.index = index;
    this.element = '';
    this.monthsInYear = 12;
    this.years = 3;
    this.percentInDeposit = 6.98;
    this.percentInInvestment = 71.21;
  }

  get maxValue() {
    const deposit = this.value * this.monthsInYear * this.years;

    return deposit + getPercent(deposit, this.percentInInvestment);
  }

  get deposit() {
    switch (this.index + 1) {
      case 2:
        return giveADepositWithCapitalization(
          this.value * this.monthsInYear,
          this.years,
          this.percentInDeposit,
        );
      case 3:
        return this.maxValue;
      default:
        return this.value * this.monthsInYear * 3;
    }
  }

  get countOfCoins() {
    const step = this.maxValue / 10;

    return Math.ceil(this.deposit / step);
  }

  render() {
    this.container
      .insertAdjacentHTML(
        'beforeend',
        template(
          this.countOfCoins,
          Math.floor(this.deposit),
          this.description,
          this.index,
        ),
      );

    this.element = [
      ...this.container
        .querySelectorAll('.cash')][this.index];
    const description = this.element
      .querySelector('.cash__description > p');

    const hint = new Hint(description, hints[this.index]);

    hint.render();
    hint.addHandlers(
      this.container,
      this.index,
    );

    return this.element;
  }

  remove() {
    this.container.removeChild(this.element);
  }
}
