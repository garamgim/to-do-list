
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
        "My Project": []
    }
    ,

    setProject: function (newTodo) {

        const projectOfNewTodo = newTodo.project

        if (projectOfNewTodo in project) {
            project[projectOfNewTodo].push(newTodo);
        } else {
            project[projectOfNewTodo] = [newTodo];
        }
    }

};

export { Todo, projectManager }