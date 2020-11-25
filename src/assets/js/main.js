import todos    from './data'; // On importe les todos à partir du fichier data.js
import TodoList from './modules/TodoList';


new TodoList({
  el: '#app',
  todos
});
