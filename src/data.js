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

    project: function () {
        let projects = {};
        let storage = { ...localStorage }
        for (let key in storage) {
            projects[key] = JSON.parse(storage[key])
        }
        return projects
    },

    setProjectByTodo: function (newTodo) {
        let projects = this.project();
        if (newTodo.project in projects) {
            projects[newTodo.project].push(newTodo);
        } else {
            projects[newTodo.project] = [newTodo];
        }
        localStorage.setItem(newTodo.project, JSON.stringify(projects[newTodo.project]));
    },

    setProjectByTitle: function (title) {
        localStorage.setItem(title, JSON.stringify([]))
    },

    moveProject: function (todo, newProjectTitle) {
        let projects = this.project();

        let oldProject = todo.project;
        let oldIdx = projects[todo.project].findIndex(i => i.title === todo.title);

        todo.project = newProjectTitle;
        if (newProjectTitle in projects) {
            projects[newProjectTitle].push(todo);
        } else {
            projects[newProjectTitle] = [todo];
        }
        localStorage.setItem(newProjectTitle, JSON.stringify(projects[newProjectTitle]));

        projects[oldProject].splice(oldIdx, 1);
        localStorage.setItem(oldProject, JSON.stringify(projects[oldProject]));
    },

    deleteTodo: function (todo) {
        let projects = this.project();
        let project = todo.project;
        let idx = projects[todo.project].findIndex(i => i.title === todo.title);
        projects[project].splice(idx, 1);
        localStorage.setItem(project, JSON.stringify(projects[project]));
    },

    updateTodo: function (todo, keyToChange, newValue) {
        let projects = this.project();
        let projectTitle = todo.project
        let projectArray = projects[projectTitle];
        let idx = projectArray.findIndex(i => i.title === todo.title);
        console.log(idx);
        console.log(projectArray[idx][keyToChange.toString()]);
        projectArray[idx][keyToChange.toString()] = newValue;
        localStorage.setItem(projectTitle, JSON.stringify(projectArray));
        // here to fix
    },

    isProjectTitleValid: function (title) {
        let projects = this.project();
        for (let key in projects) {
            if (title === key) return false;
        }
        return true;
    },

    getUrgentTodo: function () {
        let projects = this.project();
        let arr = [];
        for (let key in projects) {
            for (let todo of projects[key]) {
                if (todo.urgent) arr.push(todo);
            }
        }
        return arr
    },

    getTodayTodo: function (today) {
        let projects = this.project();
        let arr = [];
        for (let key in projects) {
            for (let todo of projects[key]) {
                if (todo.date === today) arr.push(todo);
            }
        }
        return arr
    },

    getAllTodo: function () {
        let projects = this.project();
        let arr = [];
        for (let key in projects) {
            for (let todo of projects[key]) {
                arr.push(todo);
            }
        }
        return arr
    },

    getCompletedTask: function () {
        let projects = this.project();
        let arr = [];
        for (let key in projects) {
            for (let todo of projects[key]) {
                if (todo.done) arr.push(todo);
            }
        }
        return arr
    }
}

export { Todo, projectManager }