import { charts, chartsHeader, middleDepositsOfAllUsers } from '@/mixins/data';
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

  getIndexOfImage() {
    if (this.value < 11000) return 0;
    if (this.value < 21000) return 1;
    if (this.value < 31000) return 2;
    if (this.value < 41000) return 3;
    return 4;
  }

  render() {
    this.container.insertAdjacentHTML('beforeend', template(
      middleDepositsOfAllUsers,
      this.averageSumOfAllUsersImages[this.getIndexOfImage()],
      charts[0],
      charts[1],
    ));
    this.element = this.container.querySelector('.spoiler');

    return this.element;
  }

  addHandlers() {
    const element = this.element.querySelector('.spoiler-header');
    const firstCircle = this.element.querySelector('.progress-ring-first > .progress-ring__circle-progress');
    const secondCircle = this.element.querySelector('.progress-ring-second > .progress-ring__circle-progress');
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

      if (!this.element.classList.contains('spoiler_open')) {
        this.element.classList.add('spoiler_open');
        this.element.setAttribute('open', 'open');

        element.innerHTML = chartsHeader.openChart;

        setTimeout(setCircleProgress, 1, firstCircle, this.percent[0]);
        setTimeout(setCircleProgress, 1, secondCircle, this.percent[1]);

        element.scrollIntoView({ behavior: 'smooth', block: 'end' });
      } else {
        this.element.classList.remove('spoiler_open');
        this.element.removeAttribute('open');

        element.innerHTML = chartsHeader.closeChart;

        setCircleProgress(firstCircle, 0);
        setCircleProgress(secondCircle, 0);
      }
    });
  }

  remove() {
    this.container.removeChild(this.element);
  }
}
