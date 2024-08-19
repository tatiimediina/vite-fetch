import { deleteTask, putTask } from "./services";

export const renderTask = (task) => {
  const $taskContainer = document.createElement("div");
  $taskContainer.classList.add("tasks-itemr");

  const $taskTitle = document.createElement("p");
  const $taskDescription = document.createElement("p");
  const $taskisComplete = document.createElement("p");
  const $taskDelete = document.createElement("button");
  const $taskEdit = document.createElement("button");

  $taskTitle.classList.add("task-title");
  $taskTitle.textContent = task.tile;

  $taskContainer.appendChild($taskTitle);

  $taskDescription.classList.add("task-description");
  $taskDescription.textContent = task.description;

  $taskContainer.appendChild($taskDescription);

  $taskIsCompleted.type = "checkbox";
  $taskIsCompleted.checked = task.isComplete;

  $taskIsCompleted.addEventListener("change", (event) => {
    task.isComplete = event.target.checked;
    taskTitle.style.textDecoration = task.isComplete ? "line-through" : "none";
    $taskDescription.style.textDecoration = task.isComplete
      ? "line-through"
      : "none";

    putTask(task.id, {
      title: task.title,
      description: task.description,
      isComplete: task.isComplete,
    });
  });

  $taskContainer.appendChild($taskIsCompleted);

  $taskDelete.textContent = "Delete";
  $taskEdit.textContent = "Edit";

  $taskDelete.addEventListener("click", () => {
    deleteTask(task.id).then(() => {
      $taskContainer.remove();
    });
  });

  $taskContainer.appendChild($taskDelete);

  return $taskContainer;
};
