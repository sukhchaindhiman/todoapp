import React, { useState } from "react";

export default function Todoinput(props) {
    const [inputText, setInputtext] = useState('');
    const handleEnterPress = (e)=>{
      if (e.keyCode===13){
        props.addList(inputText)
        setInputtext("")
      }
    }
    return (
    <div className="input-container">
      <input type="text" className="input-box-todo" 
      placeholder="Enter your todo" 
      value={inputText}
      onChange={e=>{
        setInputtext(e.target.value)
      }}
      onKeyDown={handleEnterPress}
      />
      <button className="add-btn"
      onClick={()=>{
        props.addList(inputText)
        setInputtext("")
        }}>+</button>
      
    </div>
  );
}
