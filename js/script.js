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
      ${task.content}
    </li>
    `;
    }

    document.querySelector(".js-list").innerHTML = htmlString;
  };

  const addNewTask = (newTaskContent) => {
    tasks.push({
      content: newTaskContent,
    })

    render()
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