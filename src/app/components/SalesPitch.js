// components/SalesPitch.js
import React from 'react';

const SalesPitch = () => {
  return (
    <section id="sales-pitch" style={{ backgroundColor: 'black', color: 'white', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
      <div className='horizontal-to-vertical'>
        <div style={{ textAlign: 'left', padding: '20px' }}>
          <div style={{ borderRight: '3px solid white', paddingRight: '30px' }}>
            <h1 style={{ fontWeight: 'lighter' }}>It’s time for </h1>
            <h2>peace of mind</h2>
          </div>
        </div>
        <div style={{ textAlign: 'left', padding: '20px', alignSelf:"center" }}>
            <h3 style={{display:"inline-block"}}>Bad news:</h3>
            <span style={{marginLeft:"8px",display:"inline-block",fontSize:"calc(14px + 2vw)", fontWeight:"lighter"}}>You’ve got pests.</span>
            <br></br>
            <h3 style={{ color: '#FFB924',display:"inline-block" }}>Good news:</h3>
            <span style={{marginLeft:"8px",display:"inline-block", fontSize:"calc(14px + 2vw)", fontWeight:"lighter"}}>We can help!</span>
        </div>
      </div>
    </section>
  );
};

export default SalesPitch;