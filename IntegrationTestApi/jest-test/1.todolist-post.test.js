const axios = require('axios');
const fs = require('fs');
const path = require('path');
const config = require('./config'); // Import the config file

const tempConfigPath = path.join(__dirname, 'tempConfig.json');
let tempConfig = require(tempConfigPath);

test('POST /api/todoItems should create a new todo item and return status 201', async () => {
  const response = await axios.post('http://localhost:3002/api/todoItems', {
    description: config.description
  });

  console.log('Response Data:', response.data);
  console.log('Response Data Type:', typeof response.data);

  const responseData = response.data;

  expect(response.status).toBe(201);
  expect(typeof responseData).toBe('string'); // Check if response data is a string
  expect(responseData).toMatch(/^[0-9a-fA-F-]{36}$/); // Check if response data is a valid UUID

  tempConfig.todoItemId = responseData; // Store the id in tempConfig
  fs.writeFileSync(tempConfigPath, JSON.stringify(tempConfig, null, 2)); // Write to tempConfig.json
});

test('POST /api/todoItems should create a conflict todo item and return status 409', async () => {
  try {
    await axios.post('http://localhost:3002/api/todoItems', {
      description: config.description
    });
  } catch (error) {
    const response = error.response;

    console.log('Response Data:', response.data);
    console.log('Response Data Type:', typeof response.data);

    const responseData = response.data;

    expect(response.status).toBe(409);
    expect(typeof responseData).toBe('string');
    expect(responseData).toBe("A todo item with description already exists"); 
  }
});

test('POST /api/todoItems should return status 400 for empty description', async () => {
  try {
    await axios.post('http://localhost:3002/api/todoItems', {
      description: ""
    });
  } catch (error) {
    const response = error.response;

    console.log('Response Data:', response.data);
    console.log('Response Data Type:', typeof response.data);

    const responseData = response.data;

    expect(response.status).toBe(400);
    expect(typeof responseData).toBe('object'); 
    expect(responseData).toMatchObject({
      type: "https://tools.ietf.org/html/rfc7231#section-6.5.1",
      title: "One or more validation errors occurred.",
      status: 400,
      traceId: expect.any(String),
      errors: {
        Description: expect.arrayContaining([
          "Description field can not be empty"
        ])
      }
    }); 
  }
});