// CustomCard.js
import React from 'react';
import './CustomCard.css';

export default function CustomCard({ image, title, subtitle, body, onShare, onLearnMore }) {
  return (
    <div className="card">
      <img src={image} alt={title} className="cardMedia" />
      <div className="cardContent">
        <h2 className="cardTitle">{title}</h2>
        <h4 className="cardSubtitle">{subtitle}</h4>
        <p className="cardBody">{body}</p>
      </div>
      <div className="cardActions">
        <button className="cardButton" onClick={onShare}>Share</button>
        <button className="cardButton" onClick={onLearnMore}>Learn More</button>
      </div>
    </div>
  );
}
