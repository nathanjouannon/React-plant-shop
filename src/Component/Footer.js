import '../styles/Footer.css'
import { useState } from 'react';

function Footer() {
    const [inputValue, setInputValue] = useState('')

    function handelBlur() {
        if (!inputValue.includes('@')) {
            alert(`attantion '@' manqant cette email n'est pas valide`)
        }
    }

    return(
        <footer className='lmj-footer'>
            <div className='lmj-footer-elem'>
                Pour les passionées de plante 🪴🌱
            </div>
            <div className='lmj-footer-elem'>
                <p>Laisser nous votre mail :</p>
                <input 
                    placeholder="your.mail@gmail.com" 
                    value={inputValue} 
                    className='lmj-footer-input'
                    onChange={(e) => setInputValue(e.target.value)}
                    onBlur={() => handelBlur()}
                    />
                <button className='lmj-footer-btn' >Envoyer</button>
            </div>
        </footer>
    )
};


 export default Footer;