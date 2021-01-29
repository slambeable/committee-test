export default () => {
  const firstTitle = '<h1 class="start-block__first-title">Сколько денег вы откладываете в месяц?</h1>';
  const description = '<p class="start-block__description">Ответьте и узнаете, сколько копят другие.</p>';
  const inputRangeWrapper = '<div class="input-range-wrapper"></div>';

  const startBlock = `<div class="start-block">
    ${firstTitle}
    ${description}
    ${inputRangeWrapper}
  </div>`;

  const secondTitle = '<h1 class="end-block__second-title">Вы откладываете <span class="money"></span>&nbsp;₽ в месяц.<br> За три года вы бы заработали:</h1>';
  const moneyWrapper = '<div class="money-wrapper"></div>';
  const spoilerWrapper = '<div class="spoiler-wrapper"></div>';

  const questionText = '<p class="end-block-relocate__text">Как начать инвестировать?</p>';
  const questionButton = '<button class="end-block-relocate__button">Узнать?</button>';
  const relocate = `<div class="end-block-relocate">
    ${questionText}
    ${questionButton}
  </div>`;

  const endBlock = `<div class="end-block">
    ${secondTitle}
    ${moneyWrapper}
    ${spoilerWrapper}
    ${relocate}
  </div>`;

  return `<div class="main-screen">${startBlock}${endBlock}</div>`;
};
