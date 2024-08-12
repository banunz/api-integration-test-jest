const axios = require('axios');
const fs = require('fs');
const path = require('path');
const config = require('./config'); // Import the config file

const tempConfigPath = path.join(__dirname, 'tempConfig.json');
let tempConfig = require(tempConfigPath);

const expectedData = [
  {
    description: config.description,
    isCompleted: false
  }
];

test('GET /api/todoItems should return a list of todo items with status 200', async () => {
  const response = await axios.get('http://localhost:3002/api/todoItems');

  expect(response.status).toBe(200);
  expect(Array.isArray(response.data)).toBe(true);
  expectedData.forEach(expectedItem => {
    expect(response.data).toEqual(
      expect.arrayContaining([
        expect.objectContaining(expectedItem)
      ])
    );
  });
});

test('GET /api/todoItems/:id should return the todo item with status 200', async () => {
  const response = await axios.get(`http://localhost:3002/api/todoItems/${tempConfig.todoItemId}`);

  expect(response.status).toBe(200);
  expect(response.data).toEqual(
    expect.objectContaining({
      id: tempConfig.todoItemId,
      description: config.description,
      isCompleted: false
    })
  );
});