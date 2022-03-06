console.log('start frontend200tb web sockets');


/*****************
Константы
*****************/
const status = document.getElementById('status');
const messages = document.getElementById('messages');
const form = document.getElementById('form');
const input = document.getElementById('input');

const ws = new WebSocket('ws://localHost:3000');

/*****************
Функции
*****************/
function setStatus(value) {
  status.innerHTML = value;
}

function printMessage(value) {
  const li = document.createElement('li');

  li.innerHTML = value;
  messages.appendChild(li);
}

ws.onopen = () => setStatus('ONLINE');

ws.onclose = () => setStatus('DISCONNECTED');

ws.onmessage = response => printMessage(response.data);

/*****************
События
*****************/



console.log('end frontend200tb web sockets');
