import React, { useState } from 'react'


 const Content =()=>{
    const[isModalOpen,setIsModalOpen]=useState(false);
    const [groupNames, setGroupNames] = useState(
        JSON.parse(localStorage.getItem("groupNames")) || {}
      );
    const[selectedGroupname,setSelectedGroupName]=useState("");
    const[messages,setMessages]=useState(
        JSON.parse(localStorage.getItem("messages"))||[]
    );

 }
  return (
    
  )


export default Content
