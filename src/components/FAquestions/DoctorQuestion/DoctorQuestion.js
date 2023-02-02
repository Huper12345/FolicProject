import React from 'react';
import './DoctorQuestion.css';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { Button } from '../../../helpers/Button';

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
          setTextArea('Успешно отправлено');
          setTimeout(() => {
            setTextArea('');
          }, 4000);
        },
        (error) => {
          setTextArea('Что-то пошло не так...');
          setTimeout(() => {
            setTextArea('');
          }, 4000);
        }
      );

    setNameText('');
    setEmailText('');
  };

  return (
    <div className="DoctorQuestion-Container" id='DoctorQuestion'>
      <h2 className="Doctor-Question-Title"> Вопрос врачу</h2>
      <form
        onSubmit={sendEmail}
        ref={form}
        id="Question-Form"
        className="Question-Form"
      >
        <input
          required
          type="text"
          placeholder="Ваше имя"
          className="Question-Input"
          name="name"
          value={nameText}
          onChange={nameSelect}
        ></input>
        <input
          required
          type="email"
          placeholder="Email-адрес"
          className="Question-Input"
          name="email"
          value={emailText}
          onChange={emailSelect}
        ></input>
        <textarea
          required
          placeholder="Напишите вопрос"
          name="message"
          className="Question-Message"
          value={textAreaText}
          onChange={textAreaSelect}
        ></textarea>
      </form>
    
      <Button text="Отправить" form="Question-Form" className='Button QuestionButton' />
    </div>
  );
};
