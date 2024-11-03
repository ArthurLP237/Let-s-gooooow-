// Classe pour gérer chaque tâche
class Task {
    constructor(name) {
        this.name = name;
        this.completed = false; // Indique si la tâche est complétée ou non
    }

    // Méthode pour inverser l'état de complétion de la tâche
    toggleComplete() {
        this.completed = !this.completed;
    }
}

// Variables pour manipuler les éléments du DOM
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Fonction pour ajouter une tâche
function addTask() {
    const taskName = taskInput.value.trim();
    if (taskName === '') return; // Empêche l'ajout d'une tâche vide

    const task = new Task(taskName);
    displayTask(task);
    taskInput.value = ''; // Vide le champ de saisie après l'ajout
}

// Fonction pour afficher une tâche dans la liste
function displayTask(task) {
    const li = document.createElement('li');
    li.textContent = task.name;
    li.classList.add('task-item');

    // Bouton pour marquer la tâche comme complète
    const completeBtn = document.createElement('button');
    completeBtn.textContent = '✓';
    completeBtn.classList.add('complete-btn');
    completeBtn.addEventListener('click', () => {
        task.toggleComplete();
        li.classList.toggle('completed', task.completed); // Change l'apparence si la tâche est complétée
    });

    // Bouton pour supprimer la tâche
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', () => {
        li.remove(); // Supprime l'élément de la liste
    });

    // Ajoute les boutons dans l'élément de liste
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);

    // Ajoute la tâche à la liste de tâches
    taskList.appendChild(li);
}

// Écouteur d'événement pour le bouton d'ajout
addTaskBtn.addEventListener('click', addTask);

// Permet d'ajouter une tâche en appuyant sur "Entrée" dans le champ de saisie
taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});
