import React, { useEffect, useState } from 'react';

const RealTimeClock = () => {
 const [time, setTime] = useState(new Date().toLocaleTimeString()); /* toLocaleTimeString -> retorna uma string com uma representação sensível ao idioma de uma porção de tempo desta data*/
 const [showMessage, setShowMessage] = useState(false);
 useEffect(() => {
   const interval = setInterval(() => {
     setTime(new Date().toLocaleTimeString()); /* newDate -> criar uma nova instância utilizando a função construtora*/
   }, 1000);
   const timeout = setTimeout(() => {
     setShowMessage(true);
     setTimeout(() => setShowMessage(false), 3000);
   }, 5000);
   return () => {
     clearInterval(interval); /* clearInterval -> limpa o timer configurado pela função setInterval()*/
     clearTimeout(timeout);
   };
   
 }, []);
 return (
<div>
<h1>{time}</h1>
     {showMessage && <p>Aqui está a mensagem!</p>}
</div>
 );
};
export default RealTimeClock;