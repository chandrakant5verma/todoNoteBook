import React from 'react';
import './App.css';
import { useState,useEffect } from 'react';

import Notecontainer from './component/Notecontainer/Notecontainer';
import Sidebar from './component/sidebar/sidebar.js';


function App() {
const [notes,setNotes] = useState(JSON.parse(localStorage.getItem('notes-app'))||[]);

const addNote = (color)=>{
  const tempNotes = [...notes];
  tempNotes.push({
    id: Date.now()+" "+Math.floor(Math.random()*78),
    color,
    text:"",
    time:Date.now(),
  })
  setNotes(tempNotes);
}

const deletNote =(id)=>{
  let tempNote = [...notes];

  const index = tempNote.findIndex((item)=> item.id === id);
  if(index<0) return;

  tempNote.splice(index,1)
  setNotes(tempNote);

}
const updateText =(text,id)=>{
  const tempnotes = [...notes];
  const index = tempnotes.findIndex((item)=> item.id === id)

  if(index<0) return;

  tempnotes[index].text = text;
  setNotes(tempnotes)
}

useEffect(()=>{
  localStorage.setItem('notes-app',JSON.stringify(notes))
},[notes])
  return (
    <div className="App">
      <Sidebar addNote = {addNote}/>
      <Notecontainer note={notes} deletNote={deletNote} updateText ={updateText}/>
    </div>
  );
}

export default App;
