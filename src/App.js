import React, { useState, useEffect } from "react"
import axios from "axios"
import "./App.css"

function App() {
  const [data, setData] = useState({ hits: [] })

  useEffect(() => {
    const fetchData = async function () {
      const result = await axios("https://hn.algolia.com/api/v1/search?query=redux")

      setData(result.data)
      console.log(result)
    }

    fetchData()
  }, [])

  return (
    <div className="App">
      <ul>
        {data.hits.map((item) => (
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
