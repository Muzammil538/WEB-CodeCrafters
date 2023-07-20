const imgLink = "https://upload.wikimedia.org/wikipedia/commons/2/23/2018_McLaren_720S_V8_S-A_4.0.jpg";
const blogImgs = document.querySelectorAll(".blog-img");
const form = document.querySelector("#form");
const titles = document.querySelectorAll("h3");

const searchInput = document.querySelector("#searchInput");
const Btn = document.querySelector("#searchBtn");

for(let i=0; i < blogImgs.length; i++){
  blogImgs[i].setAttribute("src", imgLink);
}

form.addEventListener("submit", (e)=>{
  e.preventDefault();
  
})

Btn.addEventListener("click", clicker);

function clicker() {
  let text = searchInput.value.trim();
  // console.log(text);

  titles.forEach((title)=>{
    title.classList.remove("red")
    if(title.textContent.toLowerCase() == text.toLowerCase()){
      title.classList.add("red");
    }
  })
}