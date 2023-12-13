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
        "My Project": [
            new Todo("Buy lemonade", false, false, "2023-12-31", "My Project", ""),
            new Todo("Book tickets to Mars", false, false, "2023-12-10", "My Project", ""),
            new Todo("Make a dentist appointment", false, false, "2023-12-25", "My Project", "")
        ]
    },

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
    },

    getUrgentTodo: function () {
        let arr = [];
        for (let key in this.project) {
            for (let todo of this.project[key]) {
                if (todo.urgent === true) arr.push(todo);
            }
        }
        return arr
    },

    getTodayTodo: function (today) {
        let arr = [];
        for (let key in this.project) {
            for (let todo of this.project[key]) {
                if (todo.date === today) arr.push(todo);
            }
        }
        return arr
    },

    getAllTodo: function () {
        let arr = [];
        for (let key in this.project) {
            for (let todo of this.project[key]) {
                arr.push(todo);
            }
        }
        return arr
    },

    deleteCompletedTask: function () {
        for (let key in this.project) {
            let arr = this.project[key];
            for (let i = 0; i < arr.length; i++) {
                if (arr[i].done) {
                    arr.splice(i, 1);
                }
            }
        }
    }
}

export { Todo, projectManager }