import "./App.css";
import axios from "axios";
import { useState } from "react";

function App() {
  const [data, setData] = useState();
  const urlWithProxy = "/api/v1";

  function getDataFromServer() {
    axios
      .get(urlWithProxy)
      .then((res) => setData(res.data))
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <div className="App">
      <h4>    client    no.02       13:04     11/04/2024 </h4>
      <button onClick={getDataFromServer}>Access server using proxy</button>
      <p>data : {data}</p>
    </div>
  );
}

export default App;
