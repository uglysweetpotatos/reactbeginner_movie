import Button from './Button';
import styles from './App.module.css';
import { useState, useEffect } from 'react';

function App() {
    const [counter, setValue] = useState(0);
    const [keyword, setKeyword] = useState('');
    const onClick = () => setValue((prev) => prev + 1);
    const onChange = (event) => setKeyword(event.target.value);
    console.log('i run all the time');
    useEffect(() => {
        console.log('I RUN ONLY ONCE.');
    }, []);
    useEffect(() => {
        console.log('i run when "counter" changes', keyword);
    }, [counter]);
    useEffect(() => {
        console.log('i run when "keyword" changes', keyword);
    }, [keyword]);
    useEffect(() => {
        if (keyword !== '' && keyword.length > 5) {
            console.log('i run when "keyword length is more than 5" ', keyword);
        }
    }, [keyword]);
    useEffect(() => {
        console.log('i run when "keyword & counter change" ', keyword);
    }, [keyword, counter]);

    return (
        <div>
            <input
                value={keyword}
                onChange={onChange}
                type="text"
                placeholder="Search here..."
            />
            <h1>{counter}</h1>
            <button onClick={onClick}>click me</button>
            <hr />
        </div>
    );
}

export default App;
