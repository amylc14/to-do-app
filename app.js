function onReady() {
  const json = localStorage.getItem('todos');
  let toDos;
  if(json === "null"){
    toDos = [];
  }else{
    toDos = JSON.parse(json)
  }

  const addToDoForm = document.getElementById('addToDoForm');
  let id = 0;

  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) { return; }

    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id
    });

    id += 1;
    newToDoText.value = '';

    renderTheUI();
  }

  function renderTheUI() {
    localStorage.setItem('todos', JSON.stringify(toDos))
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';

    toDos.forEach(function(toDo, index) {
      if(toDo.id >= id)
        id = toDo.id + 1;

      const newLi = document.createElement('li');

      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";
      checkbox.checked = toDo.complete;
      checkbox.addEventListener('click', event => {
        toDo.complete = !toDo.complete;
        toDos[index] = toDo;
        renderTheUI();
      });

      const deleteButton = document.createElement('button');
      deleteButton.type = 'submit';
      deleteButton.innerText = 'X';
      deleteButton.addEventListener('click', event => {
        toDos = toDos.filter((todo, i, arr) => {
          return todo.id !== toDo.id;
        });
        renderTheUI();
      });

      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(deleteButton);
    });

    document.getElementById('newToDoText').focus();
  }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });

  renderTheUI();
}

window.onload = function() {
  onReady();
};
