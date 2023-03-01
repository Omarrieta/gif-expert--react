import { useState } from "react";

export function AddCategory({ onNewCategory }) {

  const [inputValue, setInputValue] = useState('')

  const handleChange = (event) => {
    setInputValue(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if(inputValue.trim().length <= 1) return;

    onNewCategory(inputValue.trim())
    setInputValue('');
  }



  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Buscar gifs"
          value={inputValue} 
          onChange={handleChange}
        />
      </form>
      
    </>
  );
}
