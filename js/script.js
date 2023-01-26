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
    <li
    ${task.done ? " style=\"text-decoration: line-through\"" : ""}
    >
      <button class="js-done">✔</button>
      ${task.content}
      <button class="js-remove"> &#128465</button>
    </li>
    `;
    }

    document.querySelector(".js-list").innerHTML = htmlString;

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

  function addNewTask(newTaskContent) {
    tasks.push({
      content: newTaskContent,
    });

    render();
  }

  const onFormSubmit = (event) => {
    event.preventDefault();

    const newTaskContent = document.querySelector(".js-form__input").value.trim();

    if (newTaskContent === "") {
      return;
    }

    addNewTask(newTaskContent)
  };

  const init = () => {
    render();

    const form = document.querySelector(".js-form");

    form.addEventListener("submit", onFormSubmit);
  };

  init();
}