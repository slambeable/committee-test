export default () => {
  const min = '<span class="input-range__min">0 ₽</span>';
  const max = '<span class="input-range__max">50 000 ₽</span>';
  const bubble = '<div class="input-range-wrapper__bubble"></div>';
  const input = `<input
    min="0"
    max="50000"
    class="input-range-wrapper__input styled-slider slider-progress"
    value="0"
    type="range"
  >`;
  const wrapper = `<div class="input-range-wrapper">
  ${bubble}
  ${input}
  </div>`;

  return `<div class="input-range">${min}${wrapper}${max}</div>`;
};
