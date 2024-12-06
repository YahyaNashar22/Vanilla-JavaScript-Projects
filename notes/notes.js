const addBtn = document.querySelector("#add-note");
const noteContainer = document.querySelector(".note-container");


addBtn.addEventListener("click", addNote);

function addNote() {
    const note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML = `
        <div class="tool">
            <i class="fas fa-save"></i>
            <i class="fas fa-trash"></i>
        </div>
        <textarea class="text-input" aria-multiline="true"></textarea>
    `;

    const save = note.querySelector(".fa-save");
    const trash = note.querySelector(".fa-trash");
    const textarea = note.querySelector(".text-input");

    save.addEventListener("click", saveNotes);
    textarea.addEventListener("input", saveNotes);
    trash.addEventListener("click", ()=>{
        note.remove();
        saveNotes();
    });

    noteContainer.appendChild(note);
}

function saveNotes() {
    const notes = document.querySelectorAll(".note .text-input");
    const data = Array.from(notes).map(note => note.value);
    console.log(notes, data);

    if (data.length === 0) {
        localStorage.removeItem("notes");
    } else {
        localStorage.setItem("notes", JSON.stringify(data));
    }

}

function loadNotes(){
    const notes = JSON.parse(localStorage.getItem("notes"));
    if (notes !== null){
        notes.forEach(noteText => {
            addNote();
            const notesData = document.querySelectorAll(".text-input");
            const lastNote = notesData[notesData.length -1];
            lastNote.value = noteText;
        });
    } else {
        addNote();
    }
}

loadNotes();