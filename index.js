let hr = 0;
let min = 0;
let seg = 0;
let millisecond = 0;

let cron;

document.containerDOWN.start.onclick = () => start();
document.containerDOWN.pause.onclick = () => pause();
document.containerDOWN.reset.onclick = () => reset();

function start() {
  pause();
  
  cron = setInterval(() => { timer(); }, 10);
}

function pause() {
  clearInterval(cron);
}

function reset() {
  pause()

  hr = 0;
  min = 0;
  seg = 0;
  millisecond = 0;

  document.querySelector('.hr').innerText = '00';
  document.querySelector('.min').innerText = '00';
  document.querySelector('.seg').innerText = '00';
  document.getElementById('millisecond').innerText = '000';
}

function timer() {
  if ((millisecond += 10) == 1000) {
    millisecond = 0;
    seg++;
  }
  if (seg == 60) {
    seg = 0;
    min++;
  }
  if (min == 60) {
    min = 0;
    hr++;
  }

  document.querySelector('.hr').innerText = returnData(hr);
  document.querySelector('.min').innerText = returnData(min);
  document.querySelector('.seg').innerText = returnData(seg);
  document.getElementById('millisecond').innerText = returnData(millisecond);
}

function returnData(input) {
  return input >= 10 ? input : `0${input}`
}