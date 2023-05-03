document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newTask input').value.lenght == 0){
        alert("Please enter a task")
    }else {
        document.querySelector('#tasks').innerHTML += `
        <div class="task">
        <span id="taskname">
        ${document.querySelector('#newTask input').value}
        </span>

        <button class="delete">
        <i class="far fa-trash-alt"></i>
        </button>
        </div>

        
        ` 
    }
}


var current_task = document.querySelectorAll(".delete");

for(var i=0; i<current_task.length; i++){
    current_task[i].onclick = function(){
        this.parentNode.remove();
    }
}