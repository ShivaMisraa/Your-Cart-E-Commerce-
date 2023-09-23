import React from "react";
import "./HomePage.css";
const tourData = [
  {
    date: "JUL16",
    city: "DETROIT, MI",
    venue: "DTE ENERGY MUSIC THEATRE",
    buttonLabel: "Buy Tickets",
  },
  {
    date: "JUL19",
    city: "TORONTO,ON",
    venue: "BUDWEISER STAGE",
    buttonLabel: "Buy Tickets",
  },
  {
    date: "JUL22",
    city: "BRISTOW, VA",
    venue: "JIGGY LUBE LIVE",
    buttonLabel: "Buy Tickets",
  },
  {
    date: "JUL29",
    city: "PHOENIX, AZ",
    venue: "AK-CHIN PAVILION",
    buttonLabel: "Buy Tickets",
  },
  {
    date: "AUG2",
    city: "LAS VEGAS, NV",
    venue: "T-MOBILE ARENA",
    buttonLabel: "Buy Tickets",
  },
  {
    date: "AUG7",
    city: "CONCORD, CA",
    venue: "CONCORD PAVILION",
    buttonLabel: "Buy Tickets",
  },
];

function HomePage() {
  return (
    <div className="container-50">
      <div className="home-page">
        
        <div>
        <header className="header">
          <h1>Tours</h1> 
          <div className="button-container">
            <div className="button-group">
              <button className="header-button">Get Our Latest Album</button>
              <button className="header-button">Play</button>
            </div>
          </div>
        </header>
          <table className="tour-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>City</th>
                <th>Venue</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {tourData.map((tour) => (
                <tr key={tour.date}>
                  <td>{tour.date}</td>
                  <td>{tour.city}</td>
                  <td>{tour.venue}</td>
                  <td>
                    <button className="tour-button">{tour.buttonLabel}</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
