import React from "react"
import "./DoctorQuestion.css";
import { useState } from "react";


export const DoctorQuestion = () => {
  
  const [nameText, setNameText] = useState('');
  const [emailText, setEmailText] = useState('')
  const [textAreaText, setTextArea] = useState('');
  

  const nameSelect = (e) => {
    setNameText(e.target.value);
  };

  const emailSelect = (e) => {
    setEmailText(e.target.value);
  };

  const textAreaSelect = (e) => {
    setTextArea(e.target.value);
  };
  
  
    return (
    <div className="DoctorQuestion-Container">
        <h2 className="Doctor-Question-Title"> Задать вопрос врачу</h2>
        <form method="post" action="./mail.php" id="Question-Form" className="Question-Form">
            <input 
            type="text" 
            placeholder="Ваше имя" 
            className="Question-Input"
            name="name"
            value={nameText}
            onChange={nameSelect}>
            </input>
            <input 
            type="email" 
            placeholder="Email-адрес" 
            className="Question-Input"
            name="email"
            value={emailText}
            onChange={emailSelect}>
            </input>
            <textarea 
            placeholder="Напишите вопрос"
            name="message" 
            className="Question-Message"
            value={textAreaText}
            onChange={textAreaSelect}>

            </textarea>
        </form>
        <button form="Question-Form" className="QuestionButton">Отправить</button>
       
    </div>
  );
};