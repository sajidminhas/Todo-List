function createTodo() {
    const listItem = document.createElement("li");
    const todoContainerElement = document.getElementById("todos-container");
    todoContainerElement.appendChild(listItem);
    const userInput = document.getElementById("note").value;
    listItem.innerHTML = userInput;
    document.getElementById("note").value = "";
    listItem.setAttribute("onclick", "todoCheck(event, this)")
}

function deleteTodos(){
    document.getElementById("todos-container").innerHTML = "";
}

function todoCheck(e, todo){
    if(todo.style.textDecoration === ""){
        todo.style.textDecoration = "line-through";
    } else {
        todo.style.textDecoration = "";
    }
}