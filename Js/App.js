const ul = document.createElement('ul')
document.body.append(ul)

while (true) {
   const name = prompt('Введите задачу')
   if (name === null) {
      break;
   }
   const li = document.createElement('li');
   li.append(name);
   ul.append(li);
};





