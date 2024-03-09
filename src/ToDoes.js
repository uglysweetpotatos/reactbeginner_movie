import Button from './Button';
import styles from './App.module.css';
import { useState, useEffect } from 'react';

function ToDoes() {
    const [toDo, setToDo] = useState('');
    const [toDos, setToDos] = useState([]);
    const onChange = (event) => setToDo(event.target.value);
    console.log(toDo);
    const onSubmit = (event) => {
        event.preventDefault();
        if (toDo === '') {
            return;
        }
        setToDos((currentArray) => [toDo, ...currentArray]);
        setToDo('');
    };
    console.log(toDos);
    console.log(toDos.map((item, index) => <li key={index}>{item}</li>));
    return (
        <div>
            <h1>My To Does ({toDos.length})</h1>
            <form onSubmit={onSubmit}>
                <input
                    onChange={onChange}
                    value={toDo}
                    type="text"
                    placeholder="Write your to do..."
                />
                <button>Add To Do</button>
            </form>
            <hr />
            <ul>
                {/* 인덱스를 안써주면 개발자도구에 오류가뜸 그래서 인덱스를 넣어줌 */}
                {toDos.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default ToDoes;
