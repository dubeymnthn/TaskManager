import { Task, CreateTaskDTO } from '../types/task';
import TaskService from '../services/taskService';

const fakeTasks: CreateTaskDTO[] = [
    {
        title: "Prepare project ",
        description: "Create Files and Folder for the review",
        completed: true
    },
];

export function generateFakeTasks(): Task[] {
    return fakeTasks.map(taskData => TaskService.createTask(taskData));
}

export function resetAndGenerateFakeTasks(): Task[] {
    while (TaskService.getAllTasks().length > 0) {
        const task = TaskService.getAllTasks()[0];
        TaskService.deleteTask(task.id);
    }

    return generateFakeTasks();
}