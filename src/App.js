import { useState, useEffect } from "react";



function App() {

  const [ items, setItems ] = useState([])
  const [ reqType, setReqType ] = useState('users')

  const API_URL = 'https://jsonplaceholder.typicode.com/'


  useEffect(() => {
    const fetchItems = async () => {
      try { 
        const response = await fetch(`${API_URL}${reqType}`)
        const data = await response.json()
        console.log(data)
      }
      catch(err) {
        console.log(err)
      }
    }
    fetchItems()
  }, [reqType])



  return (
    <div className="App">Hello
    </div>
  );
}

export default App;
