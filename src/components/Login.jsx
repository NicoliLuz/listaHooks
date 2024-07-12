import React, { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';
const Login = () => {
 const [username, setUsername] = useState('');
 const { login } = useContext(UserContext);
 const handleLogin = () => {
   login(username);
   setUsername('');
 };
 return (
<div>
<input
       type="text"
       value={username}
       onChange={(e) => setUsername(e.target.value)}
     />
<button onClick={handleLogin}>Login</button>
</div>
 );
};
export default Login;