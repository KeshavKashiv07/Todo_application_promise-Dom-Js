## Practice

This sprint has 4 practices.

First two practices are mandatory and the last two are optional.

**Note:**
- This practices of this sprint are in continuation to the practices of the previous sprint `Sprint 5 - Develop Interactive Web Pages Using DOM and DOM Events`.
- The practices require modifying the existing code and fulfilling the requirements stated with the tasks.

## Context

Keep App is created by Creative Coders – a software development company. This App helps a user to maintain his daily To-Do tasks. A user can add a new note, view existing notes, and delete the selected note through this App. ​

For convenience, the App provides a feature that allows a user to view the notes in the form of a grid or a list. ​

In the current stage, the app is functional and is able to capture inputs from user and display the notes added on the app's UI. However, currently the notes are temporarily stored in array.

The developers now need to implement persistence in the app. The notes data should be saved to the server in `json` file. Whenever the page loads, the data from the server should be fetched and displayed on the app's UI. ​

### Pre-Requisite Steps for the Practices

This practice requires implementation of persistence using json-server.

The notes data should be saved in the `todo.json` file located in the `data` folder of the boilerplate.

Ensure the `json-server` is running and is serving data from the `todo.json` file.

Use `axios` for making requests to the `json-server` to access the todo data.

**Note:**
To use `axios` install it using `unpkg CDN` with the help of `<script>` tag added in the `index.html` file:

```html 
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```

### Problem Statements

#### Practice 1 - Add a New Note to the To-Do List​ (Mandatory Practice)

Modify the existing JavaScript code in `script.js` file that adds a new note to the To-Do list.

The code should capture details inputted by the user, send the note data to the server and display the newly added note on the page in card layout.

##### Steps

Step 1: Define JavaScript function `saveNote()` in the script.js file. The function `saveNote()` should:​

- Read the note details inputted by the user on the UI.​
- Using the `post()` method of the `axios` object, send data to the server to save it in the `todo.json` file.
- If the `post` operation is successful, the note should get stored in the notes array and is also displayed on the app's UI.
- Raise an alert if the `post` operation fails with appropriate error message.

Step 2: The function `saveNote()` should get invoked when the user clicks the `Add Note` button.​

**Note:**
- Ensure the `note-id` inputted should be unique.

#### Practice 2 - Display All Notes From the To-Do List​ (Mandatory Practice)

Modify the existing solution to fetch notes from server when the page loads and display them on the UI.

Each of the notes' data should be displayed in a card layout.

##### Steps

Step 1: Define JavaScript function `displayNotes()` in the script.js file. The function `displayNotes()` should:​

- Using the `get()` method of the `axios` object, fetch notes data from the server.
- If the `get` operation is successful, the notes data should be assigned to the notes array.
- Dynamically add a div element for each note in the array.​
    - The div element should contain:​
        - A heading element to display the title of the note.​
        - A para element to display content of the note.​
    - The div element should be applied with style properties to display the note in a card layout.​

Step 2: The function `displayNotes()` should get invoked when the page loads as well as an existing note is deleted.

#### Practice 3 - Delete a Note from the Todo List ​ (Optional Practice)

Modify JavaScript code that deletes an existing note from the note list. 

The code should now delete note from the server and update the display of notes on the UI.

##### Steps

Step 1: Modify the JavaScript function `deleteNote()` to delete the selected note from the server.

 and remove it from the notes array.​

- The function `deleteNote()` should:​
    - Accept id of note as the parameter​
    - Make `delete` request to the server with the `id` value.
    - If the note is successfully deleted from the server, delete it from the notes array.
    - Refresh the display on UI with the updated data from notes array.
    - If the `delete` operation fails, raise an alert to display the appropriate error message.

Step 2: The function `deleteNote()` should get invoked when the user clicks the delete button on note card.

#### Practice 4 - Toggle the Notes View​ (Optional Practice)

The notes on the UI should by default be displayed in the grid view.​

Provide an option on the UI that will allow users to toggle between the grid view and the list view.

##### Steps

Step 1: In the script.js file, define function `toggleView()`. The `toggleView()` function should dynamically add styles/CSS class that toggles the view between grid view and list view.​

Step 2: The function `toggleView()` should get invoked when the user clicks on the link with the text "Toggle View".

## Submission Instructions

1. This is a test enabled practice, hence, the solution will have to undergo automated evaluation process. 
    - For automated evaluation, the solution should be first tested locally and then on hobbes.
2. Steps to test the code locally:
    1. Ensure the solution code is provided in the specified files only.
    2. From the command line terminal, set the path to the folder containing cloned boilerplate code.
    3. Run the command `npm run test` to test the solution locally.
    4. Ensure all the test cases are passing locally and then push the solution to git for automated testing on `hobbes`.
3. Steps to test the code on hobbes:
    1. Open the submission page at `https://codereview.stackroute.niit.com/#/submission`.
    2. Submit the solution.
    3. For the failed test cases, refactor the code locally and submit it for re-evaluation.