"use client";// components/ProcessDetails.js
import React from 'react';

const ProcessDetails = () => {
  
  return (
    <section style={{ backgroundColor: 'white', color: 'black',display:"flex",flexDirection:"column",alignItems:"center" }}>
        <h2 style={{maxWidth:"80%"}}>Here at Provision Pest Control</h2>
        <h3 style={{fontStyle:"italic"}}>We trust the process</h3>
        <ol style={{maxWidth:"80%"}} className='horizontal-to-vertical'>
            <li><a href="tel:+15743662847">Call</a> or send a <a href='javascript:void(0);' onClick={() => {window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" })}}>message</a></li>
            <li>Receive a fair quote, set a date</li>
            <li>Services Performed to satisfaction</li>
            <li>Enjoy your space again!</li>
        </ol>
    </section>
  );
};

export default ProcessDetails;