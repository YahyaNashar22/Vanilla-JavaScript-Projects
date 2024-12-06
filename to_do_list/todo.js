const tasksList = document.getElementById("tasks-list");
const inputBox = document.getElementById("input-box");

function addTask() {
    if (inputBox.value === "") {
        alert("You haven't written anything!")
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        tasksList.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "&#128465;";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveTask();
}

tasksList.addEventListener("click", function(e){
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveTask();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveTask();
    }
})

function saveTask() {
    localStorage.setItem("tasks", tasksList.innerHTML);
}

function showTasks() {
    tasksList.innerHTML = localStorage.getItem("tasks");
}

showTasks();