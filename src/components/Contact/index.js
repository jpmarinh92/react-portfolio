import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import Download from '../DownloadButton';

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      setFormState({ [e.target.name]: e.target.value });
      console.log('Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
  };

  return (
    <section className="contact-me">
      <h1 data-testid="h1tag">Contact me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div className="form-Input">
          <label htmlFor="name">Name:</label>
          <input className="name-Input" type="text" name="name" size="48"  defaultValue={name} onBlur={handleChange} />
        </div>
        <div className="form-Input">
          <label htmlFor="email">Email address:</label>
          <input type="email" name="email" size="48" height="50" defaultValue={email} onBlur={handleChange} />
        </div>
        <div className="form-Input">
          <label htmlFor="message">Message:</label>
          <textarea name="message" rows="10" cols="50" defaultValue={message} onBlur={handleChange} />
        </div>
        {errorMessage && (
          <div className="form-Input">
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button data-testid="button" type="submit" className="form-button" >Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;