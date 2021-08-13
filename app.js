const input = document.getElementById("misal");
const numbers = document.getElementsByClassName("numbers");
for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", function (a) {
    input.value += a.target.innerText;
    if (input.value == "++") {
      console.log(input.value);
    }
  });
}
document.getElementById("topla").addEventListener("click", function () {
  input.value = eval(input.value);
});
document.getElementById("c").addEventListener("click", function () {
  input.value = "";
});

document.getElementById("larr").addEventListener("click", function () {
  input.value = input.value.substring(0, input.value.length - 1);
});
