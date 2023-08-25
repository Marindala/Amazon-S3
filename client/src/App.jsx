import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [post, setPost] = useState({
    title: "",
    photo: null,
  });

  const handleTitleChange = (e) => {
    setPost((prevPost) => ({
      ...prevPost,
      title: e.target.value,
    }));
  };

  const handleFileChange = (e) => {
    setPost((prevPost) => ({
      ...prevPost,
      photo: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData()
    formData.append('photo', post.photo) //vas a subir una photo y lo vas a leer desde post.photo
   const response = await axios.post('http://localhost:3000/upload', formData, {
      headers: {
      "content-tye": "multipart/form-data",
      }
    })
    console.log (response)
  };

  //error de cors por cruces de datos entre dominios

  return (
    <div className="content">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={post.title === null ? "" : post.title}
          onChange={handleTitleChange}
        />
        <input type="file" name="Photo" onChange={handleFileChange} />

        <button>Subir</button>
      </form>
    </div>
  );
}

export default App;

//https://cloud.withgoogle.com/
