import React, { useState } from 'react';
import './TodoList.css';

function TodoList() {

    const [currentItem, setcurrentItem] = useState(null); // hooks
    const [itemList, updateItemList] = useState([])

    
    const changeHandler = (e) => { // adding items through input
        console.log("Current value", e.target.value);
        setcurrentItem(e.target.value);
    }

    const addItemList = () => {
        updateItemList([...itemList, {item: currentItem, key: Date.now()}]);
        // spread operator will take previous values, and update takes new item also
        //item set as cuurentItem ans key use to new things
        setcurrentItem("")
        console.log("List item", itemList);
    }

    return (
        <div >
            <header className="header">
                <div className="wrapper">
                    <div className="Input-wrapper">
                        <input value={currentItem} onChange={changeHandler}/>
                        <button onClick={addItemList}>+</button>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default TodoList;
