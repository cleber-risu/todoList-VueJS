const todoList = {
  data() {
    return {
      todos: [],
      newTodo: {
        done: false,
      },
    };
  },
  methods: {
    addTodo() {
      console.log(this.todos);
      if (this.newTodo.task) {
        this.todos.push(this.newTodo);
        this.newTodo = {
          done: false,
        };
        localStorage.setItem("todos", JSON.stringify(this.todos));
      } else {
        alert("To-do text is required");
      }
    },
    storeTodos() {
      localStorage.setItem("todos", JSON.stringify(this.todos));
    },
  },
  created() {
    localStorage.getItem("todos") &&
      (this.todos = JSON.parse(localStorage.getItem("todos")));
  },
};

Vue.createApp(todoList).mount("#app");
