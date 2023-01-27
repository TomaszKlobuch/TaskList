{
  const tasks = [
    {
      content: "Umyć samochód",
      done: false,
    },
    {
      content: "Kupić pieczywo",
      done: true,
    },
  ];

  const render = () => {
    let htmlString = "";

    for (const task of tasks) {
      htmlString += `
    <li class="list__item">
      <button class="js-done list__button">${task.done ? "✔" : ""}</button>
      <span class="${task.done ? " list__item--done" : ""}">${task.content}</span>
      <button class="js-remove list__button--remove"> &#128465</button>
    </li>
    `;
    }

    document.querySelector(".js-list").innerHTML = htmlString;    

    bindEvents()
  };

  const bindEvents = () => {
    const removeTask = (index) => {
      tasks.splice(index, 1);
      render();
    };

    const toggleTaskDone = (index) => {
      tasks[index].done = !tasks[index].done;
      render();
    };

    const removeButtons = document.querySelectorAll(".js-remove");

    removeButtons.forEach((removeButtons, index) => {
      removeButtons.addEventListener("click", () => {
        removeTask(index);
      });
    });

    const toggleDoneButton = document.querySelectorAll(".js-done");

    toggleDoneButton.forEach((toggleDoneButton, index) => {
      toggleDoneButton.addEventListener("click", () => {
        toggleTaskDone(index);
      });
    });
  };

  const addNewTask = (newTaskContent) => {
    tasks.push({
      content: newTaskContent,
    });

    render();
  }

  const onFormSubmit = (event) => {
    event.preventDefault();

    const newTaskInput = document.querySelector(".js-form__input");
    const newTaskContent = newTaskInput.value.trim();

    if (newTaskContent === "") {
      return;
    }

    addNewTask(newTaskContent);
    newTaskInput.value = "";
    newTaskInput.focus();
    
  };

  const init = () => {
    render();

    const form = document.querySelector(".js-form");

    form.addEventListener("submit", onFormSubmit);
  };

  init();
}