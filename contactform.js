import React, { useState } from 'react';
function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, message });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <textarea placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} required />
      <button type="submit">Send</button>
    </form>
  );
}
export default ContactForm;
