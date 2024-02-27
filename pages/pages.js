const jewelleryButton = document.querySelector(".jewellery-button");
const container = document.querySelector(".jewellery-items");


jewelleryButton.addEventListener('click', () => { 
  container.classList.toggle("active");  
})