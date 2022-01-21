import React from 'react';
import './List.css'

// function List(props) {
    // destructring props 1st ways inside function
    function List({ itemList, updateItemList }) {
    
    // destructring props 2nd ways
    // const { itemList, updateItemList } = props;

    const deleteItemFromList = key => {
     const newList = itemList.filter((itemObj) => {
            return itemObj.key !== key
        });
        updateItemList(newList)
    }
    // console.log("props", props);
    return (
        <div>
            {itemList.map((itemObj) => { 
                return (
                    <div key={itemObj.key} className="Item">
                        <p>{itemObj.item}</p>
                        <button onClick={() => deleteItemFromList(itemObj.key)}> x</button>
                    </div>
                );
            })}
        </div >
    )
}

export default List;
