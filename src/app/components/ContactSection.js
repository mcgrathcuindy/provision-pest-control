"use client";// components/ContactSection.js

import { useState,useRef } from 'react';
import emailjs from '@emailjs/browser';

import React from 'react';
const ContactSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceDescription, setServiceDescription] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Validate form fields here
  
    // Submit the form or perform further actions
    let formObject = {
      name: name,
      email: email,
      phone: phone,
      serviceDescription: serviceDescription,
      preferredDate: preferredDate
    };
    console.log(JSON.stringify(formObject));
    emailjs
      .sendForm('service_enn1g0i', 'template_i473sdd', form.current, 'jeZHirnFA8JoummNW')
      .then(
        (result) => {
          // Show the user a success message
          setSuccess(true);
          setError(false);
        },
        (error) => {
          // Show the user an error
          setSuccess(false);
          setError(true);
        }
      );
  };

    return (
      <section style={{ backgroundColor: 'black', color: 'white', display: 'flex', flexDirection:"row",justifyContent: 'center' }}>
        <div className='horizontal-to-vertical' style={{maxWidth:"85%"}}>
            <div style={{ flex: 1,padding:"10px" }}>
              <h3 style={{color:"#FFB924",fontSize:"calc(10px + 2vw)"}}>About</h3>
              <div style={{textAlign:"center" }}>
                <img src="images/family.jpg" style={{textAlign:"center",width:"50%",borderRadius:"100%",margin:"auto"}}/>
                <p style={{fontWeight:"bold"}}>
                  Meet Zach!
                </p>
              </div>
              <p>
              Husband to Hannah, and father to two kiddos, Ruthie and Rias. Zach started Provision Pest Control soon after his son's open heart surgery. Owning his own business has enabled him to be on call for customers with emergencies, take the time that's actually needed to fix pest problems, and meet amazing new customers - like you!
              </p>
            </div>

      
            <div style={{ flex: 1,padding:"10px" }}>
              <h3 style={{color:"#FFB924",fontSize:"calc(10px + 2vw)"}}>Contact Info</h3>
              <ul>
                <li><p>Phone: <a href="tel:+15743662847" style={{color: "inherit",cursor: "auto",}}>(574) 366-2847</a></p></li>
                <li><p>Service: Residential and Commercial Pest Control Services serving Indianapolis and surrounding communities. Family Owned. Licensed & Insured.</p></li>
              </ul>
            </div>
      
            <div style={{ flex: 1,padding:"10px" }}>
              <h3 style={{color:"#FFB924",fontSize:"calc(10px + 2vw)"}}>Get a Free Quote</h3>
              {error && <><div className="contact-page__message error">An error occurred. Please try again later.</div><br></br></>}
              { success ? 
                <><div className="contact-page__message success">Message sent successfully!</div><br></br></>
              :
              <form ref={form} onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  name="name"
                />
      
                <label htmlFor="phone">Phone Number:</label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  name="phone"
                />
      
                <label htmlFor="email">Email Address:</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  name="email"
                />
      
                <label htmlFor="serviceDescription">Description of Service:</label>
                <textarea
                  id="serviceDescription"
                  value={serviceDescription}
                  onChange={(e) => setServiceDescription(e.target.value)}
                  required
                  name="serviceDescription"
                  style={{padding:"10px",resize:"none"}}
                  rows={4}
                ></textarea>
      
                <label htmlFor="preferredDate">Preferred Date:</label>
                <input
                  type="date"
                  id="preferredDate"
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  required
                  name="preferredDate"
                  style={{paddingLeft:"20px"}}
                />
                <button type="submit">Submit</button>
              </form>
              }
            </div>
          </div>
      </section>
    );
  };
  
  export default ContactSection;