console.log("Lets start");

// declaring all the necessary buttons and elements for the to do list

document.addEventListener("DOMContentLoaded", () => {
  const todoInput = document.getElementById("fname");
  const addButton = document.getElementById("add-button");
  const completeAllTaskButton = document.getElementById("completeall-tasks");
  const clearCompleteButton = document.getElementById("clearTasks");
  const leftTask = document.getElementById("leftTasks");
  const allTasks = document.getElementById("AllTasks");
  const uncompletedTasks = document.getElementById("Uncompleted-Tasks");
  const completedTasks = document.getElementById("completed-Tasks");
  const taskList = document.getElementById("Task-List");
  const inputContainer = document.getElementById("input-container");
  const clearTasks = document.getElementById("clearTasks");

  // Event listener for add button click

  addButton.addEventListener("click", () => {
    takeInput(); // Call the function to handle input
  });

  

  // function for taking input from the input

  function takeInput() {
    const taskText = todoInput.value.trim(); // Get the trimmed value from input

    // checking if input is empty or not
    if (taskText !== "") {

      // creating li tag for task input
      const taskItem = document.createElement("li");

    

      taskItem.className = "todo-item";

      // making radio button for marks as complete

      const checkbutton = document.createElement("input");
      checkbutton.className = "checkbutton";
      checkbutton.type = "checkbox";

      const taskContent = document.createElement("p");
      taskContent.textContent = taskText;

      // creating the delete button for the task

      const deleteButton = document.createElement("button");
      deleteButton.className = "delete-button";
      deleteButton.innerHTML =
        '<i class="fa-regular fa-circle-xmark" style="color: #ff0000;"></i>';
      deleteButton.onclick = function () {
        taskItem.remove();
        updateCounters();
      };

      taskItem.appendChild(checkbutton);
      taskItem.appendChild(taskContent); // Append <p> to <li>
      taskItem.appendChild(deleteButton); // Append delete button to <li>

      taskList.appendChild(taskItem); // Append <li> to <ul> or <div> where you want to add tasks

      todoInput.value = ""; // Clear the input field after adding task


      // Adding function for the updating no of task remaing and has to be complete

      function updateCounters() {
        const tasks = taskList.querySelectorAll("li");
        let count = 0;

        tasks.forEach(function (task) {
          const radioInput = task.querySelector('input[type="checkbox"]');
          if (!radioInput.checked) {
            count++;
          }

          // Attach the click event listener to each task

          //const radioInput = task.querySelector('input[type="checkbox"]');
          radioInput.addEventListener("click", function () {
            // Check the radio input's checked status and update the count
            if (radioInput.checked) {
              count--;
            } else {
              count++;
            }
            // Update the text content with the current count
            leftTask.textContent = `${count} task(s) left`;
          });
        });

        // Initial update for the text content
        leftTask.textContent = `${count} task(s) left`;

        // Return the count if needed elsewhere
        return count;
      }
      updateCounters();
    }
      // Adding Eventlistner for the clear task button

  clearTasks.addEventListener("click", function () {
    const remove = taskList.querySelectorAll("li");
    remove.forEach(function (li) {
      li.remove();
    });
    updateCounters();
  });

  // Adding event listner for the completing all the tasks

  completeAllTaskButton.addEventListener("click", function () {
    const complete = taskList.querySelectorAll("li");
    complete.forEach(function (li) {
      var radioInput = li.querySelector('input[type="checkbox"]');
      if (radioInput) {
        radioInput.checked = true;
      }
    });
    updateCounters();
  });

    
  }
  

  // Adding function for task to add by pressing enter
  todoInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      takeInput();
    }
  });


// adding completed task button to filter task that have been completed   
  completedTasks.addEventListener("click", function (){
    const tasks = taskList.querySelectorAll('#Task-List li');
    tasks.forEach((task) => {
      const checkbox = task.querySelector('input[type="checkbox"]');
      task.style.display = checkbox.checked ? "flex" : "none";
    });
  });
     
 // Adding uncompleted task button to filter tasks that have not completed  
  uncompletedTasks.addEventListener("click", function (){
   
    const tasks = taskList.querySelectorAll("li");
    tasks.forEach((task) => {
      const checkbox = task.querySelector('input[type="checkbox"]');
      task.style.display = !checkbox.checked ? "flex" : "none";
    });
  });
  
  // adding button to show all tasks completed and uncompleted 
  allTasks.addEventListener("click", () => {
    
    const tasks = taskList.querySelectorAll("li");
    tasks.forEach((task) => {
      task.style.display = "flex";
    });
  });




 
  
});



