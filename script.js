// list an arary to store task

let tasks = [];
//add event listener to add task
document.getElementById("addTaskBtn").addEventListener("click", function () {
  //storing text vaule from input box as a varibul
  let taskInput = document.getElementById("taskInput").value;

  // giving truthy falsy faule so you cant entery empty string
  if (taskInput) {
    //push item to bottom of list
    tasks.push(taskInput);
    // resets text box
    document.getElementById("taskInput").value = "";
    // displays each task
    displayTasks();
  }
});


//Function to display the task from task in the ul
function displayTasks() {
  //gets unordred list in html doc
  let taskList = document.getElementById("taskList");
  //clear the excistig task list before updating it
  taskList.innerHTML = "";

  //loop through each task in array
  tasks.forEach((task, index) => {
    //create a new li for each task
    let li = document.createElement("li");

    //add bootstrap classes
    li.classList.add(
      "list-group-item",
      "d-flex",
      "justify-content-between",
      "align-items-center"
    );

    //set html of li elemts with task text
    console.log(task);
    li.innerHTML = `${task} <button class='btn btn-dark btn-sm' onclick='removeTask(${index})'>√</button>`;

    //apend new task to list
    taskList.appendChild(li);
  });
}

//function to remove task
function removeTask(index) {
  // remove task at the given idex from the aray
  tasks.splice(index, 1);
  //calling function to display
  displayTasks();
}

//waiting to be cliked before reseting then gets the btn and does the following
document.getElementById("clearTaskBtn").addEventListener("click", function () {
  //sets the task array to nothing
  tasks = [];
  //displays the empty task
  displayTasks();
});



taskInput.addEventListener('keydown', function (event) {
  if (event.key === "Enter") {
    let taskInput = document.getElementById("taskInput").value;

    if (taskInput) {
      tasks.push(taskInput);

      document.getElementById("taskInput").value = "";

      displayTasks();
    }
  }
});