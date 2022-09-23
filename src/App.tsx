import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { FileUploader } from "react-drag-drop-files";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./App.css";
function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };
  const onSubmit = (state) => {
    const data = new FormData();
    data.append("name", state.name);
    data.append("file", file);
    axios.post("some url", data);
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">name</label>
        <input {...register("name")} />
        <FileUploader handleChange={handleChange} name="file" />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default App;
