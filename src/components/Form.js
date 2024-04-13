import { useState } from "react";
// import axios from 'axios';
import "./FormStyle.css";
import React from "react";
import emailjs from "@emailjs/browser";


const Form = () => {
    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const serviceId = "service_tbfbwui";
        const templateId = "template_iklmqck";
        const publicKey = "GVqxbnmVaRjBs2hB1";

        const templateParams = {
            from_name: name,
            from_email: email,
            from_subject: subject,
            to_name: 'Web Wizard',
            message: message,
        };


        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log('Email sent successfully!', response);
                setName('');
                setEmail('');
                setSubject('');
                setMessage('');
            })
            .catch((error) => {
                console.error('Error sending email:', error);
            });
    }


    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <label>Your Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>

                <label>Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>

                <label>Subject</label>
                <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)}></input>

                <label>Message</label>
                <textarea value={message} rows={6} placeholder="Type your message here" onChange={(e) => setMessage(e.target.value)} />
                <button type="submit" className="btn">Submit</button>
            </form>
        </div>
    )
}

export default Form;