document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("task-input");
  const addBtn = document.getElementById("add-btn");
  const taskList = document.getElementById("task-list");

  addBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = taskText;
    span.addEventListener("click", () => {
      li.classList.toggle("completed");
    });

    const delBtn = document.createElement("button");
    delBtn.textContent = "✕";
    delBtn.addEventListener("click", () => {
      taskList.removeChild(li);
    });

    li.appendChild(span);
    li.appendChild(delBtn);
    taskList.appendChild(li);

    taskInput.value = "";
  });

  taskInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      addBtn.click();
    }
  });
});
