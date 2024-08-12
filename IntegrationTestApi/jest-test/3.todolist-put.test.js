const axios = require('axios');
const path = require('path');

const tempConfigPath = path.join(__dirname, 'tempConfig.json');
let tempConfig = require(tempConfigPath);

test('PUT /api/todoItems/:id should update the todo item and return status 204', async () => {
  const response = await axios.put(`http://localhost:3002/api/todoItems/${tempConfig.todoItemId}`, {
    id: tempConfig.todoItemId,
    description: "string",
    isCompleted: true
  });

  expect(response.status).toBe(204);
});