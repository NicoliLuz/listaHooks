import React, { useState, useCallback } from 'react';

const ToDoList = () => {
 const [tasks, setTasks] = useState([]); /*useState -> cria uma variável que controlará o estado do componente*/
 const [inputValue, setInputValue] = useState('');
 const addTask = useCallback(() => { /*useCallback -> retorna uma versão memorizada de uma função*/
   setTasks((prevTasks) => [...prevTasks, inputValue]);
   setInputValue('');
 }, [inputValue]);

 return (
<div>
<input
       type="text"
       value={inputValue}
       onChange={(e) => setInputValue(e.target.value)} /*onChange={(e) -> é acionado sempre que o valor do input é alterado, independentemente de o usuário ter concluído a edição do campo ou não*/
     />
<button onClick={addTask}>Adicionar Tarefa</button>
<ul>
       {tasks.map((task, index) => ( /*map -> para receber um array de números e dobrar o valor de cada um deles*/
<li key={index}>{task}</li>
       ))}
</ul>
</div>
 );
};
export default ToDoList;