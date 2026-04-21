const messages = [
   "seviyor ❤️",
   "sevmiyor 💔",
   "seviyor ❤️",
   "sevmiyor 💔",
   "seviyor ❤️",
   "sevmiyor 💔"
];

function showText() {
   const text = document.getElementById("text");
   
   text.innerText = messages[Math.floor(Math.random() * messages.length)];
   
   text.classList.remove("show");
   void text.offsetWidth;
   text.classList.add("show");
}

// petals setup
function initPetals() {
   document.querySelectorAll(".petal").forEach(petal => {
      petal.addEventListener("click", function() {
         if (this.classList.contains("break")) return;
         
         showText();
         
         this.classList.add("break");
         
         setTimeout(() => {
            this.style.visibility = "hidden";
         }, 300);
      });
   });
}

initPetals();

// 🔥 CENTER = RESET
document.querySelector(".center").addEventListener("click", () => {
   document.querySelectorAll(".petal").forEach(petal => {
      petal.classList.remove("break");
      petal.style.visibility = "visible";
   });
   
   const text = document.getElementById("text");
   text.classList.remove("show");
   text.innerText = "";
});