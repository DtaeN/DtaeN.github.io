let tg = window.Telegram.WabApp;

let dishes = {};

Telegram.WebApp.expand();
Telegram.WebApp.MainButton.setText("Заказать");
Telegram.WebApp.MainButton.color = "#12f00d";

function sendDataToTelegram(data) {
  // Формируем URL с данными
  const url = `https://t.me/your_bot_name?start=send_data_${data}`;

  // Отправляем данные в Telegram бот
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
      }
      return response.text();
    })
    .then(data => {
      console.log('Данные успешно отправлены в Telegram бот:', data);
    })
    .catch(error => {
      console.error('Ошибка при отправке данных в Telegram бот:', error);
    });
}

function buy (id) {
	document.getElementById(`buy_${id}`).style.display = 'none';
	document.getElementById(`sup_${id}`).style.display = 'flex';

	dishes[id] = 1;
	console.log(dishes);
	document.getElementById(`counter_${id}`).innerHTML = dishes[id];
	Telegram.WebApp.MainButton.show();
}


function plus (id) {
	dishes[id] += 1;
	console.log(dishes);
	document.getElementById(`counter_${id}`).innerHTML = dishes[id];
}


function minutes (id) {
	dishes[id] -= 1;

	if (dishes[id] <= 0){
		document.getElementById(`buy_${id}`).style.display = 'inline-block';
		document.getElementById(`sup_${id}`).style.display = 'none';
	} else {
		document.getElementById(`counter_${id}`).innerHTML = dishes[id];
	}
	console.log(dishes);
}


Telegram.WebApp.onEvent('mainButtonClicked', function() {
	console.log("!!!");
	sendDataToTelegram("!!!");
	// Telegram.WebApp.sendData(JSON.stringify(dishes));
	Telegram.WebApp.close();
});