import React, { useState, useMemo } from 'react';

const factorial = (n) => {
 if (n <= 1) return 1;         /*precisamos calcular o fatorial da algum número, ou seja, dado um número, precisamos multiplicar o mesmo pelos seus anteriores até 1 */
 return n * factorial(n - 1);
};
const FactorialCalculator = () => {
 const [number, setNumber] = useState(1);
 const result = useMemo(() => factorial(number), [number]);

 return (
<div>
<input
       type="number"
       value={number}
       onChange={(e) => setNumber(parseInt(e.target.value))} /*onChange={(e) -> é acionado sempre que o valor do input é alterado, independentemente de o usuário ter concluído a edição do campo ou não*/
     />
<p>Fatorial: {result}</p>
</div>
 );
};
export default FactorialCalculator;