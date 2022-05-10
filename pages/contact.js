import React, { useState } from 'react'

import styles from '../styles/Contact.module.css'
export default function Contact() {
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Phone, setPhone] = useState('');
  const [Mess, setMess] = useState('');

  const handleSubmit = (e) => {
    // console.log(Name, Phone, Email, Mess);
    const data = {Name, Phone, Email, Mess};

    fetch('http://localhost:3000/api/postContact', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.text())
      .then(data => {
        // console.log('Success:', data);
        alert("Thx for submitting");
        setEmail('');
        setMess('');
        setName('');
        setPhone('');
      })
      .catch((error) => {
        console.error('Error:', error);
        alert("From not submitted try again !!!")
      });

    e.preventDefault();
  }
  const handleChange = (e) => {
    if (e.target.name == 'phone') {
      setPhone(e.target.value)
    } else if (e.target.name == 'name') {
      setName(e.target.value)
    } else if (e.target.name == 'mess') {
      setMess(e.target.value)
    } else if (e.target.name == 'email') {
      setEmail(e.target.value)
    }
  }
  return (
    <div>
      <section className={styles.formSection}>
        <form className={styles.formPart}>
          <h1 id="FormTitle">Enter Details here</h1>
          <div className="form-group">
            <input onChange={handleChange} value={Name} className={styles.ibox} type="text" name="name" id="name" placeholder="Enter your name" />
          </div>
          <div className="form-group">
            <input onChange={handleChange} value={Email} className={styles.ibox} type="email" name="email" id="email" placeholder="Enter your Email address" />
          </div>
          <div className="form-group">
            <input onChange={handleChange} value={Phone} className={styles.ibox} type="phone" name="phone" id="phone" placeholder="Enter your phone number" />
          </div>
          <div className="form-group">
            <textarea onChange={handleChange} value={Mess} className={styles.ibox} name="mess" id="mess" cols='22' rows='5'
              placeholder="Enter your message here"></textarea>
          </div>
          <button onClick={handleSubmit} className={styles["btn form-group"]} type="submit">Submit Details</button>
        </form>
      </section>

    </div>
  )
}
