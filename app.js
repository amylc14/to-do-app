function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');
  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();

    // get the text
    let title = newToDoText.value;

    // create a new li
    let newToDoLabel = document.createElement('label')
    let newLi = document.createElement('li');
    let newToDoTitle = document.createElement('span')

    newToDoLabel.className = "mdl-checkbox mdl-js-checkbox"
    //create a new input
    let checkbox = document.createElement('input');

    //set the input's type to checkbox
    checkbox.type = "checkbox";
    checkbox.className = "mdl-checkbox__input"
    checkbox.setAttribute('id', 'checkbox-1')

    //set the title
    newToDoTitle.textContent = title;
    newToDoTitle.className = "mdl-checkbox__label"

    newLi.className = "md-list__item"

    let deleteButton = document.createElement('button')
    deleteButton.className = 'mdl-button mdl-js-button mdl-button--icon mdl-button--accent'
    let icon = document.createElement('i')
    icon.className = 'material-icons'
    icon.textContent = 'delete'
    deleteButton.appendChild(icon)
    deleteButton.addEventListener('click', event => {
      event.target.closest('li').remove();
    });

    // attach the checkbox to the li
    newToDoLabel.appendChild(checkbox)
    newToDoLabel.appendChild(newToDoTitle)
    newToDoLabel.appendChild(deleteButton)
    newLi.appendChild(newToDoLabel);

    // attach the li to the ul
    toDoList.appendChild(newLi);
    componentHandler.upgradeAllRegistered();

    //empty the input
    newToDoText.value = '';

  });
}

window.onload = function() {
  //alert("The window has loaded!");
  onReady();
};
