import { Request, Response } from 'express';
import TaskService from '../services/taskService';
import { CreateTaskDTO, UpdateTaskDTO } from '../types/task';
import { v4 as uuidv4 } from 'uuid'; // To generate a unique ID for tasks


export const createTask = (req: Request, res: Response) => {
    const taskData: CreateTaskDTO = req.body;
    if (!taskData.title || typeof taskData.completed !== 'boolean') {
        return res.status(400).json({ message: 'Invalid task data' });
    }

    const newTask = {
        ...taskData,
        id: uuidv4(),  // Generate a new unique ID using uuid
    };

    TaskService.createTask(newTask);

    res.status(201).json(newTask);
};

export const getAllTasks = (req: Request, res: Response) => {
    const tasks = TaskService.getAllTasks();
    res.json(tasks);
};

export const getTask = (req: Request, res: Response) => {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
        return res.status(400).json({ message: 'Invalid task ID' });
    }

    const task = TaskService.getTaskById(id);

    if (!task) {
        return res.status(404).json({ message: 'Task not found' });
    }

    res.json(task);
};

export const updateTask = (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const updateData: UpdateTaskDTO = req.body;

    if (isNaN(id)) {
        return res.status(400).json({ message: 'Invalid task ID' });
    }

    const updatedTask = TaskService.updateTask(id, updateData);

    if (!updatedTask) {
        return res.status(404).json({ message: 'Task not found' });
    }

    res.json(updatedTask);
};

export const deleteTask = (req: Request, res: Response) => {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
        return res.status(400).json({ message: 'Invalid task ID' });
    }

    const deleted = TaskService.deleteTask(id);

    if (!deleted) {
        return res.status(404).json({ message: 'Task not found' });
    }

    res.json({ message: 'Task deleted successfully' });
};