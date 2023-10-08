import React from "react";
import "./styles/card.css";

function Card() {
  return (
    <main>
      <div className="card">
        <div className="card-sedan">
          <img src="/images/icon-sedans.svg" alt="Sedans" />
          <article>
            <h1>Sedans</h1>
            <p>
              Choose a sedan for its affordability and excellent fuel economy.
              Ideal for cruising in the city or on your next road trip.
            </p>
          </article>
          <button>Learn More</button>
        </div>
        <div className="card-suv">
          <img src="/images/icon-suvs.svg" alt="SUVs" />
          <article>
            <h1>SUVs</h1>
            <p>
              Take an SUV for its spacious interior, power, and versatility.
              Perfect for your next family vacation and off-road adventures.
            </p>
          </article>
          <button>Learn More</button>
        </div>
        <div className="card-luxury">
          <img src="/images/icon-luxury.svg" alt="Luxury" />
          <article>
            <h1>Luxury</h1>
            <p>
              Cruise in the best car brands without the bloated prices. Enjoy
              the enhanced comfort of a luxury rental and arrive in style.
            </p>
          </article>
          <button>Learn More</button>
        </div>
      </div>
      <div className="attribution">
        <span>
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          .
        </span>
        <span>
          Coded by <a href="#">qltran</a>.
        </span>
      </div>
    </main>
  );
}

export default Card;
