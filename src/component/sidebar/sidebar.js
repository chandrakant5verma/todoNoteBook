import React from "react";
import { useState } from "react";
import PlusIcon from "../../assets/25340.png";
import "./sidebar.css";

function Sidebar(props) {
    const colors = ["#fe9b72", "#fec971", "#00d4fe", "#b693fd", "#e4ee91"];
    const [listOpen, setListOpen] = useState(false);
    return (
    <div className="sidebar">
      <img src={PlusIcon} alt="" onClick={()=>setListOpen(!listOpen)} />
      <ul className={` sidebar_List ${listOpen? "sidebar_List_active" :""}`}>
     {colors.map((item,index)=>(
        <li className="sidebar_list_item" style={{backgroundColor:item}} key={index} onClick={()=>props.addNote(item)}></li> 
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
