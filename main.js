document.addEventListener("DOMContentLoaded", () => {
   const overlay = document.querySelector(".overlay");
   const popups = document.querySelectorAll(".popup");
   const buttons = document.querySelectorAll(".block input");

   buttons.forEach(button => {
      button.addEventListener("click", (event) => {
         const popupId = `popup${event.target.id}`;
         const popup = document.getElementById(popupId);

         if (popup) {
               popup.style.display = "block";
               overlay.style.display = "block";
         }
      });
   });

   overlay.addEventListener("click", (event) => {
      if (!event.target.closest(".popup")) {
         overlay.style.display = "none";
         popups.forEach(popup => popup.style.display = "none");
      }
   });
});