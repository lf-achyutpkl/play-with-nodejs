import express from 'express';
import bodyParser from 'body-parser';

import StudentController from './StudentController';
import { auditRequest } from './middleware/logMiddleware';
import { initDb } from './database';

const port = 3001;
const app = express();

// initDb();

app.use(bodyParser.json());
app.use(auditRequest);
// app.use(authenticate);

app.use('/students', StudentController);

app.listen(port, () => {
  console.log('hell yeah wow');
});
