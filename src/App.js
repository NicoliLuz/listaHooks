import React from 'react';
/*importando o forms*/
import ClearableInput from './components/ClearableInput';

/*importando o relógio*/
import RealTimeClock from './components/RealTimeClock';

/*importando realizador de cálculo*/
import FactorialCalculator from './components/FactorialCalculator';

/*importando a lista*/
import ToDoList from './components/ToDoList';

const App = () => {
 return (
  <>
    <h2>Limpar o Campo / Clearable Input</h2>
    <ClearableInput />
  
    <h2>Tempo Real / Real Time Clock </h2>
    <RealTimeClock />

    <h2>Calcule o Fatorial</h2>
    <FactorialCalculator />

    <h2>Lista de Tarefas</h2>
    <ToDoList />
  </>
      
  )
};
export default App;
