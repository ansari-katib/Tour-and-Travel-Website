import React from 'react'
import "../components/ContactForm.css"

function Contact() {
  return (
    <>
      <div className='form'>
        <h1> Send a message to us!</h1>
        <form>
            <input placeholder='Enter your name' type='text' />
            <input placeholder='Enter your Email' type='email' />
            <textarea placeholder='Message' type='text'></textarea>
            <button>Send Message</button>
        </form>
      </div>
    </>
  )
}

export default Contact
