"use client"; // This is a client component 👈🏽// components/CallToAction.js
import React from 'react';
import { useEffect,useState } from 'react';


const CallToAction = () => {
    const [isBouncing, setIsBouncing] = useState(true);

    const scroll = () => {
        let salesPitch = document.getElementById("sales-pitch");
        salesPitch.scrollIntoView({ behavior: "smooth", block: "start"});
    };
  
    const handleArrowClick = () => {
      scroll();
    };
  
    useEffect(() => {
        setTimeout(() => {
            setIsBouncing(!isBouncing);
        }, 500);
    }, [isBouncing]);
  
return (
    <section style={{ backgroundColor: '#FFB924', color: 'black', width:"100%" }}>
        <div style={{maxWidth: "1200px",margin: "15vh auto",textAlign: "left"}}>  
            <h1 style={{fontWeight:"normal"}}>Pest Problems?</h1>
            <h2 style={{fontWeight:"bold",color:"black"}}>Let us provide the answers</h2>


            <div className='horizontal-to-vertical' style={{fontSize:"calc(28px + 3vw)",alignItems:"center"}}>
                <button style={{
                    width:"250px",
                    backgroundColor:"#FFD439",
                    borderRadius:"15px",
                    border:"none",
                    color:"black",
                    margin:"15px 25px 15px 25px"
                }}>
                    <a href="tel:+15743662847"
                        style={{
                            textDecoration: "inherit",
                            color: "inherit",
                            cursor: "auto",
                        }}>
                    Call Us Now!</a>
                </button> 
                <span style={{fontSize:"24px",margin:"0px"}}>or</span>
                <button onClick={() => {window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" })}} style={{
                    width:"250px",
                    backgroundColor:"rgba(0,0,0,.7)",
                    borderRadius:"15px",
                    border:"none",
                    color:"white",
                    margin:"15px 25px 15px 25px"
                }}>
                    Get a Quote
                </button>
            </div>

            <div
                id="down-arrow"
                style={isBouncing ? {
                cursor: 'pointer',
                fontSize: '28px',
                marginTop:"calc(20px + 3vw)",
                textAlign:"center",
                transform:"translateY(0)",
                transition: 'transform 0.5s ease-in-out'
                } : {
                    cursor: 'pointer',
                    fontSize: '28px',
                    marginTop:"calc(20px + 3vw)",
                    textAlign:"center",
                    transform:"translateY(10px)",
                    transition: 'transform 0.5s ease-in-out',
                } }
                onClick={handleArrowClick}
            >
                &#9660;
            </div>
        </div>
    </section>
  );
};

export default CallToAction;