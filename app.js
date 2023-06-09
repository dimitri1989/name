function check() {
  let Name = [
    "dima",
    "aleko",
    "aleqsandre",
    "teimurazi",
    "teimurazi",
    "teimurazi",
  ];
  Name.forEach(sum);
}
function sum(elements) {
  if (elements.length <= 5) {
    var div = document.createElement("div");
    div.innerHTML = elements;
    document.body.appendChild(div);
  }
}
