'use client';
// components/ForbesStatistic.js
import React from 'react';
import Image from 'next/image';

const Header = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div style={{
        position: "fixed",
        right: "0",
        top: "0",
        padding: "20px",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        width: "100%",
        boxSizing: "border-box",
      }}>
        <p style={{ colo:"black",marginRight: "20px", fontWeight:"bold" }}>Provision Pest Control</p>
        <img src="images/logo.png" onClick={() => scrollToTop()} alt='logo.png' style={{ width: "10%", borderRadius: "100px", cursor:"pointer" }} />
      </div>
  );
};

export default Header;