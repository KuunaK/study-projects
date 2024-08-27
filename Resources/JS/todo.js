const newNoteBtn = document.querySelector("#new-note-btn");
const addNewNote = document.querySelector('#add-note');
const editNote = document.querySelector('#edit-note');
const addNoteCancel = document.querySelector('#add-note-cancel');
const addNoteApply = document.querySelector('#add-note-apply');
const editNoteCancel = document.querySelector('#edit-note-cancel');
const editNoteApply = document.querySelector('#edit-note-apply');
const addNoteText = document.querySelector("#add-note-text");
const editNoteText = document.querySelector("#edit-note-text");
const noteContainer = document.querySelector('#note-container');
const emptyNotes = document.querySelector('#empty-notes');
const emptyTextWarningNew = document.querySelector('#empty-text-warning-new');
const emptyTextWarningEdit = document.querySelector('#empty-text-warning-edit');
const searchNoteInput = document.querySelector('#search-note');
const showNotes = document.querySelector('#show-all-notes');
const toggleDarkMode = document.querySelector('#toggle-dark-mode')
const toggleLightMode = document.querySelector('#toggle-light-mode')

const idArray = [];

// Show selected notes all/checked/unchecked
showNotes.addEventListener('click', showSelectedNotes)

// Edit / Add note event listeners
newNoteBtn.addEventListener('click', newNote);
addNoteCancel.addEventListener('click', cancelNewNote);
addNoteApply.addEventListener('click', applyNewNote);
editNoteCancel.addEventListener('click', cancelEditNote);
editNoteApply.addEventListener('click', applyEditNote);
noteContainer.addEventListener('click', deleteNote);
toggleDarkMode.addEventListener('click', changeDarkMode);
toggleLightMode.addEventListener('click', changeLightMode);

// Search Notes event listeners
searchNoteInput.addEventListener('input', searchForNote);


function changeDarkMode(){
    document.querySelector('#todo-list-text').classList.add('text-white')
    document.querySelector('body').classList.add('bg-neutral-800')
    document.querySelector('#empty-notes').classList.add('text-white')
    document.querySelector('#search-icon').classList.add('text-white')
    document.querySelector('#new-note-bg').classList.add('bg-neutral-800', 'border', 'border-white')
    document.querySelector('#new-note-title').classList.add('text-white')
    document.querySelector('#edit-note-bg').classList.add('bg-neutral-800', 'border', 'border-white')
    document.querySelector('#edit-note-title').classList.add('text-white')
    document.querySelector('#light-empty-notes').classList.add('hidden')
    document.querySelector('#dark-empty-notes').classList.remove('hidden')
    toggleDarkMode.classList.add('hidden')
    toggleLightMode.classList.remove('hidden')
    searchNoteInput.classList.add('border-white', 'text-white', 'bg-neutral-800', 'focus:outline-white')
    noteContainer.classList.add('divide-indigo-500', 'text-white')
    addNoteText.classList.add('bg-neutral-800', 'border', 'border-white', 'text-white', 'focus:outline-white')
    addNoteCancel.classList.add('hover:text-neutral-800')
    addNoteCancel.classList.remove('hover:text-white')
    addNoteApply.classList.add('hover:bg-neutral-800', 'text-neutral-800')
    addNoteApply.classList.remove('text-white')
    editNoteText.classList.add('bg-neutral-800', 'border', 'border-white', 'text-white', 'focus:outline-white')
    editNoteCancel.classList.add('hover:text-neutral-800')
    editNoteCancel.classList.remove('hover:text-white')
    editNoteApply.classList.add('hover:bg-neutral-800', 'text-neutral-800')
    editNoteApply.classList.remove('text-white')


    const noteDiv = document.querySelectorAll('.note-div')
    const noteInput = document.querySelectorAll('input[type="checkbox"]')
    noteInput.forEach(note => note.classList.add('appearance-none', 'bg-neutral-800', 'border', 'border-indigo-500'))
    noteDiv.forEach(note => note.classList.add('hover:bg-neutral-700'))
};

