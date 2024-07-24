import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { apiDocumentation } from './openApiSpec';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/documentation', swaggerUi.serve, swaggerUi.setup(apiDocumentation));

let users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' }
];

app.get('/users', (req, res) => {
    const { name } = req.query;

    if (name) {
        // @ts-ignore
        const filteredUsers = users.filter(user => user.name.toLowerCase().includes(name.toLowerCase()));
        res.json(filteredUsers);
    } else {
        res.json(users);
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
