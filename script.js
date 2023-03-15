let result = document.getElementById("result");

function handleClick(value) {
  result.value += value;
}

function clearResult() {
  result.value = "";
}

function calculate() {
  result.value = eval(result.value);
}
