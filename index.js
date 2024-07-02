
let text = document.getElementById('text') ;
let add = document.getElementById('add') ;
let error = document.getElementById('error');
let tasks = document.getElementById('tasks');
let count_value = document.getElementById('count-value') ;
let ct = 0 ;  

const displayCount= (taskCount)=>{
   count_value.innerText = taskCount ;
};

const addTask = () => {
   if(! text.value )
      {
         setTimeout(()=>{
            error.style.display = 'block' ;
         }, 200 );

         setTimeout(()=>{
            error.style.display = 'none' ;
         }, 2000 );
         return ;
      }

      const task = '<div class="task" > <input type="checkbox" class="task-check" id="aa" > <span class="task-name"> <span id="tem" >aa</span> </span> <button class="edit"><i class="fa-regular fa-pen-to-square"></i></button><button class="delete"><i class="fa-solid fa-trash"></i></button> </div> ';

      tasks.insertAdjacentHTML( "beforeend", task);

      let tem = document.getElementById('tem') ;
      tem.innerHTML = text.value ;

      const deletButtons = document.querySelectorAll(".delete") ;
      deletButtons.forEach((button )=>{
         button.onclick = () => {
            button.parentNode.remove();
            ct -= 1 ;
            displayCount(ct) ;
         };
      }) ;
      const editButtons = document.querySelectorAll(".edit");
      editButtons.forEach((button) => {
         button.onclick = (e) => {
            let targetElement = e.target ;
            
            let x = targetElement.parentElement;
              console.log(x) ;

            if( !(e.target.className == "edit" )){
               targetElement = e.target.parentElement ;
            }
            text.value = targetElement.previousElementSibling?.innerText ;

            targetElement.parentNode.remove() ;
            ct -= 1 ;
            displayCount(ct) ;
         };
      });
      const tasksCheck = document.querySelectorAll(".task-check");
      tasksCheck.forEach((btn) => {
         btn.onchange = () => {
            btn.nextElementSibling.classList.toggle("completed");

            if(btn.checked)ct--;
            else ct++ ;

            displayCount(ct);
         };
      });

      ct++;
      displayCount(ct) ;
      text.value = '' ;
};
add.addEventListener("click" , addTask );

window.onload = () => {
   ct = 0 ;
   displayCount(ct);
   text.value = "" ;
};
