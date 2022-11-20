// Trigger button
let button = document.querySelector("#alert-btn");

// Alert container
let container = document.querySelector("#alert-container");

container.innerHTML= "";
// Create click event listener on trigger button
button.addEventListener("click", () => {
    console.log("Hola");
  // When user click on trigger #button, insert .alert element into #container
  container.innerHTML +=
    `<div class="alert alert-success alert-dismissible mt-3" role="alert">
      La información se ha actualizado correctamente
      </div>`
  ;
});

