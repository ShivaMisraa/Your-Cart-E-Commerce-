import React from "react";

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
    <div style={{size:"50%"}}>
      <header
        style={{ backgroundColor: "grey", color: "white", padding: "1rem" }}
      >
        
        <br />
        <div className="d-flex justify-content-center">
          <button style={{ backgroundColor: "gray", color: "white", border: "none", padding: "10px 20px" }}>
            Get Our Latest Album
          </button>
        </div>
        <div className="d-flex justify-content-center mt-4">
          <button style={{ backgroundColor: "gray", color: "white", border: "none", padding: "10px 20px", marginLeft: "1rem" }}>
            Play
          </button>
        </div>
      </header>
      <div>
        <h2>Tours</h2>
        <table style={{ width: "100%" }}>
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
                  <button style={{ backgroundColor: "gray", color: "white", border: "none", padding: "5px 10px" }}>
                    {tour.buttonLabel}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default HomePage;
