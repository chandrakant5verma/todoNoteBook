import React from 'react'
import './Note.css'
import deletIcon from '../../assets/images.png'

function Note(props) {
  let timer = 500,timeout
    const formDate=(value)=>{
        if(!value) return "";

        const monthdate = [ "Jan",
        "Feb",
        "March",
        "April",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",]

        const date = new Date(value);

        let hrs = date.getHours();
        let ampm = hrs > 12? "pm":"am";
        hrs = hrs ? hrs : "12";
        hrs = hrs > 12 ? (hrs = 24 - hrs) : hrs;
        let min = date.getMinutes();
        min = min < 10 ? "0" + min : min;
        let day = date.getDay()
    
        let months = monthdate[date.getMonth()];
    
        return `${hrs}:${min} ${ampm} ${day} ${months}`;

    }

   const debounce=(func)=>{
    clearTimeout(timeout)
    timeout = setTimeout(func,timer);
  }

  const updateText =(text,id)=>{
    debounce(()=> props.updateText(text,id))
  }
  return (
    <div className='note' style={{background:props.note.color}}>
        <textarea  className='note_text' defaultValue={props.note.text} onChange={(event)=> updateText(event.target.value,props.note.id)}/>
        <div className="note_footer">
        <p>{formDate(props.note.time)}</p>
        <img src={deletIcon} alt="" onClick={()=> props.deleteNote(props.note.id)} />
        </div>
    </div>
  )
}

export default Note