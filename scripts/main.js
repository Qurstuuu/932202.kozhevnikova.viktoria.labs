document.addEventListener('DOMContentLoaded', () => {
   const blockl = document.querySelector('.blockl');
   const blockr = document.querySelector('.blockr');
   const buttons = document.querySelectorAll('menu > input');
 
   buttons.forEach(button => {
      button.addEventListener('click', (event) => {
         const ID = event.target.id;
         if (ID === '3') {
            blockl.className = 'blockl blockmid';
            blockr.className = 'blockr blockmid';
         } else if (ID === '1') {
            blockl.className = 'blockl blockext';
            blockr.className = 'blockr blockretr';
         } else {
            blockl.className = 'blockl blockretr';
            blockr.className = 'blockr blockext';
         }
      });
   });
});