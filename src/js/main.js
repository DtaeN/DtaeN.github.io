let tg = window.Telegram.WabApp;

let dishes = {};

Telegram.WebApp.expand();
Telegram.WebApp.MainButton.setText("Заказать");
Telegram.WebApp.MainButton.color = "#12f00d";

function buy (id) {
	document.getElementById(`buy_${id}`).style.display = 'none';
	document.getElementById(`sup_${id}`).style.display = 'flex';

	dishes[Namber(id)] = 1;
	console.log(dishes);
	document.getElementById(`counter_${Namber(id)}`).innerHTML = dishes[Namber(id)];
	Telegram.WebApp.MainButton.show();
}


function plus (id) {
	dishes[Namber(id)] += 1;
	console.log(dishes);
	document.getElementById(`counter_${id}`).innerHTML = dishes[Namber(id)];
}


function minutes (id) {
	dishes[Namber(id)] -= 1;

	if (dishes[id] <= 0){
		document.getElementById(`buy_${id}`).style.display = 'inline-block';
		document.getElementById(`sup_${id}`).style.display = 'none';
	} else {
		document.getElementById(`counter_${id}`).innerHTML = dishes[Namber(id)];
	}
	console.log(dishes);
}


Telegram.WebApp.onEvent('mainButtonClicked', function() {
	console.log("!!!");
	Telegram.WebApp.sendData(JSON.stringify(dishes));
	Telegram.WebApp.close();
});