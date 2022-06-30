const searchInput = document.querySelector("#search");
const divs = document.querySelectorAll(".show");
searchInput.addEventListener("keyup", function(event) {
const word = event.target.value.toLowerCase();
divs.forEach(item => {
    item.querySelector("p").textContent.toLowerCase().startsWith(word) ? (item.style.display = "block") : (item.style.display = "none");
})
})
