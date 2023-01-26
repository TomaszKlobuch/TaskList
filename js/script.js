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

  const init = () => {
    render();

    const form = document.querySelector(".js-form");

    form.addEventListener("submit", (event) => {
    event.preventDefault();

    const newTaskContent = document.querySelector(".js-form__input").value.trim();
    console.log(newTaskContent);
    });
  };

  init();
}