import { useState } from "react";
import { useEffect } from "react";
import NewBookmarkForm from "./NewBookmarkForm";

function BookmarkCatalog(props){

    const [mode, setMode] = useState("view");
    const [selectedCategory, setSelectedCategory] = useState("")

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);

      };

    if(mode == "view"){
        return(
            <>
                <button onClick={() =>{
                    setMode("create")
                    setSelectedCategory("")
                }}> + </button>
            </>
        )
    }

    else if (mode == "create"){
        return(
            <>
                <button onClick={() => setMode("view")}> ← </button>
                <label>
                    Select a Category:
                    <select value = {selectedCategory} onChange = {handleCategoryChange}>
                        <option value = "">--------</option>
                        <option value = "eateries">Eateries</option>
                        <option value = "media">Media</option>
                    </select>
                </label>

                <NewBookmarkForm category = {selectedCategory}/>
            </>
        )
    }
}

export default BookmarkCatalog;