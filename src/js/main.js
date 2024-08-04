let tg = window.Telegram.WabApp;

let dishes = {};

Telegram.WebApp.expand();
// tg.WebApp.MainButton.setText("купить");
// tg.WebApp.MainButton.enable();
// tg.WebApp.MainButton.show();


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
	Telegram.WebApp.MainButton.hide();
}


 mainBtnClicked: function(){
	Telegram.WebApp.sendData(JSON.stringify(dishes));
	console.log("!!!");
}