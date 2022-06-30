const inputField = document.querySelector(".inputfield");
const buttonAddTask = document.querySelector(".button");
const todoList = document.querySelector(".todo-list");

addListToDom = async () => {
  const data = await getDataApi();
  todoList.innerHTML = "";

  data.forEach((task) => {
    const listItem = document.createElement("li");
    const span = document.createElement("span");
    const description = task.description;
    const id = task._id;
    const iconDelete = document.createElement("i");

    listItem.appendChild(span);
    iconDelete.classList.add("fas");
    iconDelete.classList.add("fa-trash");
    listItem.appendChild(iconDelete);
    span.innerText = description;
    todoList.appendChild(listItem);

    iconDelete.addEventListener("click", () => {
      alert(`Are you sure you want to delete ${description}?`);
      deleteTask(id);
    });
  });
};
addListToDom();

createTask = () => {
  const text = inputField.value;
  postDataApi(text);
  inputField.value = " ";
  addListToDom();
};

deleteTask = async (id) => {
  await deleteDataApi(id);
  addListToDom();
};

buttonAddTask.addEventListener("click", createTask);

inputField.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    createTask();
  }
});
