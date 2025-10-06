document.addEventListener("DOMContentLoaded", () => {
   const buttons = document.querySelectorAll("menu > p > button");
   const typeField = document.querySelector("menu > p > input");
   const wrapper = document.getElementById("wrapper");
   let focusedElem = null;

   console.log(buttons);
   buttons.forEach((button) => {
      if (button.name === "square") {
         button.addEventListener("click", (event) => {
            randomizeSquare();
            console.log("making squares");
         });
      } else if (button.name === "triangle") {
         button.addEventListener("click", (event) => {
            randomizeTriangle();
            console.log("making triangles");
         });
      } else if (button.name === "circle") {
         button.addEventListener("click", (event) => {
            randomizeCircle();
            console.log("making circles");
         });
      }
   });

   function randomizeSquare() {
      const num = parseInt(typeField.value);
      for (let i = 0; i < num; i++) {
         let newDiv = document.createElement("div");
         newDiv.classList.add("square");
         const newWidth = Math.floor(Math.random() * 390) + 10;
         const maxX = window.innerWidth - newWidth - 40;
         const maxY = window.innerHeight - newWidth - 90;
         const newX = Math.floor(Math.random() * maxX) + 20;
         const newY = Math.floor(Math.random() * maxY) + 20;
         newDiv.style.left = `${newX}px`;
         newDiv.style.top = `${newY}px`;
         newDiv.style.width = `${newWidth}px`;
         newDiv.style.height = `${newWidth}px`;
         wrapper.appendChild(newDiv);
         newDiv.addEventListener("click", (event) => {
            defaultColor(focusedElem);
            focusedElem = event.currentTarget;
            focusedElem.style.backgroundColor = "rgba(255, 255, 0, 0.7)";
         });
         newDiv.addEventListener("dblclick", (event) => {
            event.currentTarget.remove();
         });
      }
   }

   function randomizeTriangle() {
      const num = parseInt(typeField.value);
      for (let i = 0; i < num; i++) {
         var newDiv = document.createElement("div");
         newDiv.classList.add("triangle");
  
         const halfWidth = Math.floor(Math.random() * 195) + 5;
         const maxX = window.innerWidth - halfWidth * 2 - 40;
         const maxY = window.innerHeight - halfWidth * 2 - 90;
         const newX = Math.floor(Math.random() * maxX) + 20;
         const newY = Math.floor(Math.random() * maxY) + 20;

         newDiv.style.left = `${newX}px`;
         newDiv.style.top = `${newY}px`;
         newDiv.style.borderLeft = `${halfWidth}px solid transparent`;
         newDiv.style.borderRight = `${halfWidth}px solid transparent`;
         newDiv.style.borderBottomWidth = `${halfWidth * 2}px`;
         newDiv.style.borderBottomStyle = "solid";
         newDiv.style.borderBottomColor = "rgba(0, 0, 255, 0.7)";
         wrapper.appendChild(newDiv);
         newDiv.addEventListener("click", (event) => {
            defaultColor(focusedElem);
            focusedElem = event.currentTarget;
            focusedElem.style.borderBottomColor = "rgba(255, 255, 0, 0.7)";
         });
         newDiv.addEventListener("dblclick", (event) => {
            event.currentTarget.remove();
         });
      }
   }
  

   function randomizeCircle() {
      const num = parseInt(typeField.value);
      for (let i = 0; i < num; i++) {
         var newDiv = document.createElement("div");
         newDiv.classList.add("circle");
         const newWidth = Math.floor(Math.random() * 390) + 10;
         const maxX = window.innerWidth - newWidth - 40;
         const maxY = window.innerHeight - newWidth - 90;
         const newX = Math.floor(Math.random() * maxX) + 20;
         const newY = Math.floor(Math.random() * maxY) + 20;
         newDiv.style.left = `${newX}px`;
         newDiv.style.top = `${newY}px`;
         newDiv.style.width = `${newWidth}px`;
         newDiv.style.height = `${newWidth}px`;
         wrapper.appendChild(newDiv);
         newDiv.addEventListener("click", (event) => {
            defaultColor(focusedElem);
            focusedElem = event.currentTarget;
            focusedElem.style.backgroundColor = "rgba(255, 255, 0, 0.7)";
         });
         newDiv.addEventListener("dblclick", (event) => {
            event.currentTarget.remove();
         });
      }
   }

   function defaultColor(elem) {
      if (elem !== null) {
         let classes = elem.classList;
         if (classes.contains("square")) {
            elem.style.backgroundColor = "rgba(255, 0, 0, 0.7)";
         }
         if (classes.contains("triangle")){
            elem.style.borderBottom = `${getComputedStyle(elem).borderBottomWidth} solid rgba(0, 0, 255, 0.7)`;
         }
         if (classes.contains("circle")) {
            elem.style.backgroundColor = "rgba(0, 128, 0, 0.7)";
         }
      }
   }
});