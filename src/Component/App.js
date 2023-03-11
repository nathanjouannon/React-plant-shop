import Banner from "./Banner";
import Cart from "./Cart";
import ShoppingList from "./ShoppingList";
import Footer from "./Footer"
import "../styles/App.css"
import { useState, useEffect } from "react";


function App() {
  const savedCart = localStorage.getItem('cart')
  const [cart , updateCart] = useState(savedCart ?  JSON.parse(savedCart) : [])
  
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])


  return (
    <div>
      <Banner />
      <div className="lmj-main-container">
        <Cart cart={cart} updateCart={updateCart} />
        <ShoppingList cart={cart} updateCart={updateCart}/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
