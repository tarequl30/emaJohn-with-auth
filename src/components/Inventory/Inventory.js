import React from 'react';
// import fakeData from '../../fakeData';



const Inventory = () => {
    const handleAddPd = () => {
        const product = {}
        fetch('https://shrouded-bastion-66288.herokuapp.com/addProduct', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(product)
        })
        
    }
    return (
        <div>
            <form action="">
                <p><span>name:</span><input type="text"/></p>
                <p><span>price:</span><input type="text"/></p>
                <p><span>quantity:</span><input type="text"/></p>
                <p><span>image:</span><input type="file"/></p>
                <button onClick={handleAddPd}>add pd</button>
            </form>
        </div>
    );
};

export default Inventory;