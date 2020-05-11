setInterval(() => {
  var modal = document.querySelector("#modal");

  var btn = document.querySelectorAll("#placeButton");
  
  var close = document.querySelector(".close");

  btn.forEach((element) => {
    element.addEventListener("click", () => {
      modal.style.display = "block";
      const modalContent = () => {
        var modalTitle = document.querySelector("#modalTitle");

        modalTitle.textContent = "";
        var placeContent = element.parentNode;

        var placeNome = placeContent.querySelector("#data>#placeName");

        modalTitle.textContent = placeNome.textContent;

        var imgBackgroundHeader = placeContent.querySelector("#img").src;
        console.log(imgBackgroundHeader);

        var imgModal = document.querySelector(".modalHeader");

        imgModal.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("${imgBackgroundHeader}")`;
        imgModal.classList.add("imgModal");

        var modalCounter = () => {
          const minus = document.querySelector("#minus");
          const plus = document.querySelector("#plus");

          const count = document.querySelector("#count");

          var index = 1;

          count.textContent = index

          var placePrice = placeContent.querySelector("#data>#placePrice")
          var subtotal = document.querySelector("#subtotal")

          var price = placePrice.textContent

          price = price.match(/\d+/)[0]
         
          subtotal.textContent = `R$ ${index * price}`          

          plus.addEventListener("click", () => {
            index = index + 1;
            if (index>=1) {
                count.textContent = index

                subtotal.textContent = `R$ ${index * price}`
            }
          });
          minus.addEventListener("click", () => {
            index = index - 1;
            if (index>=1) {
                count.textContent = index
                subtotal.textContent = `R$ ${index * price}`           
            }
          });
          
        };
        modalCounter();
        
      };
      modalContent();
    });
    
  });


  close.addEventListener("click", () => {
    modal.style.display = "none";
  });
  
}, 1000);
var submit = document.querySelector("#submitModal");
var modal = document.querySelector(".modal");
submit.addEventListener("click", () => {
  alert("Estadia confirmada com sucesso!\nAgradecemos a preferência.");
  modal.style.display = "none";
  
});
