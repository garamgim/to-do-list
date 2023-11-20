import Todo from './todo.js'

export default project = (() => {

    let todoExample = new Todo("Buy cheese cake", false, true, "2023-01-01", "My Project", "");
    let project = {
        "My Project": [todoExample]
    };

    function projectManager(newTodo) {
        const projectOfNewTodo = newTodo.project
        if (projectOfNewTodo in project) {
            project[projectOfNewTodo].push(newTodo);
        } else {
            project[projectOfNewTodo] = [newTodo];
        }
    }

    return { projectManager }

})();

/* NEED TO CHECK HERE */