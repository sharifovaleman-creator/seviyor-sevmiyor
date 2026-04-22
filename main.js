function showText() {
   const text = document.getElementById("text");
   const question = document.getElementById("questionInput").value;
   const answersInput = document.getElementById("answersInput").value;
   
   if (question.trim() === "" || answersInput.trim() === "") {
      text.innerText = "Sual + cavablar yaz 😄";
   } else {
      const answers = answersInput.split(",");
      
      if (answers.length < 2) {
         text.innerText = "Minimum 2 cavab yaz 😏";
      } else {
         const randomAnswer = answers[Math.floor(Math.random() * answers.length)].trim();
         text.innerText =  randomAnswer;
      }
   }
   
   text.classList.remove("show");
   void text.offsetWidth;
   text.classList.add("show");
}
document.querySelectorAll(".inputs input").forEach(input => {
   input.addEventListener("input", () => {
      input.classList.remove("active");
      void input.offsetWidth;
      input.classList.add("active");
   });
});
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
