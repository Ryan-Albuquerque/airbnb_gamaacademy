var content = document.querySelector(".content");

const xhr = new XMLHttpRequest();

xhr.open("GET", "https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72");

const renderPlaces = () =>{

}

xhr.addEventListener("load", async () => {
  let data = JSON.parse(xhr.responseText);
  await data.forEach((element) => {
    
  const imgPlace = document.createElement("img")
  imgPlace.setAttribute("src", `${element.photo}`)
  imgPlace.setAttribute("id", "img")

  const divData = document.createElement("div")
  divData.setAttribute("id", "data")

  const placeName = document.createElement("h2")
  placeName.textContent = element.name
  placeName.setAttribute("id", "placeName")

  const placeType = document.createElement("h5")
  placeType.textContent = element.property_type
  placeType.setAttribute("id", "placeType")

  const placePrice = document.createElement("h4")
  placePrice.textContent = `R$ ${element.price}`
  placePrice.setAttribute("id", "placePrice")

  const placeButton = document.createElement("button")
  placeButton.textContent = "Reservar agora!"
  placeButton.setAttribute("id", "placeButton")

  divData.appendChild(placeName)
  divData.appendChild(placeType)
  divData.appendChild(placePrice)

  const contentElement = document.createElement("div")
  contentElement.setAttribute("id", "content")

  contentElement.appendChild(imgPlace)
  contentElement.appendChild(divData)
  contentElement.appendChild(placeButton)
    
  content.appendChild(contentElement)
  });
});
xhr.send();
