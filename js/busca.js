var input = document.querySelector("input");

input.addEventListener("input", () => {
  console.log(input.value);
  var nomes = document.querySelectorAll("h2");
  if (input.value.length > 0) {
    nomes.forEach((element) => {
      // console.log(element.textContent);
      var expReg = new RegExp(input.value, "i");
      var data = element.parentElement;
      var content = data.parentElement;

      if (!expReg.test(element.textContent)) {
        content.classList.add("hidden");
      } else {
        content.classList.remove("hidden");
      }
    });
  }
});
