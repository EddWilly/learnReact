import './__includes/css/todo.css';
import React, { useState } from 'react';

function NewTodo(){

    const [items, setItems] = useState(['Take out the trash', 'Eat Breakfast', 'Brush teeth', 'Make Up the bed', 'Turn On energized music']);

    function handleAddItem(){
        // projects.push(`Novo Projeto ${Date.now()}`);

        setItems([ ...items, `Novo Projeto ${Date.now()}`]);
    }

    return (
        <form>
            <input type="text" className="itemName" id="itemName" placeholder="Adicionar Novo Item"/>
            <button type="submit">Adicionar</button>
        </form>
    );
}

export default NewTodo;