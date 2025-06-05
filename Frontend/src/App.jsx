import { useState, useEffect } from 'react'
import "prismjs/themes/prism-tomorrow.css"
import Editor from "react-simple-code-editor"
import prism from "prismjs"
import Markdown from "react-markdown"
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import axios from 'axios'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [code, setCode] = useState(`function sum() {
  return 1+2
}`)
  
  const [review, setReview] = useState(``)
  const [loading, setLoading] = useState(false)  

  useEffect(() => {
    prism.highlightAll()
  }, [])

   async function reviewCode() {
    setLoading(true)                // start loading
    try {
      const response = await axios.post('http://localhost:3000/ai/get-review', { code })
      setReview(response.data)
    } catch (error) {
      setReview("❌ Failed to fetch review.")
      console.error(error)
    } finally {
      setLoading(false)             // stop loading
    }
  }


  function handleFileUpload(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setCode(e.target.result);
      };
      reader.readAsText(file);
    }
  }


  return (
    <>
    <div className="app-container">
    <div className="header">
    <header>
      CodeFixer | AI Code Reviewer 🤖
    </header>
  </div>
    
    <main>
      <div className="left">

        <div className="left-header">
      <input
        type="file"
        id="fileUpload"
        accept=".js, .py, .css, .cpp, .cs, .ts, .html, .json, .java"
        onChange={handleFileUpload}
        className="file-input"
      />
        </div>

        <div className="code">
          <Editor
              value={code}
              onValueChange={code => setCode(code)}
              highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 16,
              }}
            />
        </div>
        <div
         onClick={reviewCode}
        className="review">Review</div>
      </div>
      <div className="right">
            {loading ? (
              <div className="loading-indicator">
                ⏳ Reviewing your code...
              </div>
            ) : (
              <Markdown rehypePlugins={[rehypeHighlight]}>
                {review}
              </Markdown>
            )}
          </div>
    </main>
    </div>
    </>
  )
}


export default App
