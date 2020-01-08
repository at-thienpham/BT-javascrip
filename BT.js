function bai1() {
  var x = 2;
  var y = 2;
  var z = 0;
  if (x == y) {
    z = (x + y) * 3;
  } else {
    z = x + y;
  }
  document.getElementById('bai1').innerHTML = "bai 1: " + z;
}

function bai2() {
  var a = 20;
  var temp = 0;
  if (a <= 19) {
    temp = 19 - a;
  } else {
    temp = (a - 19) * 3;
  }
  document.getElementById('bai2').innerHTML = "bai 2: " + temp;
}

function bai3() {
  var a = "2*9";
  var n = "";
  var c = "";
  for (var i = 0; i < 10; i++) {
    n = a.replace('*', i);
    if (parseInt(n) % 3 == 0) {
      c += n + '; ';
    }
  }
  document.getElementById('bai3').innerHTML = "chia het cho 3: " + c;
}

function bai4() {
  var a = "1234567890*";
  var n = "";
  var c = "";
  for (var i = 0; i < 10; i++) {
    n = a.replace('*', i);
    if (parseInt(n) % 3 == 0 && parseInt(n) % 2 == 0) {
      c += n + '; ';
    }
  }
  document.getElementById('bai4').innerHTML = "chia het cho 6: " + c;
}
