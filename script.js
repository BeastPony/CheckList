"use strict";

let btn = document.querySelector('.saveTask');
let taskList = document.querySelector('.taskList');
let task = document.querySelector('.task');
let description = document.querySelector('.description');




btn.addEventListener('click', function(){
    if(task.value == '' || description.value == ''){
       alert("Error! Both fields must be filled in to create a task.")
    } else {
        createTask();
    }
})


function createTask(){
    let li = document.createElement('li');
    let span = document.createElement('span');
    let p = document.createElement('p');
    
    li.textContent = task.value;
    let itemTask = (li.textContent = task.value);
    p.textContent = description.value;

    li.appendChild(p);
    li.appendChild(span);
    taskList.appendChild(li);
    
    localStorage.setItem(task.value, description.value);
    task.value = '';
    description.value = '';

    span.addEventListener('click', function(){
        li.remove();
        localStorage.removeItem(itemTask);
    })

    p.addEventListener('dblclick', function(){
        let inp = document.createElement('input');
        inp.value = p.textContent;
        li.appendChild(inp);

        inp.addEventListener('keypress', function(event){ 
            if(event.key == 'Enter'){
                p.textContent = inp.value;
                localStorage.setItem(itemTask, p.textContent);
                inp.remove();
            }
        })
    })
}
