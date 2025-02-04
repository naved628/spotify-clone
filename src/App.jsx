import Display from "./components/Display";
import Player from "./components/Player";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="h-screen bg-black">
      <div className="h-[90%] flex">
        <Sidebar />
        <Display />
      </div>
      <Player />
    </div>
  );
}

export default App;

// import { useEffect, useState } from "react";

// function App() {
//   const CLIENT_ID = "7084902afdc5454698d6ca141f2184ce"
//   const REDIRECT_URI = "http://localhost:3000"
//   const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
//   const RESPONSE_TYPE = "token"

//   const [token, setToken] = useState("")

//   useEffect(() => {
//       const hash = window.location.hash
//       let token = window.localStorage.getItem("token")

//       if (!token && hash) {
//           token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

//           window.location.hash = ""
//           window.localStorage.setItem("token", token)
//       }

//       setToken(token)

//   }, [])

//   const logout = () => {
//       setToken("")
//       window.localStorage.removeItem("token")
//   }

//   return (
//       <div className="App">
//           <header className="App-header">
//               <h1>Spotify React</h1>
//               {!token ?
//                   <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login
//                       to Spotify</a>
//                   : <button onClick={logout}>Logout</button>}
//           </header>
//       </div>
//   );
// }

// export default App;
