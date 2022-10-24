// your code here
const form = document.querySelector('#create-task-form');
const tasks = document.querySelector('#tasks');
const sortButton = document.querySelector('#sort');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  addToDo();
  removeAllTasks();
  form.reset();
  sortButton.addEventListener('click', sortPriorities);

  // console.log(e.target);
});

function addToDo() {
  const newToDo = document.querySelector('#new-task-description');
  // console.log(form.elements[0].value);
  const li = document.createElement('li');
  li.className = 'task';
  li.textContent = `${newToDo.value}  `;
  tasks.appendChild(li);

  // adding the 'X' button
  const btn = document.createElement('button');
  btn.addEventListener('click', (e) => e.target.parentNode.remove());
  btn.id = 'x';
  btn.textContent = `X`;
  li.appendChild(btn);

  // adding priorities
  const priorities = document.querySelector('#priorities');
  if (priorities.value === '3') {
    li.classList.add('high');
  } else if (priorities.value === '2') {
    li.classList.add('medium');
  } else if (priorities.value === '1') {
    li.classList.add('low');
  }
}

// adding the Remove All button
function removeAllTasks() {
  const removeAllBtn = document.querySelector('#removeAll');
  removeAllBtn.addEventListener('click', () => {
    const lis = tasks.childNodes;
    for (let li of lis) {
      li.remove();
    }
  });
}

// sorting based on priority
function sortPriorities() {
  let lis = tasks.children;
  let lowPriority = [];
  let mediumPriority = [];
  let highPriority = [];
  let removal = [];
  for (let i = 0, len = lis.length; i < len; i++) {
    if (lis[i].getAttribute('class').indexOf('low') > -1) lowPriority.push(lis[i].cloneNode(true));
    if (lis[i].getAttribute('class').indexOf('medium') > -1) mediumPriority.push(lis[i].cloneNode(true));
    if (lis[i].getAttribute('class').indexOf('high') > -1) highPriority.push(lis[i].cloneNode(true));
    removal.push(lis[i]);
  }
  // loop over the three priority arrays and append the lis
  for (let i = 0, len = highPriority.length; i < len; i++) {
    tasks.appendChild(highPriority[i]);
  }

  for (let i = 0, len = mediumPriority.length; i < len; i++) {
    tasks.appendChild(mediumPriority[i]);
  }

  for (let i = 0, len = lowPriority.length; i < len; i++) {
    tasks.appendChild(lowPriority[i]);
  }

  // remove the lis reamining after the priority lis were pushed to their respective arrays
  for (let i = 0, len = removal.length; i < len; i++) {
    let liItem = removal[i];
    liItem.parentNode.removeChild(liItem);
  }
}