function changeLightMode(){
    document.querySelector('#todo-list-text').classList.remove('text-white')
    document.querySelector('body').classList.remove('bg-neutral-800')
    document.querySelector('#empty-notes').classList.remove('text-white')
    document.querySelector('#search-icon').classList.remove('text-white')
    document.querySelector('#new-note-bg').classList.remove('bg-neutral-800', 'border', 'border-white')
    document.querySelector('#new-note-title').classList.remove('text-white')
    document.querySelector('#edit-note-bg').classList.remove('bg-neutral-800', 'border', 'border-white')
    document.querySelector('#edit-note-title').classList.remove('text-white')
    document.querySelector('#light-empty-notes').classList.remove('hidden')
    document.querySelector('#dark-empty-notes').classList.add('hidden')
    toggleDarkMode.classList.remove('hidden')
    toggleLightMode.classList.add('hidden')
    searchNoteInput.classList.remove('border-white', 'text-white', 'bg-neutral-800', 'focus:outline-white')
    noteContainer.classList.remove('divide-indigo-500', 'text-white')
    addNoteText.classList.remove('bg-neutral-800', 'border-white', 'text-white', 'focus:outline-white')
    addNoteText.classList.add('border-indigo-500')
    addNoteCancel.classList.remove('hover:text-neutral-800')
    addNoteCancel.classList.add('hover:text-white')
    addNoteApply.classList.remove('hover:bg-neutral-800', 'text-neutral-800')
    addNoteApply.classList.add('text-white')
    editNoteText.classList.remove('bg-neutral-800', 'border-white', 'text-white', 'focus:outline-white')
    editNoteText.classList.add('border-indigo-500')
    editNoteCancel.classList.remove('hover:text-neutral-800')
    editNoteCancel.classList.add('hover:text-white')
    editNoteApply.classList.remove('hover:bg-neutral-800', 'text-neutral-800')
    editNoteApply.classList.add('text-white')

    const noteDiv = document.querySelectorAll('.note-div')
    const noteInput = document.querySelectorAll('input[type="checkbox"]')
    noteInput.forEach(note => note.classList.remove('appearance-none', 'bg-neutral-800', 'border', 'border-indigo-500'))
    noteDiv.forEach(note => note.classList.remove('hover:bg-neutral-700'))
};

function showSelectedNotes () {
    // Gets selected options text
    const selectedText = showNotes.options[showNotes.selectedIndex].text;

    // Gets all notes
    const noteDiv = document.querySelectorAll('.note-div')

    // Show whichever notes are selected ~ e.g. all, check or unchecked
    switch (selectedText) {
        case 'All':
            if (noteContainer.childNodes.length > 1) {
                noteDiv.forEach(note => note.classList.remove('hidden'));
            }
            break;
        case 'Checked':
            if (noteContainer.childNodes.length > 1) {
                noteDiv.forEach(note => {
                    if (note.firstChild.checked) {
                        note.classList.remove('hidden')
                    } else {
                        note.classList.add('hidden')
                    }
                })
            }
            break
        case 'Unchecked':
            if (noteContainer.childNodes.length > 1) {
                noteDiv.forEach(note => {
                    if (!note.firstChild.checked) {
                        note.classList.remove('hidden')
                    } else {
                        note.classList.add('hidden')
                    }
                })
            }
            break
        default:
            break;
    }
};

function searchForNote() {
    // Gets all notes
    const noteDiv = document.querySelectorAll('.note-div');

    if (noteContainer.childNodes.length > 1 && searchNoteInput.value.length > 0) {
        // Create array and push notes text
        const noteArray = [];
        noteDiv.forEach(note => noteArray.push(note.lastChild.firstChild.innerText.split(' ').join('-')));
        // Use search input to filter out notes
        const searchText = String(searchNoteInput.value.split(' ').join('-'));
        const result = noteArray.filter(filterNotes);
        function filterNotes(text) {
            return text == searchText;
        };

        if (searchText != result) {
            // Hides all notes that don't equal search text
            noteDiv.forEach(note => {
               note.classList.add('hidden');
            });
        } else {
            // Show Note If exist
            const noteToShow = document.querySelector(`#${result}`);
            noteToShow.parentElement.classList.remove('hidden');
        };
    } else {
        noteDiv.forEach(note => {
            note.classList.remove('hidden')
         });
    };
};

function newNote(){
    addNewNote.classList.remove('opacity-0');
    addNewNote.classList.add('pointer-events-auto');
};

function cancelNewNote(){
    closeNewNote();
};

function cancelEditNote(){
    closeEditNote();
};

// Creates a new note
function applyNewNote(){
    // Get Current Notes
    const currentNotes = noteContainer.childNodes;
    const convertNotesArray = Array.from(currentNotes);
    const getId = [];
    if (convertNotesArray.length > 0 ) {
        convertNotesArray.slice(1).forEach(child => {
            getId.push(child.firstChild.id);
        });
    };

    if (addNoteText.value === "") {
        clearTimeout();
        emptyTextWarningNew.classList.remove('opacity-0');
        emptyTextWarningNew.classList.add('opacity-1');
        emptyTextWarningNew.innerHTML = 'Must Include Text';
        setTimeout(() => (emptyTextWarningNew.classList.add('opacity-0'), emptyTextWarningNew.classList.remove('opacity-1')), 3000);
    } else if (getId.includes(addNoteText.value)) {
        clearTimeout();
        emptyTextWarningNew.classList.remove('opacity-0');
        emptyTextWarningNew.classList.add('opacity-1');
        emptyTextWarningNew.innerHTML = 'Note Already Exist';
        setTimeout(() => (emptyTextWarningNew.classList.add('opacity-0'), emptyTextWarningNew.classList.remove('opacity-1')), 3000);
    } else {
        createNote(addNoteText.value)
        closeNewNote();
        notesEmptyCheck();
    };
    
};

