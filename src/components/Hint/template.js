export default (text) => {
  const button = '<button class="hint__button">?</button>';
  const hint = `<div class="hint__text"><p>${text}</p></div>`;

  return `<div class="hint">${hint}${button}</div>`;
};
