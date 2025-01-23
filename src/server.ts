// src/server.ts
import express from 'express';
import bodyParser from 'body-parser';
import taskRoutes from './routes/taskRoutes';
import { generateFakeTasks } from './utils/fakeDataGenerator';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use(taskRoutes);

generateFakeTasks();

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Generated ${generateFakeTasks().length} fake tasks`);
});