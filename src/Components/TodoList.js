import React, { useState } from 'react';
import List from "./List";
import './TodoList.css';

function TodoList() {

    const [currentItem, setcurrentItem] = useState(null); // hooks
    const [itemList, updateItemList] = useState([])

    
    const changeHandler = (e) => { // adding items through input
        // console.log("Current value", e.target.value);
        setcurrentItem(e.target.value); 
        // updating state with data customer updated
    }

    const addItemList = () => {
        updateItemList([...itemList, {item: currentItem, key: Date.now()}]);
        /*   spread operator will take previous values, and update takes new item also
        item set as cuurentItem ans key use to new things */
        setcurrentItem("") // after item added remove it from input box
        console.log("List item", itemList);
    }

    return (
        <div >
            <header className="header">
                <div className="wrapper">
                    <div className="Input-wrapper">
                        <input placeholder="Add item" value={currentItem} onChange={changeHandler}/>
                        <button onClick={addItemList}>+</button>
                    </div>
                    <List itemList={itemList} updateItemList={updateItemList}/>
                </div>
            </header>
        </div>
    )
}

export default TodoList;
