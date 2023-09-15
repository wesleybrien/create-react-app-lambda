import React, { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const SIZES = ["small", "medium", "large"];
const TOPPINGS = ["pepperoni", "mushrooms", "onions", "sausage", "bacon", "extra cheese"];

function App() {
  const [size, setSize] = useState("");
  const [toppings, setToppings] = useState([]);
  const orderRef = useRef();

  function handleSizeChange(event) {
    setSize(event.target.value);
  }

  function handleToppingChange(event) {
    const topping = event.target.value;
    if (topping === "done") {
      return;
    }
    if (!TOPPINGS.includes(topping)) {
      alert("Sorry, we don't have that topping. Please choose from the list above.");
      return;
    }
    setToppings(prevToppings => [...prevToppings, topping]);
  }

  function handleOrder() {
    let price = 0;
    if (size === "small") {
      price = 5;
    } else if (size === "medium") {
      price = 8;
    } else if (size === "large") {
      price = 10;
    }

    price += toppings.length * 1.5;

    alert(`Your order is: ${size} pizza with ${toppings.join(", ")} toppings.\nYour total is $${price.toFixed(2)}. Thank you for ordering from Pizza Place!`);
    setSize("");
    setToppings([]);
  }

  function handleDownload() {
    const order = orderRef.current;
    html2canvas(order).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 0, 0);
      pdf.save('order.pdf');
    });
  }
  
  return (
    <div>
      <h1>Welcome to Pizza Place!</h1>
      <h2>Our available pizza sizes are:</h2>
      {SIZES.map((size) => (
        <label key={size}>
          <input type="radio" name="size" value={size} onChange={handleSizeChange} />
          {size}
        </label>
      ))}
      <h2>Our available toppings are:</h2>
      {TOPPINGS.map((topping) => (
        <label key={topping}>
          <input type="checkbox" name="toppings" value={topping} onChange={handleToppingChange} />
          {topping}
        </label>
      ))}
      <button onClick={handleOrder}>Place Order</button>
      <div ref={orderRef}>
        <h2>Your Order:</h2>
        <p>Size: {size}</p>
        <p>Toppings: {toppings.join(", ")}</p>
      </div>
      <button onClick={handleDownload}>Download PDF</button>
    </div>

}

export default App;
