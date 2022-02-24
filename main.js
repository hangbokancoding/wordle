let lineNum = 0;
let value = "";
let word = "";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}
word = data[getRandomInt(0, data.length)].toUpperCase();

setInterval(() => {
  if (value.length > 5) value = value.substring(0, 5);

  let tds = document.querySelectorAll(
    `#word tr:nth-child(${lineNum + 1}) > td`
  );

  for (let i = 0; i < 5; i++) {
    tds[i].textContent = "";
    if (value.length > i) tds[i].textContent = value[i].toUpperCase();
  }
});

function input(a) {
  value += a;
}

function enter() {
  let tds = document.querySelectorAll(
    `#word tr:nth-child(${lineNum + 1}) > td`
  );

  for (let i = 0; i < 5; i++) {
    tds[i].style.color = "white";
    let textContent = tds[i].textContent;
    let keyboard = document.getElementById("key-" + textContent.toLowerCase());
    let color = "";

    if (textContent == "") continue;
    // green
    else if (textContent == word[i]) color = "green";
    // yellow
    else if (word.indexOf(textContent) > -1) color = "yellow";
    // gray
    else color = "gray";

    tds[i].className = color;
    keyboard.className = keyboard.className == "green" ? "green" : color;
  }

  lineNum++;
  value = "";
}
