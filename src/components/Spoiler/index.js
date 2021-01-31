import { charts, chartsHeader, middleDepositsOfAllUsers } from '@/mixins/data';
import { addSpaceAfterThreeSymbol } from '@/mixins/utils';
import template from './template';
import './style.styl';

export default class Spoiler {
  constructor(container, value) {
    this.container = container;
    this.value = Number(value);
    this.maxValue = 50000;
    this.element = '';
    this.percent = [50, 7];
    this.averageSumOfAllUsersImages = [
      'very-small',
      'small',
      'medium',
      'large',
      'very-large',
    ];
  }

  static getIndexOfImage() {
    if (middleDepositsOfAllUsers < 11000) return 0;
    if (middleDepositsOfAllUsers < 21000) return 1;
    if (middleDepositsOfAllUsers < 31000) return 2;
    if (middleDepositsOfAllUsers < 41000) return 3;
    return 4;
  }

  render() {
    this.container
      .insertAdjacentHTML(
        'beforeend',
        template(
          addSpaceAfterThreeSymbol(middleDepositsOfAllUsers),
          this.averageSumOfAllUsersImages[Spoiler.getIndexOfImage()],
          charts[0],
          charts[1],
        ),
      );

    this.element = this.container
      .querySelector('.spoiler');

    return this.element;
  }

  addHandlers() {
    const element = this.element
      .querySelector('.spoiler-header');
    const firstCircle = this.element
      .querySelector('.progress-ring-first > .progress-ring__circle-progress');
    const secondCircle = this.element
      .querySelector('.progress-ring-second > .progress-ring__circle-progress');

    const radius = firstCircle.r.baseVal.value;
    const circumference = radius * 2 * Math.PI;

    const setCircleStyle = (circle) => {
      const { style } = circle;

      style.strokeDasharray = `${circumference} ${circumference}`;
      style.strokeDashoffset = `${circumference}`;
    };

    setCircleStyle(firstCircle);
    setCircleStyle(secondCircle);

    const setCircleProgress = (circle, percent) => {
      const { style } = circle;

      const offset = circumference - (percent / 100) * circumference;
      style.strokeDashoffset = offset;
    };

    element.addEventListener('click', (e) => {
      e.preventDefault();

      if (!this.element
        .classList
        .contains('spoiler_open')) {
        this.element
          .classList
          .add('spoiler_open');
        this.element
          .setAttribute(
            'open',
            'open',
          );

        element.innerHTML = chartsHeader.openChart;

        setTimeout(
          setCircleProgress,
          1,
          firstCircle,
          this.percent[0],
        );
        setTimeout(
          setCircleProgress,
          1,
          secondCircle,
          this.percent[1],
        );

        this.element
          .scrollIntoView({ behavior: 'smooth' });
      } else {
        this.element
          .classList
          .remove('spoiler_open');
        this.element
          .removeAttribute('open');

        element.innerHTML = chartsHeader.closeChart;

        setTimeout(
          setCircleProgress,
          1,
          firstCircle,
          0,
        );
        setTimeout(
          setCircleProgress,
          1,
          secondCircle,
          0,
        );
      }
    });
  }

  remove() {
    this.container.removeChild(this.element);
  }
}
