# Help Center API (Backend)
This is a RESTful API for managing Help Center cards. The API allows users to create and retrieve help center cards.

## Dependencies 
- express
- mongoose
- cors
- uuid
- dotenv

## Installation and Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/DevFreAkeD/Future-Skills-Full-Stack-Assignment
   cd Future-Skills-Full-Stack-Assignment

2. **Navigate to server directory:**
    ```bash
    cd server

3. **Install Dependencies:**
    ```bash
    npm install

4. **Create a .env file.**
   Replace `MONGODB_URI` with your MongoDB URI.
   
5. **Run Backend server:**
   ```bash
   node index.js

6. **Access the Server:**
   Open a web browser and navigate to `http://localhost:8080`.

## API Testing Instructions
### 1. **Postman**
1. **Open Postman:**
   - Download and install Postman from [Postman Download](https://www.postman.com/downloads/).

2. **Create a New Request:**
   - Click on the "New" button and select "Request".

3. **Set Up the Request:**
   - **Method:** Select the HTTP method (`GET`, `POST`, etc.) according to the endpoint you want to test.
   - **URL:** Enter the endpoint URL. For example:
     - `GET http://localhost:8080/api/cards` to get all cards.
     - `POST http://localhost:8080/api/cards` to create a new card.

4. **Add Request Body (for `POST` requests):**
   - Go to the "Body" tab.
   - Select "raw" and choose "JSON" from the dropdown menu.
   - Enter the JSON data. For example:
     ```json
     {
       "title": "Sample Card",
       "description": "This is a sample card description."
     }
     ```

5. **Send the Request:**
   - Click the "Send" button to execute the request.

6. **Check the Response:**
   - Review the response status and body in the Postman interface.

<br>

### 2. **Thunder Client Extension in VS Code**
1. **Install Thunder Client Extension:**
   - Open Visual Studio Code (VS Code).
   - Go to the Extensions view by clicking on the Extensions icon in the sidebar or pressing `Ctrl+Shift+X`.
   - Search for "Thunder Client" and click "Install".

2. **Create a New Request:**
   - Click on the Thunder Client icon in the sidebar.
   - Click the "New Request" button.

3. **Set Up the Request:**
   - **Method:** Choose the HTTP method (`GET`, `POST`, etc.) from the dropdown menu.
   - **URL:** Enter the endpoint URL. For example:
     - `GET http://localhost:8080/api/cards` to get all cards.
     - `POST http://localhost:8080/api/cards` to create a new card.

4. **Add Request Body (for `POST` requests):**
   - Click on the "Body" tab.
   - Select "JSON" format.
   - Enter the JSON data. For example:
     ```json
     {
       "title": "Sample Card",
       "description": "This is a sample card description."
     }
     ```

5. **Send the Request:**
   - Click the "Send" button to execute the request.

6. **Check the Response:**
   - Review the response status and body in the Thunder Client interface.


## Endpoints

1. **GET `/api/cards`**
    - **Description:** Retrieve all cards.
    - **Method:** GET
    - **URL:** `http://localhost:8080/api/cards`

2. **POST `/api/cards`**
    - **Description:** Create a new card.
    - **Method:** POST
    - **URL:** `http://localhost:8080/api/cards`
    - **Body:**
      ```json
      {
        "title": "Card Title",
        "description": "Card Description"
      }

3. **GET `/api/cards/:title`**
    - **Description:** Retrieve a specific card by title.
    - **Method:** GET
    - **URL:** http://localhost:8080/api/cards/{title} (replace {title} with the actual card title)
    - **Exampl:e**  `http://localhost:8080/api/cards/Sample%20Card`
