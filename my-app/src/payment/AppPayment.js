import '../App.css';
import StripeContainer from './StripeContainer';
import React, { useState } from 'react';

function App(){
    const [showItem, setShowItem] = useState(false);

    return (
        <div className='App'>
            <h1>Store</h1>
            {showItem ? <StripeContainer /> : <> <h3>$10.00</h3> 
            <button onClick={() => setShowItem(true)}>Purchase</button></>}
        </div>
    );
}
export default App;