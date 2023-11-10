import UserContextProvider from "./Context/UserContextProvider";
import Login2 from "./components/Login2";
import Profile from "./components/Profile";

function App() {
  return (
    <UserContextProvider>
      <Login2 />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
