import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { FileUploader } from "react-drag-drop-files";
import axios from 'axios'
import "./App.css";
function App() {
  const [name, setName] = useState('');
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };
  const submit = (e: Event) => {
      e.preventDefault()
      const data = new FormData()
      data.append('name', name)
      data.append('file', file)
      axios.post('some url', data)
  }
  return (
    <div className="App">
      <form action="" onSubmit={submit}>
        <label htmlFor="name">name</label>
        <input type="" name="name" id="name" value={ name } onInput={e => setName(e.target.value)} />
        <FileUploader
          handleChange={handleChange}
          name="file"
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default App;
