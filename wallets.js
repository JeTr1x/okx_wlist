const wallets = [
  'wallet1',
  'wallet2',
  'wallet3',
  'wallet4',
  'wallet5',
  'wallet6',
  'wallet7',
  'wallet8',
  'wallet9',
  'wallet10',
  'wallet11',
  'wallet12',
  'wallet13',
  'wallet14',
  'wallet15',
  'wallet16',
  'wallet17',
  'wallet18',
  'wallet19', 
  'wallet20'
];

const placeholderStr = "Введите ваш адрес USDT";
const usdtInputs = Array.from(document.querySelectorAll(`input[placeholder="${placeholderStr}"]`));

if (usdtInputs.length === wallets.length) {
  usdtInputs.forEach((input, index) => {
    setTimeout(() => {
      input.setAttribute('value', wallets[index]);
      input.dispatchEvent(new Event('input', { bubbles: true }));
    }, index * 1500); // Задержка 1.5 секунды (1500 миллисекунд)
  });
} else {
  console.error('Количество полей и кошельков не совпадает');
}
