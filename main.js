// Variables for Events
const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}

showNotes();

// Function for Store Data in the Browser
function updateStorage(){
    localStorage.setItem("notes", notesContainer.innerHTML);
}

// Event for Creating Notes
createBtn.addEventListener("click", ()=>{

    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
})

// Event for Deleting Notes
notesContainer.addEventListener("click", function(e){
    
    if (e.target.tagName === "IMG"){
        e.target.parentElement.remove();

        // Update data in the browser
        updateStorage();
    }
    else if(e.target.tagName === "p"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
})

// Add enter key new line
document.addEventListener("keydown", event => {
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})