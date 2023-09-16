import React ,{useState}from 'react'
import axios from "axios"

const Widget = () => {
  const [url, setUrl] = useState('');
  const [result, setResult] = useState(true);

  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log("submitted")
    setResult(false)
    setUrl("")
  }
  return (
    <div>
    <h1>URL Checker Widget</h1>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        required
      />
      <button type="submit">Check</button>
    </form>
    {result ? (
      <div>
        <pre>{JSON.stringify(result, null, 2)}</pre>
      </div>
    ): (
      <div>Made False</div>
    )}
  </div>
  )
}

export default Widget