// Applies Edit To Current Selected Note NEED TO FIX
function applyEditNote(){
    const noteMessage = idArray[0].split(' ').join('-');
    const updatedMessage = document.getElementById(`${noteMessage}`);
    const updatedText = editNoteText.value;

    // Gets current notes
    const currentNotes = noteContainer.childNodes;
    const convertNotesArray = Array.from(currentNotes);
    const getNewID = [];
    if (convertNotesArray.length > 0 ) {
        convertNotesArray.slice(1).forEach(child => {
            getNewID.push(child.firstChild.id.split('-').join(' '));
        });
    };

    if (editNoteText.value === "") {
        clearTimeout();
        emptyTextWarningEdit.classList.remove('opacity-0');
        emptyTextWarningEdit.classList.add('opacity-1');
        emptyTextWarningEdit.innerHTML = 'Must Include Text';
        setTimeout(() => (emptyTextWarningEdit.classList.add('opacity-0'), emptyTextWarningEdit.classList.remove('opacity-1')), 3000);
    } else if (getNewID.includes(editNoteText.value)) {
        clearTimeout();
        emptyTextWarningEdit.classList.remove('opacity-0');
        emptyTextWarningEdit.classList.add('opacity-1');
        emptyTextWarningEdit.innerHTML = 'Note Already Exist';
        setTimeout(() => (emptyTextWarningEdit.classList.add('opacity-0'), emptyTextWarningEdit.classList.remove('opacity-1')), 3000);
    } else {
        // Sets new note message
        updatedMessage.setAttribute('id', updatedText.split(' ').join('-'));
        updatedMessage.nextSibling.firstChild.setAttribute('for', updatedText.split(' ').join('-'));
        updatedMessage.nextSibling.firstChild.innerText = updatedText;
        closeEditNote();
    }
};

// Delete/Edit Note
function deleteNote (e) {
    const targetNoteDiv = e.target.closest('.note-div');



    if (e.target.id == 'trash-button') {
        // Deletes note
        targetNoteDiv.remove();
        notesEmptyCheck();

    } else if (e.target.id == 'edit-button'){
        const targetNoteText = targetNoteDiv.childNodes[1].firstChild;
        idArray.length = 0;
        idArray.push(targetNoteText.innerText);
        // Show edit notes window with note text
        editNoteText.value = targetNoteText.innerText;
        editNote.classList.remove('opacity-0');
        editNote.classList.remove('pointer-events-none');
        editNote.classList.add('opacity-1');
        editNote.classList.add('pointer-events-auto');

    } else {
        // Don't need code here at the moment
    };
};


// Close Add Note and Wipe Text
function closeNewNote(){
    addNewNote.classList.remove('opacity-1');
    addNewNote.classList.add('opacity-0');
    addNewNote.classList.remove('pointer-events-auto');
    addNewNote.classList.add('pointer-events-none');
    addNoteText.value = '';
};

// Close Edit Note and Wipe Text
function closeEditNote(){
    editNote.classList.remove('opacity-1');
    editNote.classList.add('opacity-0');
    editNote.classList.remove('pointer-events-auto');
    editNote.classList.add('pointer-events-none');
    editNoteText.value = '';
    idArray.length = 0;
};

// Check If Notes Empty
function notesEmptyCheck() {
    if (noteContainer.children.length > 0) {
        emptyNotes.classList.add('hidden');
    } else {
        emptyNotes.classList.remove('hidden');
    };
};

