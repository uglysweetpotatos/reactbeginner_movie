import Button from './Button';
import styles from './App.module.css';
import { useState, useEffect } from 'react';

function Hello() {
    //방법 1
    useEffect(() => {
        console.log('created :)');

        return () => console.log('destoryed :(');
    }, []);
    //방법 2
    function byFn() {
        console.log('bye :(');
    }
    function hiFn() {
        console.log('hi :)');
        return byFn;
    }
    useEffect(hiFn, []);
    //방법 3
    useEffect(function () {
        console.log('h :)');
        return () => console.log('b :(');
    });
    //방법 4
    useEffect(function () {
        console.log(':)');
        return function () {
            console.log(':(');
        };
    });
    // ---------------------------------
    return <h1>Hello</h1>;
}

function Cleanup() {
    const [showing, setShowing] = useState(false);
    const onClick = () => setShowing((prev) => !prev);
    return (
        <div>
            <button onClick={onClick}>{showing ? 'Hide' : 'Show'}</button>
            {showing ? <Hello /> : null}
            <hr />
        </div>
    );
}

export default Cleanup;
