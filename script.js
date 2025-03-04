//list an array to start task
let tasks = []

//add event listener to the add tasks 
document.getElementById('addTaskBtn').addEventListener('click', function () {
    //saving text value from input box as variable 
    let taskInput = document.getElementById('taskInput').value

    if (taskInput) {
        //pushes item to end of list
        tasks.push(taskInput)
        //clears the task bar 
        document.getElementById('taskInput').value = ''
        //display task
        displayTasks()
    }

})

//function to display task
function displayTasks() {
    //getting UL from HTML
    let taskList = document.getElementById('taskList')
    //clear existing tasks from list 
    taskList.innerHTML = ''

    //loop through each task in array and create a list item
    tasks.forEach((task, index) => {
        //create a new list element for new task
        let li = document.createElement('li')
        //add bootstrap classes
        li.classList.add(
            'list-group-item',
            'd-flex',
            'justify-content-between',
            'align-item-center'
        )
        //inner html Li element with task text
        li.innerHTML = `${task} <button class='btn btn-sm' onclick='removeTask(${index})'> √ </button> `

        //append new task
        taskList.appendChild(li)
    }
    )
    count = tasks.length;
    document.getElementById("taskCount").innerHTML = "Total Tasks: " + count;
}

//function to remove task
function removeTask(index) {
    //remove the task at the given index from array
    tasks.splice(index, 1)
    //get function to display task
    displayTasks()
}
//event listener for clear all button 
document.getElementById('clearTaskBtn').addEventListener('click', function () {
    //tasks to nothing
    tasks = []
    //displays the nothing
    displayTasks()
})

//enter key event listener 
taskInput.addEventListener('keydown', function (event) {
    //if event button clicked
    if (event.key === 'Enter') {

        let taskInput = document.getElementById('taskInput').value

        if (taskInput) {
            //pushes value end of array    
            tasks.push(taskInput)
            //value is cleared atr button is clicked
            document.getElementById('taskInput').value = ""
            //update array
            displayTasks()
        }
    }
})