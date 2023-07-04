let counter = 0;
const interval = setInterval(() => {
  const button = document.querySelector('.add-address-form-btn');
  if (button && counter < 19) {
    button.click();
    counter++;
    console.log('Кнопка нажата:', counter);
  } else {
    clearInterval(interval);
    console.log('Завершено');
  }
}, 1000);
