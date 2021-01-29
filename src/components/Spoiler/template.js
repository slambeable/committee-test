export default (middleDepositsOfAllUsers, image, firstChart, secondChart) => {
  const header = '<summary class="spoiler-header">А как в среднем у читателей vc.ru?<span class="spoiler-header__image"></span></summary>';

  const firsElementImage = `<div class="spoiler-element__stash-image spoiler-element__stash-image_${image}">~ ${middleDepositsOfAllUsers} ₽</div>`;
  const firstElementText = '<p class="spoiler-element__stash-text">в среднем откладывают читатели vc.ru<p>';
  const firstElement = `<div class="spoiler-element">
    ${firsElementImage}
    ${firstElementText}
  </div>`;

  const secondElementProgressRing = `<svg class="progress-ring progress-ring-first" width="140" height="140">
    <circle class="progress-ring__circle" stroke="#fff" stroke-width="15" fill="transparent" r="45" cx="70" cy="70"></circle>
    <circle class="progress-ring__circle-progress" stroke="#fe4d4a" stroke-width="30" fill="transparent" r="52" cx="70" cy="70"></circle>
  </svg>`;
  const secondElementPercent = `<p class="spoiler-element__stash-percent">${firstChart.percent}<p>`;
  const secondElementText = `<p class="spoiler-element__stash-text">${firstChart.text}<p>`;
  const secondElement = `<div class="spoiler-element">
    ${secondElementProgressRing}
    ${secondElementPercent}
    ${secondElementText}
  </div>`;

  const thirdElementProgressRing = `<svg class="progress-ring progress-ring-second" width="140" height="140">
    <circle class="progress-ring__circle" stroke="#fff" stroke-width="15" fill="transparent" r="45" cx="70" cy="70"></circle>
    <circle class="progress-ring__circle-progress" stroke="#fe4d4a" stroke-width="30" fill="transparent" r="52" cx="70" cy="70"></circle>
  </svg>`;
  const thirdElementPercent = `<p class="spoiler-element__stash-percent">${secondChart.percent}<p>`;
  const thirdElementText = `<p class="spoiler-element__stash-text">${secondChart.text}<p>`;
  const thirdElement = `<div class="spoiler-element">
    ${thirdElementProgressRing}
    ${thirdElementPercent}
    ${thirdElementText}
  </div>`;

  return `<details class="spoiler">${header}${secondElement}${thirdElement}${firstElement}</details>`;
};
