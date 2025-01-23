import { Task, CreateTaskDTO, UpdateTaskDTO } from '../types/task';

class TaskService {
    private tasks: Task[] = [];
    private nextId: number = 1;

    createTask(taskData: CreateTaskDTO): Task {
        const newTask: Task = {
            id: this.nextId++,
            ...taskData
        };
        this.tasks.push(newTask);
        return newTask;
    }

    getAllTasks(): Task[] {
        return this.tasks;
    }

    getTaskById(id: number): Task | undefined {
        return this.tasks.find(task => task.id === id);
    }

    updateTask(id: number, updateData: UpdateTaskDTO): Task | null {
        const taskIndex = this.tasks.findIndex(task => task.id === id);

        if (taskIndex === -1) {
            return null;
        }

        this.tasks[taskIndex] = {
            ...this.tasks[taskIndex],
            ...updateData
        };

        return this.tasks[taskIndex];
    }

    deleteTask(id: number): boolean {
        const initialLength = this.tasks.length;
        this.tasks = this.tasks.filter(task => task.id !== id);
        return this.tasks.length < initialLength;
    }
}

export default new TaskService();