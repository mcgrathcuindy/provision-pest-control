// components/ForbesStatistic.js
import React from 'react';

const ForbesStatistic = () => {
  return (
    <section style={{ backgroundColor: '#FFB924', color: 'white',display:"flex",flexDirection:"row",justifyContent:"center" }}>
        <div className='horizontal-to-vertical' style={{maxWidth:"85%"}}>
        <div style={{ textAlign: 'left', padding: '20px' }}>
          <div style={{ borderRight: '3px solid white', paddingRight: '30px' }}>
            <h2>Here are the Numbers</h2>
          </div>
        </div>
        <div style={{ textAlign: 'left', padding: '20px', alignSelf:"center" }}>
          <p>“50% Of Homeowners Experience Structural Damage From Pests, But are Unwilling To Pay Pest Control Costs” - <a style={{color:"white"}}target="_blank" href='https://www.forbes.com/home-improvement/features/pest-control-survey-structural-damage/#:~:text=Half%20Of%20Survey%20Respondents%20Saw,To%20Prevent%20Infestations%20%E2%80%93%20Forbes%20Home'>Forbes</a></p>
        </div>
      </div>
    </section>
  );
};

export default ForbesStatistic;