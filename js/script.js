let noteList = [];

let view = "grid"; //default view is grid-view

const todoURL = "http://localhost:3000/todos";
 
//task-1 : add note
function saveNote(event) { 
    event.preventDefault();
    console.log("Adding");
    const note = {
        id:document.getElementById("note-id").value,
        title:document.getElementById("note-title").value,
        content:document.getElementById("note-content").value
    }
    noteList.push(note);
    console.log(noteList);
    alert("Data added succesfully in array")    
    clearFields();

// call saveNoteToServer() with note data to persist note to the server
   saveNoteToServer(note); 

   displayNotes()
}
function clearFields() {
    document.getElementById("note-id").value = "";
    document.getElementById("note-title").value = "";
    document.getElementById("note-content").value = "";
}

 function saveNoteToServer(note) {
// use axios to make HTTP POST request to save note to server
// the saved note should also be pushed to noteList array and displayed on the web page
const getpromic = axios.post(todoURL, note);
              getpromic.then(response => {
        console.log(alert('Data saved successfully on server'), response.data);
      })
      .catch(error => {
        console.error('Error saving data:', error);
      });
}

// //task-2 : display notes
function displayNotes() {
    // call fetchNotesFromServer() to fetch notes from server and display the notes
    fetchNotesFromServer(todoURL);    
} 

function fetchNotesFromServer(url) {
    let count=0;
     // use axios to make HTTP GET request to fetch notes from server
    // the fetched notes should also be pushed to the noteList array and displayed on the web page
    const getPromise = axios.get(url);
    getPromise.then((response) => {
        response.data.forEach(post => {
            
    let containerDiv = document.getElementById('note-container');
    let cardDiv = document.createElement('div');

    cardDiv.classList.add('card', 'm-auto', 'my-3');
    cardDiv.setAttribute('style', "width: 18rem");

    let cardHeader = document.createElement('div');
    cardHeader.classList.add('card-header');
    let cardTitle = document.createElement('h5');
    cardTitle.textContent = post.title;

    let cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    let cardContent = document.createElement('p');
    cardContent.classList.add('card-text');
    cardContent.textContent = post.content;

    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    deleteBtn.id="del`${count}`"
    deleteBtn.addEventListener('click' , ()=>{
        deleteNote(post.id);
    })

    cardHeader.appendChild(cardTitle);
    cardBody.appendChild(cardContent);

    cardDiv.appendChild(cardHeader);
    cardDiv.appendChild(cardBody);
    cardDiv.appendChild(deleteBtn);
    
    containerDiv.appendChild(cardDiv);
        })
    })

    count++
}
// //task-3 : delete note
function deleteNote(id) {
   const getpromice = axios.delete("http://localhost:3000/todos/" + id);
    getpromice.then((response)=>{
        if(response.status===200){
                //findind the note index in the notes array
                let indexNote=noteList.findIndex((option)=>{
                    return option.id===id;
                 });
                 if(indexNote!==-1){
                     noteList.splice(indexNote,1);
                     alert("Deleted Successfully.");
                     displayNotes();
                    }
        }
        else{
            alert("Failed to delete.");
        }
    }).catch((error)=>{
        console.log("Failed:", error);
    });
}
 
// //task-4 : toggle note view
function toggleView() {
    const view=document.getElementById("note-container");
    if(view.style.display==="flex"){
    view.style.display="grid";
    }
    else{
    view.style.display="flex";
    }
    
}

// //do not delete the code given below, it is written to make export the functions to be tested
module.exports = {
    saveNote,
    displayNotes,
    deleteNote,
    toggleView,
    saveNoteToServer,
    fetchNotesFromServer
}
