import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import { useState, useEffect } from "react";
import ImageList from "./components/ImageList";
import Navbar from "./components/Navbar";
const App = () => {
  const [jsonData, setJsonData] = useState([]);
  const [count, setCount] = useState([6]);
  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `https://picsum.photos/v2/list?page=3&limit=${count}`
      );
      setJsonData(response.data);
    })();
  }, [count]);
  return (
    <div>
      <Navbar setCount={setCount} />
      <ImageList jsonData={jsonData} />
    </div>
  );
};

export default App;
