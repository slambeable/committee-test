export const createArray = (length) => Array.apply(null, ...[{ length }]).map(Number.call, Number);

export const getPercent = (number, percent) => (number / 100) * percent;

export const addSpaceAfterThreeSymbol = (s) => String(s).replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1\u00A0');

export const giveADepositWithCapitalization = (deposit, year, percent) => {
  let result = 0;

  for (let i = 0; i < year; i += 1) {
    result = result + deposit + getPercent(result + deposit, percent);
  }

  return result;
};

export const mobileLogicForButton = (button, buttonsClass) => {
  button.addEventListener('touchstart', () => {
    button.classList.add(`${buttonsClass}_touch`);
  });

  button.addEventListener('touchend', () => {
    button.classList.remove(`${buttonsClass}_touch`);
  });
};
