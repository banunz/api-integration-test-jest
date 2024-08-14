# Running the API Integration Test
### Clone the Project:

If you haven't cloned the project, please do so and navigate to the root directory.
Navigate to the Root Folder:

Change to the root directory of the project:
### Run Docker:

Ensure Docker is installed and running on your machine.
Run the following command to start the Docker containers:
```sh
cd C:\Users\****\***\api-integration-test-jest: docker-compose up
```

This will start all the necessary services defined in the docker-compose.yml file.
### Access the Swagger UI:
Once the Docker containers are running, open a web browser and go to:
```sh
http://localhost:3002/swagger
```

This URL will allow you to view the API documentation and confirm that the server is running.

### Run the API Integration Tests:

Once the server is confirmed to be running, navigate to the directory containing the tests:
Run the tests using the following command:
```sh
cd C:\Users\****\***\api-integration-test-jest\IntegrationTestApi\jest-test:npm test
```

This will execute the Jest test cases for the API.
By following these steps, you should be able to run the API integration tests successfully.

Below is a Jest test suite containing three test cases for the provided code. 
# Jest Test Suites for Todo API

## 1. `todolist-post.test.js`
This Jest test suite contains three test cases that validate different scenarios for the `POST /api/todoItems` endpoint:

- **Test Case for Successful Creation (201 Status)**
  - Ensures that the `POST /api/todoItems` endpoint creates a new todo item and returns a status of 201 (Created).
  - Verifies that the response data is a valid UUID and is stored correctly in the `tempConfig.json` file.

- **Test Case for Conflict Scenario (409 Status)**
  - Ensures that the `POST /api/todoItems` endpoint returns a status of 409 (Conflict) when trying to create a todo item with a duplicate description.
  - Validates that the response data indicates a conflict due to an existing todo item with the same description.

- **Test Case for Validation Error with Empty Description (400 Status)**
  - Ensures that the `POST /api/todoItems` endpoint returns a status of 400 (Bad Request) when the request contains an empty description.
  - Checks that the response data includes appropriate validation error details.

## 2. `todolist-get.test.js`
This Jest test suite contains two test cases that validate different scenarios for the `GET /api/todoItems` endpoint:

- **Test Case for Retrieving All Todo Items (200 Status)**
  - Ensures that the `GET /api/todoItems` endpoint returns a list of todo items with a status of 200 (OK).
  - Confirms that the returned data is an array and matches the expected structure.

- **Test Case for Retrieving a Specific Todo Item by ID (200 Status)**
  - Ensures that the `GET /api/todoItems/:id` endpoint returns the correct todo item with a status of 200 (OK).
  - Validates that the returned item matches the expected data, including the `id`, `description`, and `isCompleted` fields.

## 3. `todolist-put.test.js`
This Jest test suite contains a single test case that validates the functionality of the `PUT /api/todoItems/:id` endpoint:

- **Test Case for Updating a Todo Item (204 Status)**
  - Ensures that the `PUT /api/todoItems/:id` endpoint successfully updates an existing todo item and returns a status of 204 (No Content).
  - Confirms that the updated todo item has the correct `id`, `description`, and `isCompleted` fields.
  
-----
# Assessment

## The application
This repository contains a frontend and a backend service. These services together serve as a ToDo List App.
Read the below documentation for details about each service.

[FrontEnd Readme](Frontend/README.md)

[Backend Readme](Backend/TodoList.Api/README.md)

## The task
> ℹ️ **The task at hand is to deploy the application inside a container or on a vm in a cloud. The application is completely self contained and should not require any additional dependencies to run.**

The end solution should deployable to an empty cloud account/subscription, such as a new AWS account. A person from ClearPoint should be able to deploy the end solution to their cloud account to verify if it works. There should not be a requirement for ClearPoint to access a candidate's cloud services account to deploy this solution.

Candidates should use IaC to deploy the infrastructure required. Please let us know which one would you go for.

Candidates should provide documentation on their solution, including:

* Pre requisites for your deployment solution.
* High level architectural overview of your deployment.
* Process instructions for provisioning your solution.

Please take a look at the [Assessment Grading Criteria](#-assessment-grading-criteria) below.

## Bringing up the app using docker-compose

For testing purposes, the application can be deployed using docker-compose. Running `docker-compose up` from the root directory of this project will build the images and spin up containers for `frontend` and `backend` and the app will be accessible at http://localhost:3000

However, the end solution should provide such infrastructure that would satisfy the [Assessment Grading Criteria](#-assessment-grading-criteria) below.

## Assessment Grading Criteria

##### Key Criteria

The submission should the following criteria:

* Must be able to start from a cloned git repo.
* Must document any pre-requisites clearly.
* Must deploy infrastructure using code.
* Must deploy to a cloud account/subscription.

##### Grading

Candidates will be assessed across the following categories:

##### General Approach

* Clarity of code
* Comments where relevant
* Consistency of Coding

#### Security

* Least Privilege
* Network segmentation (if applicable to the implementation)
* Secret storage (if applicable)
* Platform security features

#### Simplicity

* Do not overengineer the solution

#### Resiliency

* Infrastructure should support Auto scaling and the application should be highly available

#### Bonus points

* Deploy via an automated CICD process.
