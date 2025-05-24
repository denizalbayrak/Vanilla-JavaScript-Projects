const items = [...document.querySelectorAll('.number')];

const updateCount = (el) => {
  const value = parseInt(el.dataset.value);
  const increment = Math.ceil(value / 1000);
  let initialValue = 0;

  const increaseCount = setInterval(() => {
    initialValue += increment;

    if (initialValue > value) {
      el.textContent = `${value.toLocaleString('tr-TR')}+`;
      clearInterval(increaseCount);
      return;
    }

    el.textContent = `${initialValue.toLocaleString('tr-TR')}+`;
  }, 1);
};

items.forEach((item) => {
  updateCount(item);
});
