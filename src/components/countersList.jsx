import React, { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
    const initialState = [
        {id: 0, value: 0, name: "Ненужная вещь"}, 
        {id: 1, value: 4, name: "Ложка"}, 
        {id: 2, value: 0, name: "Вилка"}, 
        {id: 3, value: 0, name: "Тарелка"}, 
        {id: 4, value: 0, name: "Набор минималиста"}
    ];

    const [counters, setCounters] = useState(initialState);

    const handleDelete = (id) => {
        const newCounters = counters.filter(item => item.id !== id);
        setCounters(newCounters);
    }

    const handleReset = () => {
        setCounters(initialState)
    }

    const handleIncrement = (id) => {
        const increment = counters.map(item => {
            if(item.id === id) {
                item.value += 1
            }
            return item
        })
        setCounters(increment);
    };

    const handleDecrement = (id) => {
        const decrement = counters.map(item => {
            if(item.id === id) {
                item.value -= 1
            }
            return item
        })
        setCounters(decrement);
    };

    return <>
        {counters.map(item => (
                            <Counter 
                                key={item.id}
                                {...item} 
                                onDelete={handleDelete}
                                onIncrement={handleIncrement}
                                onDecrement={handleDecrement}
                            />))}
    <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>Сброс</button>
    </>
    
}

export default CountersList;