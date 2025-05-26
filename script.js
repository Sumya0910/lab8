
function checkPalindrome() {
  const str = document.getElementById("nameInput").value.toLowerCase().replace(/\s/g, '');
  const reversed = str.split('').reverse().join('');
  document.getElementById("result1").innerText = str === reversed ? "Палиндром мөн." : "Палиндром биш.";
}

function digitSum() {
  const num = document.getElementById("numberInput").value;
  const sum = num.split('').reduce((acc, d) => acc + Number(d), 0);
  document.getElementById("result2").innerText = "Цифрийн нийлбэр: " + sum;
}

function primeSum() {
  let n = parseInt(document.getElementById("primeInput").value);
  let sum = 0;
  function isPrime(x) {
    if (x < 2) return false;
    for (let i = 2; i <= Math.sqrt(x); i++) if (x % i === 0) return false;
    return true;
  }
  for (let i = 2; i <= n; i++) if (isPrime(i)) sum += i;
  document.getElementById("result3").innerText = "Анхны тоонуудын нийлбэр: " + sum;
}

function calculateTime() {
  const totalDist = 25;
  const speed1 = 25;
  const speed2 = 18;
  const time1 = totalDist / speed1;
  const time2 = totalDist / speed2;
  const diff = Math.abs(time1 - time2) * 60;
  document.getElementById("result4").innerText = "Зөрүү: " + diff.toFixed(2) + " минут";
}

function fallLogic() {
  document.getElementById("result5").innerText = "Унах эсэхийг нөхцлөөр тодорхойлно (жишээ код шаардлагатай).";
}

function findAddress() {
  let num = parseInt(document.getElementById("flatInput").value);
  let flatsPerFloor = 3;
  let floorsPerEntrance = 9;
  let flatsPerEntrance = flatsPerFloor * floorsPerEntrance;
  let entrance = Math.ceil(num / flatsPerEntrance);
  let floor = Math.ceil((num % flatsPerEntrance || flatsPerEntrance) / flatsPerFloor);
  document.getElementById("result6").innerText = entrance + "-р орц, " + floor + "-р давхар";
}

function gridPosition() {
  document.getElementById("result7").innerText = "Баруун доод булан = (3, 3)";
}

function coinGame() {
  let k = parseInt(document.getElementById("kInput").value);
  let sum = 0;
  for (let i = 1; i <= k + 1; i++) sum += i;
  document.getElementById("result8").innerText = "Шаардлагатай зоосны тоо: " + sum;
}
