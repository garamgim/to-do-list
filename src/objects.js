
class Todo {
    constructor(title, done, urgent, date, project, description) {
        this.title = title;
        this.done = done;
        this.urgent = urgent;
        this.date = date;
        this.project = project;
        this.description = description;
    }
}

const projectManager = {

    project: {
        "My Project": [new Todo("Buy lemon juice", false, false, "2023-11-22", "My Project", "")]
    }
    ,

    setProjectByTodo: function (newTodo) {
        if (newTodo.project in this.project) {
            this.project[newTodo.project].push(newTodo);
        } else {
            this.project[newTodo.project] = [newTodo];
        }
    },

    setProjectByTitle: function (title) {
        this.project[title] = [];
    },

    moveProject: function (todo, newProjectTitle) {
        if (newProjectTitle in this.project) {
            this.project[newProjectTitle].push(todo);
        } else {
            this.project[newProjectTitle] = [todo];
        }
        this.project[todo.project].splice(this.project[todo.project].indexOf(todo), 1);
        todo.project = newProjectTitle;
    },

    deleteTodo: function (todo) {
        this.project[todo.project].splice(this.project[todo.project].indexOf(todo), 1);
    },

    isProjectTitleValid: function (title) {
        for (let key in this.project) {
            if (title === key) return false;
        }
        return true;
    }

};

export { Todo, projectManager }