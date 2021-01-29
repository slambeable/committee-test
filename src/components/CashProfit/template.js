import { createArray, addSpaceAfterThreeSymbol } from '@/mixins/utils';

export default (countOfCoins, deposit, description, index) => {
  const amountOfMoneys = createArray(countOfCoins);
  const prefix = index === 2 ? 'до ~' : '~';

  const coinsElement = `<div class="coins-container">
      ${amountOfMoneys.map(() => `
      <div class="coins-container-wrapper">
      <div class="coins-container-wrapper__coin"></div>
      </div>`).join('')}
  </div>`;
  const depositElement = `<div class="cash__deposit">
    <p>
      ${prefix}${addSpaceAfterThreeSymbol(deposit)} ₽
    </p>
  </div>`;
  const descriptionElement = `<div class="cash__description"><p>${description}</p></div>`;

  return `<div class="cash">${coinsElement}${depositElement}${descriptionElement}</div>`;
};
