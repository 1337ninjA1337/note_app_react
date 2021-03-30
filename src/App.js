import {useEffect, useState} from 'react';
import uuid from 'react-uuid';
import './App.css';
import Content from './Content';
import Sidebar from './Sidebar';
import saveAs from 'file-saver'

function App() {

  
const [notes, setNotes] = useState(localStorage.notes ? JSON.parse(localStorage.notes) : []);
const [activeNote, setActiveNote] = useState(false);

useEffect(() =>{
  let notesToJSON = JSON.stringify(notes)
  const blob = new Blob([notesToJSON], {type: "text/plain;charset=utf-8"})
    saveAs(blob, "data.json")
}, [notes])

const onAddNote = () =>{
  const newNote ={
    id: uuid(),
    title: "Untitled note",
    body: "",
    lastUpdate: Date.now(), 
  }
  setNotes([newNote, ...notes]);
}

const onDeleteNote = (idToDelete) =>{
  setNotes(notes.filter((note) => note.id !== idToDelete))
}

const onUpdateNote = (updatedNotes)=>{
  const updatedNotesArray = notes.map((note)=>{
    if(note.id===activeNote){
      return updatedNotes
    }
    return note
  })
  setNotes(updatedNotesArray)
}


const getActiveNote = () =>{
  return notes.find((note)=>note.id===activeNote)
}

  return (
    <div className="App">
      <Sidebar notes={notes} 
      onAddNote={onAddNote} 
      onDeleteNote={onDeleteNote}
      activeNote={activeNote}
      setActiveNote={setActiveNote}
      />
      <Content activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />
    </div>
  );
}

export default App;