// Creates New Not and adds it to Notes container
function createNote(e){
    if (toggleLightMode.classList.contains('hidden')) {
        // Create Note Div    
        const noteDivContainer = document.createElement('div')
        noteDivContainer.className = 'flex p-2 hover:bg-indigo-100 items-center transition duration-150 note-div';
        
        // Create Checkbox
        const noteInput = document.createElement('input');
        noteInput.setAttribute('type', 'checkbox');
        noteInput.setAttribute('id', e.split(' ').join('-'));
        noteInput.className = 'w-[20px] h-[20px] accent-indigo-500 mr-4 checked:line-through';
        noteDivContainer.appendChild(noteInput);
    
        // Container for Note Text and Button container
        const noteDivContent = document.createElement('div');
        noteDivContent.className = 'flex justify-between w-full items-center';    
        noteDivContainer.appendChild(noteDivContent);
    
        // Note Text
        const noteText = document.createElement('label');
    
        noteText.setAttribute('for', e.split(' ').join('-'));
        noteText.className = 'text-xl w-full js-label';
        noteText.innerText = e;
        noteDivContent.appendChild(noteText);
    
        // Container for buttons
        const buttonDiv = document.createElement('div');
        buttonDiv.className = 'flex opacity-0';
        noteDivContent.appendChild(buttonDiv);
    
        // Edit Button
        const editButton = document.createElement('button');
        editButton.setAttribute('id', 'edit-button');
        editButton.className = 'p-2 mr-1 text-indigo-500/25 hover:text-indigo-500';
        editButton.innerHTML = `<svg 
                                                xmlns="http://www.w3.org/2000/svg" 
                                                fill="none" 
                                                viewBox="0 0 24 24" 
                                                stroke-width="1.5"
                                                stroke="currentColor" 
                                                class="size-5 pointer-events-none">
                                                <path 
                                                    stroke-linecap="round" 
                                                    stroke-linejoin="round" 
                                                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                                            </svg>`;
    
        // Trash Button
        const trashButton = document.createElement('button');
        trashButton.setAttribute('id', 'trash-button');
        trashButton.className = 'p-2 text-red-700/25 hover:text-red-700'
        trashButton.innerHTML = `<svg 
                                                xmlns="http://www.w3.org/2000/svg" 
                                                fill="none" 
                                                viewBox="0 0 24 24" 
                                                stroke-width="1.5" 
                                                stroke="currentColor" 
                                                class="size-5 pointer-events-none">
                                                <path 
                                                    stroke-linecap="round" 
                                                    stroke-linejoin="round" 
                                                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                            </svg>`
        // Add Buttons To Button Div
        buttonDiv.appendChild(editButton);
        buttonDiv.appendChild(trashButton);
        
    
        // Add Complete note div to Notes section
        noteContainer.appendChild(noteDivContainer);
    } else {
        // Create Note Div    
        const noteDivContainer = document.createElement('div')
        noteDivContainer.className = 'flex p-2 hover:bg-indigo-100 items-center transition duration-150 note-div';
        
        // Create Checkbox
        const noteInput = document.createElement('input');
        noteInput.setAttribute('type', 'checkbox');
        noteInput.setAttribute('id', e.split(' ').join('-'));
        noteInput.className = 'w-[20px] h-[20px] accent-indigo-500 mr-4 checked:line-through';
        noteDivContainer.appendChild(noteInput);
    
        // Container for Note Text and Button container
        const noteDivContent = document.createElement('div');
        noteDivContent.className = 'flex justify-between w-full items-center';    
        noteDivContainer.appendChild(noteDivContent);
    
        // Note Text
        const noteText = document.createElement('label');
    
        noteText.setAttribute('for', e.split(' ').join('-'));
        noteText.className = 'text-xl w-full js-label';
        noteText.innerText = e;
        noteDivContent.appendChild(noteText);
    
        // Container for buttons
        const buttonDiv = document.createElement('div');
        buttonDiv.className = 'flex opacity-0';
        noteDivContent.appendChild(buttonDiv);
    
        // Edit Button
        const editButton = document.createElement('button');
        editButton.setAttribute('id', 'edit-button');
        editButton.className = 'p-2 mr-1 text-indigo-500/25 hover:text-indigo-500';
        editButton.innerHTML = `<svg 
                                                xmlns="http://www.w3.org/2000/svg" 
                                                fill="none" 
                                                viewBox="0 0 24 24" 
                                                stroke-width="1.5"
                                                stroke="currentColor" 
                                                class="size-5 pointer-events-none">
                                                <path 
                                                    stroke-linecap="round" 
                                                    stroke-linejoin="round" 
                                                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                                            </svg>`;
    
        // Trash Button
        const trashButton = document.createElement('button');
        trashButton.setAttribute('id', 'trash-button');
        trashButton.className = 'p-2 text-red-700/25 hover:text-red-700'
        trashButton.innerHTML = `<svg 
                                                xmlns="http://www.w3.org/2000/svg" 
                                                fill="none" 
                                                viewBox="0 0 24 24" 
                                                stroke-width="1.5" 
                                                stroke="currentColor" 
                                                class="size-5 pointer-events-none">
                                                <path 
                                                    stroke-linecap="round" 
                                                    stroke-linejoin="round" 
                                                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                            </svg>`
        // Add Buttons To Button Div
        buttonDiv.appendChild(editButton);
        buttonDiv.appendChild(trashButton);
        
    
        // Add Complete note div to Notes section
        noteContainer.appendChild(noteDivContainer);
        changeDarkMode();
    }
};