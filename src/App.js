import "./App.css";
import React, { useEffect, useState } from "react";
import { marked } from "marked";
import useLocalStorge from "./hooks/useLocalStorge";
import axios from "axios";

const App = () => {
  // const [code, setCode] = useState('## Hello');
  const [code, setCode] = useLocalStorge("markdown", "maram");
  const [compiled, setCompiled] = useState('<h2 id="hello">Hello</h2>');
  const [docs, setDocs] = useState("");
  const [hide, hidePreview] = useState(true);
  const openMD = () => {
    console.log(0);
    console.log(hide, "hide md");
    hidePreview(true);
  };

  const openPreview = () => {
    console.log(0);
    console.log(hide, "hide prev");
    hidePreview(false);
  };

  const handleChange = (e) => {
    setCode(e.target.value);
    setCompiled(marked.parse(e.target.value));
  };
  const openDocs = () => {
    hidePreview(false);
    const apiUrl = 'https://www.markdownguide.org/api/v1/basic-syntax.json';
    console.log(apiUrl);
    axios.get(apiUrl)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error ,'error');
      });
  };
// when i try to fetch data i get this error CORS error	because Proxy , i search about it but in the back should it 
  return (
    <>
      <h1>MarkDown Previewer React App</h1>
      <div className="container">
        <div className="btns">
          <button onClick={openMD} className="btn">
            MarkDown
          </button>
          <button onClick={openPreview}>Preview</button>
          <button onClick={openDocs}>Docs</button>
        </div>
        {hide ? (
          <div>
            <textarea onChange={handleChange} value={code} />
          </div>
        ) : <div>
            <textarea value={compiled} />
          </div> ? (
          <div>
            <textarea value={docs} />
          </div>
        ) : (
          "maram"
        )}
      </div>
    </>
  );
};

export default App;
