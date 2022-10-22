
document.addEventListener('DOMContentLoaded', () => {
  // your code here
const form = document.querySelector('#create-task-form');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    addToDo();
    form.reset();

    // console.log(e.target);
  });
});

function addToDo() {
  const newToDo = document.querySelector('#new-task-description');
  const tasks = document.querySelector('#tasks');
  // console.log(form.elements[0].value);
  const li = document.createElement('li');
  li.textContent = `${newToDo.value}  `;
  tasks.appendChild(li);

  const btn = document.createElement('button');
  btn.addEventListener('click', handleDelete);
  btn.id = 'x';
  btn.textContent = `X`;
  li.appendChild(btn);
}

function handleDelete(e) {
  // const removeButton = document.querySelector('#x');
  // removeButton.parentNode.remove();
  // OR just simply:
  
  e.target.parentNode.remove();
}
