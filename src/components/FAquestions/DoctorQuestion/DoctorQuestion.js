import React from 'react';
import './DoctorQuestion.css';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

export const DoctorQuestion = () => {
  const [nameText, setNameText] = useState('');
  const [emailText, setEmailText] = useState('');
  const [textAreaText, setTextArea] = useState('');

  const form = useRef();

  const nameSelect = (e) => {
    setNameText(e.target.value);
  };

  const emailSelect = (e) => {
    setEmailText(e.target.value);
  };

  const textAreaSelect = (e) => {
    setTextArea(e.target.value);
  };

  const sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”
    emailjs
      .sendForm(
        'service_x6kt42c',
        'template_q9iaa2a',
        form.current,
        'FKDMCs7z1Y7TOoCpl'
      )
      .then(
        (result) => {
          alert('Вопрос отправлен!');
        },
        (error) => {
          alert('Что-то пошло не так...');
        }
      );

    setNameText('');
    setEmailText('');
    setTextArea('');
  };

  return (
    <div className="DoctorQuestion-Container">
      <h2 className="Doctor-Question-Title"> Задать вопрос врачу</h2>
      <form
        onSubmit={sendEmail}
        ref={form}
        id="Question-Form"
        className="Question-Form"
      >
        <input
          type="text"
          placeholder="Ваше имя"
          className="Question-Input"
          name="name"
          value={nameText}
          onChange={nameSelect}
        ></input>
        <input
          type="email"
          placeholder="Email-адрес"
          className="Question-Input"
          name="email"
          value={emailText}
          onChange={emailSelect}
        ></input>
        <textarea
          placeholder="Напишите вопрос"
          name="message"
          className="Question-Message"
          value={textAreaText}
          onChange={textAreaSelect}
        ></textarea>
      </form>
      <button form="Question-Form" className="QuestionButton">
        Отправить
      </button>
    </div>
  );
};
