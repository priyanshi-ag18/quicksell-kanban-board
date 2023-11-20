import React from 'react';
import './ticketComponent.css'; 

const TicketComponent = ({ id, title, type }) => {
  return (
    <div className="card">
      <div className="first">
        <h3 className="title">{id}</h3>
        <div className="icon"></div>
      </div>
      <div className="second">
        <h2 className="header">{title}</h2>
      </div>
      <div className="third">
        <div className="exclamation-outer">
          <div className="exclamation-main">!</div>
        </div>
        <div>{type}</div>
      </div>
    </div>
  );
};

export default TicketComponent;
