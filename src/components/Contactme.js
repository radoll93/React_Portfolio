import React, { useState } from "react";
import '../styles/Contactme.css'
import { validateEmail } from '../utils/helpers';

function ContactMe() {
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {

        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;
    

        if (inputType === 'email') {
          setEmail(inputValue);
        } else if (inputType === 'userName') {
          setUserName(inputValue);
        } else {
          setMessage(inputValue)
        }
      };

      
      
  const handleFormSubmit = (e) => {

    e.preventDefault();


    if (!validateEmail(email) || !userName) {
      setErrorMessage('Email or username is invalid');
      return;
    }



    // If successful, we want to clear out the input after registration.
    setUserName('');
    setMessage('');
    setEmail('');
    setErrorMessage('');

  };

    
    return(
        <section class="contactme">
            <nav id="contactme"><h2>Contact Me</h2></nav>
                <p>If any interest in my works, contact me!</p>

                <div>

      <form className="form">
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        <input
          value={userName}
          name="userName"
          onChange={handleInputChange}
          type="text"
          placeholder="username"
        />
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="message"
          placeholder="message"
        />
        <button type="button" 
        onClick={handleFormSubmit}
        >
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>        </section>
    )
}


export default ContactMe;

