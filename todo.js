const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODO_LS = "toDos";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODO_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const delBtn = document.createElement("button");
    const newId = toDos.length + 1;
    delBtn.innerText = "X";
    delBtn.addEventListener("click", function(event) {
        const targetBtn = event.target;
        const targetLi = targetBtn.parentNode;
        toDoList.removeChild(targetLi);
        const clearToDos = toDos.filter(function(toDo) {
            return toDo.id !== parseInt(li.id);
        });
        toDos = clearToDos;
        saveToDos();
    });
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);

    const toDosObj= {
        text: text,
        id: newId
    };

    toDos.push(toDosObj);
    saveToDos();
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODO_LS);
    if (loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDos) {
            paintToDo(toDos.text);
        });
    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();