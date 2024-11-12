import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { pizzaData } from './data.js';

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header>
      <h1>Wong Yap Hui's Pizza Co</h1>
      <h2 className="tagline">Authentic Italian Cuisine</h2>
    </header>
  );
}

function Menu() {
  return (
    <main>
      <h2>Our Menu</h2>
      <div className="menu">
        {pizzaData.map((pizza, index) => (
          <Pizza
            key={index}
            name={pizza.name}
            ingredients={pizza.ingredients}
            price={pizza.price}
            photoName={pizza.photoName}
            soldOut={pizza.soldOut}
          />
        ))}
      </div>
    </main>
  );
}

function Pizza({ name, ingredients, price, photoName, soldOut }) {
  return (
    <div className="pizza-item">
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p className="pizza-description">{ingredients}</p>
        <p>Price: ${price}</p>
        {soldOut && <p className="sold-out">Sold Out</p>}
        {!soldOut && <button>Order Now</button>}
      </div>
    </div>
  );
}

function Footer() {
  const currentHour = new Date().getHours();
  const isOpen = currentHour >= 10 && currentHour < 22;

  return (
    <footer>
      {isOpen ? <p>We're currently open</p> : <p>Sorry, we're closed</p>}
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);