import "../styles/Cart.css"
import { useState, useEffect } from "react";


function Cart({cart, updateCart}) {
    const [isOpen , setIsOpen] = useState(true)
    const Total = cart.reduce(
        (acc, plantType) => acc + plantType.amount * plantType.price,
        0
    );

    function removeFromCart(name) {
        console.log(name)
        // revoir ici pourquoi le name n'est pas au bon format 
        const cartRemovePlant = cart.filter((plant) => plant.name !== name)
        updateCart([...cartRemovePlant])
    };

    useEffect(() => {
        document.title = `LMJ : ${Total}€ d'achats`
    }, [Total])

    return isOpen ? (
        <div className="lmj-cart" >
            <button onClick={() => setIsOpen(false)} className="lmj-cart-btn">Fermer</button>
            <h2>Panier</h2>
                {cart.map(({name,price,amount}, index) => (
                    <div className="lmj-cart-item" key={`${name}-${index}`}>
                        {name} : {price}€ x {amount}
                        <button onClick={() => removeFromCart(name)}>Retirer</button>
                    </div>
                ))}
            <h3>Total : {Total}€</h3>
            <button onClick={() => updateCart([])}>Vider le Panier</button>
        </div>
    ) : (
        <button className="lmj-cart-opnBtn" onClick={() => setIsOpen(true)} >Ouvrir le Panier</button>
    )
};

export default Cart;