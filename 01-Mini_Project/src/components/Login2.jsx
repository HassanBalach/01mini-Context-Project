import React, {useState , useContext } from "react";
import UserContext from "../Context/UserContext";
import UserContextProvider from "../Context/UserContextProvider";

function Login2() {
  const [username , setuserName] = useState()
  const [password , setPassword] = useState()
  
  const {setUser} = useContext(UserContext)

const userInfo =(e)=>{
  e.preventDefault();
  setUser({username, password})
}

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setuserName(e.target.value)}
        placeholder="userName"
      />
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={userInfo}>Submite</button>
    </div>
  );
}

export default Login2;
