import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export function GifExpertApp() {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategory) => {

    if(categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategory={onAddCategory} />
      {
        categories.map((item) => (
          <GifGrid category={item} key={item}/>
        ))
      }
      
    </>
  );
}
