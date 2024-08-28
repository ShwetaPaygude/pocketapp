import React, { useState } from 'react'
import "./Dscreen.css";
import Deskhome from '../../Components/Deskt/Home/Deskhome';
import Sidepannel from '../../Components/Deskt/Sidepannel';
import Desknote from '../../Components/Deskt/Desknote';

function Dscreen() {
    const [selected,setSelected]=useState("");
    const [notes,setNotes]=useState([]);

    const renderContent =()=> {
        if (selected.length>0) {
            return (
                <Desknote
                notes={notes}
                setNotes={setNotes}
                selected={selected}
                setSelected={setSelected}
                />
            );
        };
    }

  return (
        <div className="desktop">
            
            <Sidepannel selected ={selected} setSelected ={setSelected}/>
            {renderContent()
            
            } <Deskhome/>
        </div>

  );
}

export default Dscreen;
