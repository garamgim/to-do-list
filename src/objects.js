
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
    }

};

export { Todo, projectManager }