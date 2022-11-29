import express from 'express';
const port = 3005;
const app = express();

import usersRoutes from './Api/routes/users.js';
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello Server');
});
app.use('/users', usersRoutes);

app.listen(port, () =>
  console.log(`server is running on http://localhost:${port}/ `)
);
