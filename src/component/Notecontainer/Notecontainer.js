import React from "react";

import Note from "../Note/Note";
import './Notecontainer.css'

function Notecontainer(props) {
    const reversArray =(arr)=>{
        let array = [];

        for(let i=arr.length-1;i>=0;--i){
            array.push(arr[i]);
        }
        return array;
    }

   const note = reversArray(props.note)
  return (
    <div className="note-container">
      <h2>The Notes</h2>
      <div className="note-container-notes custom-scroll">
        {note?.length>0? note.map((items)=>(
                 <Note
          note={items} key={items.id} deleteNote={props.deletNote} updateText={props.updateText}
        />
            )) : <h3>"there is no notes taken"</h3>}
      </div>
    </div>
  );
}

export default Notecontainer;
