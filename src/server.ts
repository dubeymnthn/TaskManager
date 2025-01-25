// src/server.ts
import express from 'express';
import bodyParser from 'body-parser';
import taskRoutes from './routes/taskRoutes';
import { generateFakeTasks } from './utils/fakeDataGenerator';
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(bodyParser.json());

app.use(taskRoutes);

generateFakeTasks();

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Generated ${generateFakeTasks().length} fake tasks`);
});