import Button from './Button';
import styles from './App.module.css';
import { useState, useEffect } from 'react';

function CoinTracker() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setCoins(json);
                setLoading(false);
            });
    }, []);
    return (
        <div>
            <h1>The Coins!{loading ? '' : `(${coins.length})`}</h1>
            {/* {loading ? <strong>Loading...</strong> : null} */}``
            {loading ? (
                <strong>Loading...</strong>
            ) : (
                <select>
                    {coins.map((coin) => (
                        <option>
                            {coin.name}({coin.symbol}) : {coin.company.name}
                        </option>
                    ))}
                </select>
            )}
        </div>
    );
}

export default CoinTracker;
